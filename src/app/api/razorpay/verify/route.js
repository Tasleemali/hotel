import { hotelDB } from "@/database/hotelDB";
import Booking from "@/models/Booking";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    roomId,
    roomName,
    userEmail,
    checkIn,
    checkOut,
    amount,
    userId
  } = body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return NextResponse.json({ success: false, message: "Signature mismatch" });
  }

  await hotelDB();

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  // Double check availability
  const overlappingBookings = await Booking.find({
    roomId,
    status: { $ne: "cancelled" },
    $or: [
      {
        checkIn: { $lt: checkOutDate },
        checkOut: { $gt: checkInDate },
      },
    ],
  });

  if (overlappingBookings.length > 0) {
    return NextResponse.json({ success: false, message: "Room not available for selected dates" });
  }

  const booking = new Booking({
    userId,
    roomId,
    roomName,
    userEmail,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    amount,
    status: "confirmed",
    razorpay_order_id,
    razorpay_payment_id,
  });

  await booking.save();

  return NextResponse.json({ success: true });
}
