import { hotelDB } from "@/database/hotelDB";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { roomId, checkIn, checkOut } = await req.json();

  await hotelDB();

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

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
    return NextResponse.json({ available: false, message: "Room not available for selected dates" });
  } else {
    return NextResponse.json({ available: true });
  }
}
