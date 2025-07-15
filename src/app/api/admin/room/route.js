"use server"
import { hotelDB } from "@/database/hotelDB";
import Room from "@/models/Room";
import { NextResponse } from "next/server";

export async function POST(req) {
  await hotelDB()
  try {
    const body = await req.json();
    const { image, name, description, price, totalRooms, } = body;

    // Create a new Room document
    const newRoom = new Room({
      image,
      name,
      description,
       price: Number(price),
      totalRooms: Number(totalRooms),
     
    });

    // Save to database
    await newRoom.save();

    return NextResponse.json({ message: "Room added successfully",  newRoom });
  } catch (error) {
    console.error("Error adding room:", error);
    return NextResponse.json({ message: "Error occurred while adding room" }, { status: 500 });
  }
}
