import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: {
    id: string;
  };
};

// UPDATE DEPOT
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    // `params` may be a Promise in Next.js app routes — unwrap if necessary
    const resolvedParams =
      params && typeof (params as any).then === "function"
        ? await (params as any)
        : params;
    const idStr = resolvedParams?.id;

    if (!idStr) {
      return NextResponse.json(
        { success: false, message: "Missing depot id in request path" },
        { status: 400 },
      );
    }

    const id = Number(idStr);
    if (Number.isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid depot id" },
        { status: 400 },
      );
    }

    const body = await request.json();

    const updates: any = {};
    if (body.name !== undefined) updates.name = body.name;
    if (body.code !== undefined) updates.code = body.code;
    if (body.address !== undefined) updates.address = body.address;
    if (body.phone !== undefined) updates.phone = body.phone;
    if (body.email !== undefined) updates.email = body.email;
    if (body.isActive !== undefined) updates.isActive = body.isActive;

    const depot = await prisma.depot.update({ where: { id }, data: updates });

    return NextResponse.json({ success: true, depot });
  } catch (error) {
    console.error("UPDATE DEPOT ERROR:", error);
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        success: false,
        message: `Failed to update depot: ${errMsg}`,
      },
      { status: 500 },
    );
  }
}

// DELETE DEPOT (soft-delete)
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const resolvedParams =
      params && typeof (params as any).then === "function"
        ? await (params as any)
        : params;
    const idStr = resolvedParams?.id;
    if (!idStr) {
      return NextResponse.json(
        { success: false, message: "Missing depot id in request path" },
        { status: 400 },
      );
    }

    const id = Number(idStr);
    if (Number.isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid depot id" },
        { status: 400 },
      );
    }

    await prisma.depot.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return NextResponse.json({ success: true, message: "Depot deleted" });
  } catch (error) {
    console.error("DELETE DEPOT ERROR:", error);
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        success: false,
        message: `Failed to delete depot: ${errMsg}`,
      },
      { status: 500 },
    );
  }
}
