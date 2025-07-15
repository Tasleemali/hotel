import { hotelDB } from "@/database/hotelDB";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  await hotelDB();
  const { id } = params;

  const booking = await Booking.findByIdAndUpdate(id, { status: "cancelled" });

  if (!booking) {
    return NextResponse.json({ success: false, message: "Booking not found" });
  }

  return NextResponse.json({ success: true, message: "Booking cancelled" });
}
