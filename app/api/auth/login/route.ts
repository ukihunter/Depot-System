import { NextRequest, NextResponse } from "next/server";
import argon2 from "argon2";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const username =
      typeof body.username === "string" ? body.username.trim() : "";

    const password = typeof body.password === "string" ? body.password : "";

    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Username and password are required.",
        },
        { status: 400 },
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email: username }],
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password.",
        },
        { status: 401 },
      );
    }

    const passwordValid = await argon2.verify(user.password, password);

    if (!passwordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password.",
        },
        { status: 401 },
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        full_name: user.fullName,
        email: user.email,
        username: user.username,
        role: user.role,
        depot_id: user.depotId,
      },
    });
  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 },
    );
  }
}
