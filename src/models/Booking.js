// models/Booking.js
import mongoose from 'mongoose'



const bookingSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room", // Reference to the Room model
    required: true,
  },
  roomName: {
    type: String,
    required: true,  // To store room name separately
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,  // Payment ID after Razorpay payment
  },
  amount: {
    type: Number,
    required: true,  // Total amount for the booking
  },
  roomQuantity: {  // Changed from "quantity" to "roomQuantity"
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema)



