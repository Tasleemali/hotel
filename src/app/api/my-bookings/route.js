import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { hotelDB } from "@/database/hotelDB";
import Booking from "@/models/Booking";


export async function GET() {
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({error:"not authenicated"} ,{status:401})
    }
    await hotelDB()
    const booking = await Booking.find({userId: session.user.id})

    return NextResponse.json(booking)
}