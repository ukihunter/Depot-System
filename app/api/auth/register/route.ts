import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import argon2 from "argon2";
import { UserRole } from "@/generated/prisma/browser";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    const username = String(body.username ?? "").trim();
    const password = String(body.password ?? "");

    if (!fullName || !email || !username || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 6 characters.",
        },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username,
          },
          {
            email,
          },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message:
            existingUser.username === username
              ? "Username already exists."
              : "Email already exists.",
        },
        { status: 409 },
      );
    }

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        username,
        password: hashedPassword,
        role: UserRole.OPERATIONAL_STAFF,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        user: {
          id: user.id,
          full_name: user.fullName,
          email: user.email,
          username: user.username,
          role: user.role,
          depot_id: user.depotId,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("REGISTER_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create account.",
      },
      { status: 500 },
    );
  }
}
