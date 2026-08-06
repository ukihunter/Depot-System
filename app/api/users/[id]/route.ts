import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import argon2 from "argon2";

type Params = { params: Promise<{ id: string }> | { id?: string } };

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const resolved =
      params && typeof (params as any).then === "function"
        ? await (params as any)
        : params;
    const idStr = resolved?.id;
    if (!idStr)
      return NextResponse.json(
        { success: false, message: "Missing user id" },
        { status: 400 },
      );
    const id = Number(idStr);
    if (Number.isNaN(id))
      return NextResponse.json(
        { success: false, message: "Invalid user id" },
        { status: 400 },
      );

    const body = await request.json();

    const updates: any = {};
    if (body.fullName !== undefined) updates.fullName = body.fullName;
    if (body.email !== undefined) updates.email = body.email;
    if (body.username !== undefined) updates.username = body.username;
    if (body.role !== undefined) updates.role = body.role;
    if (body.status !== undefined) updates.status = body.status;
    if (body.depotId !== undefined)
      updates.depotId = body.depotId === "" ? null : body.depotId;
    if (body.password)
      updates.password = await argon2.hash(String(body.password));

    const user = await prisma.user.update({ where: { id }, data: updates });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        username: user.username,
        role: user.role,
        status: user.status,
        depotId: user.depotId,
      },
    });
  } catch (error) {
    console.error("PUT /api/users/[id] failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update user." },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const resolved =
      params && typeof (params as any).then === "function"
        ? await (params as any)
        : params;
    const idStr = resolved?.id;
    if (!idStr)
      return NextResponse.json(
        { success: false, message: "Missing user id" },
        { status: 400 },
      );
    const id = Number(idStr);
    if (Number.isNaN(id))
      return NextResponse.json(
        { success: false, message: "Invalid user id" },
        { status: 400 },
      );

    await prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/users/[id] failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete user." },
      { status: 500 },
    );
  }
}
