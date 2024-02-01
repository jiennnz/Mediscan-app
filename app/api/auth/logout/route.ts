import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    const token = request.cookies.get("token");
    if (token) {
      response.cookies.delete("token"); // Delete the 'token' cookie
    } else {
      console.error("No 'token' cookie found."); // Handle the case where 'token' cookie is not found
    }

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 },
    );
  }
}
