import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  const { amount } = await req.json();

  try {
    const options = {
      amount: amount * 100, // in paise
      currency: "INR",
      payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);

    return NextResponse.json({ success: true, order_id: order.id });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
