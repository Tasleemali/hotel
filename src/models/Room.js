import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  quantity: { type: Number, default: 0 },  // Total rooms available
});



export default mongoose.models.allrooms || mongoose.model('allrooms', RoomSchema)