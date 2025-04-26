


import { hotelDB } from "@/database/hotelDB";
import Booking from "@/models/Booking";
import Room from "@/models/Room";

export async function GET() {
  await hotelDB();
  const rooms = await Room.find();

  // Check if there are any bookings for each room, and update quantity
  for (const room of rooms) {
    const bookedCount = await Booking.countDocuments({
      room: room._id,
      $or: [
        { checkIn: { $lte: new Date() }, checkOut: { $gte: new Date() } },
        { checkIn: { $lte: new Date() }, checkOut: { $gte: new Date() } },
      ],
    });

    room.availableRooms = room.quantity - bookedCount;
  }

  return Response.json(rooms);
}