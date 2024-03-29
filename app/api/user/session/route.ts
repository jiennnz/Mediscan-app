import dbConnect from "@/lib/dbConnect";
import { getDataFromToken } from "@/lib/getDataFromToken";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const userId = await getDataFromToken(request);

    const user = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json({
      message: "User found",
      user: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
