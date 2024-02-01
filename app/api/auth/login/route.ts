import { loginSchema } from "@/types/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

import User from "@/models/User";
import bcryptjs from "bcryptjs";

import { createToken } from "@/lib/createToken";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const validatedFields = loginSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json({ error: "Invalid fields" });
    }

    const { username, password } = validatedFields.data;

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 },
      );
    }

    // check if password is correct
    const passwordsMatch = await bcryptjs.compare(password, user.password);
    if (!passwordsMatch) {
      return NextResponse.json(
        { error: "Invalid Username or Password" },
        { status: 400 },
      );
    }

    // creating token data
    const token = createToken({
      id: new ObjectId(user._id), // Explicitly cast to ObjectId
      username: user.username,
      email: user.email,
    });

    // create a json response
    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
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
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 },
    );
  }
}
