import { hotelDB } from "@/database/hotelDB";
import User from "@/models/User";

import bcrypt from "bcryptjs";


import { NextResponse } from "next/server";

export async function POST(req) {
    await hotelDB();
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ success: false, message: "Missing field" }, { status: 400 });
    }

    

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("HASHED:", hashedPassword); // 👈 check this
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
      });
    return NextResponse.json({ success: true, message: "User created successfully" ,user: newUser }, { status: 201 });
    console.log( "user",newUser)
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
