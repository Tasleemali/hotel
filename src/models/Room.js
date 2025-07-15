import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    image:String,
    name:String,
    description:String,
    price:Number,
    totalRooms :Number
    
  }
);

const Room = mongoose.models.Room || mongoose.model("Room", RoomSchema);
export default Room;
