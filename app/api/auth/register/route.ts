import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import jwt from "jsonwebtoken";
import { createToken } from "@/lib/createToken";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    const user = await User.findOne({ username });
    const userEmail = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 },
      );
    }

    if (userEmail) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // creating token data
    const token = createToken({
      id: new ObjectId(savedUser._id), // Explicitly cast to ObjectId
      username: savedUser.username,
      email: savedUser.email,
    });

    const response = NextResponse.json({
      message: "Register Successful",
      success: true,
      user: savedUser,
      token: token,
    });

    // set token as http-only cookie
    response.cookies.set("token", token, {
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
