import { hotelDB } from "@/database/hotelDB"
import Room from "@/models/Room"



export async function GET(req) {
        await hotelDB()
        const rooms = await Room.find()
        return Response.json(rooms)
  }
  
