// /app/api/get/[id]/route.js

import { hotelDB } from "@/database/hotelDB";
import Room from "@/models/Room";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await hotelDB();
   const {id} = params
  const room = await Room.findById(id);
  if (!room) {
    return NextResponse.json({ error: "Room not found" }, { status: 404 });
  }

  return NextResponse.json(room);
}
