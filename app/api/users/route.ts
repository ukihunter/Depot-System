import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import argon2 from "argon2";
import { UserRole, UserStatus } from "@/generated/prisma/browser";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: { deletedAt: null },
      include: { depot: true },
      orderBy: { createdAt: "desc" },
    });

    const payload = users.map((u) => ({
      id: u.id,
      fullName: u.fullName,
      email: u.email,
      username: u.username,
      role: u.role,
      status: u.status,
      depotId: u.depotId,
      depot: u.depot ? { id: u.depot.id, name: u.depot.name } : null,
    }));

    return NextResponse.json({ success: true, users: payload });
  } catch (error) {
    console.error("GET /api/users failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to load users." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    const username = String(body.username ?? "").trim();
    const password = String(body.password ?? "");
    const role = String(
      body.role ?? "OPERATIONAL_STAFF",
    ).toUpperCase() as unknown as UserRole;
    const status = String(
      body.status ?? "ACTIVE",
    ).toUpperCase() as unknown as UserStatus;
    const depotId =
      body.depotId === null || body.depotId === ""
        ? null
        : Number(body.depotId || null);

    if (!fullName || !email || !username) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name, email and username are required.",
        },
        { status: 400 },
      );
    }

    const existing = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    });
    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message:
            existing.username === username
              ? "Username already exists."
              : "Email already exists.",
        },
        { status: 409 },
      );
    }

    const hashed = password ? await argon2.hash(password) : undefined;

    const created = await prisma.user.create({
      data: {
        fullName,
        email,
        username,
        password: hashed ?? "",
        role: (role as any) ?? UserRole.OPERATIONAL_STAFF,
        status: (status as any) ?? UserStatus.ACTIVE,
        depotId: depotId ?? null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        user: {
          id: created.id,
          fullName: created.fullName,
          email: created.email,
          username: created.username,
          role: created.role,
          status: created.status,
          depotId: created.depotId,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/users failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create user." },
      { status: 500 },
    );
  }
}
