import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(request: NextRequest, context: { params: Promise<{ maintenanceId: string }> }) {
  try {
    const { maintenanceId } = await context.params;
    const body = await request.json();

    if (body.status === undefined) {
      return NextResponse.json({ success: false, message: "No maintenance updates provided." }, { status: 400 });
    }

    await prisma.$executeRaw`
      UPDATE maintenance_records
      SET status = ${String(body.status).toUpperCase()}, updated_at = NOW(3)
      WHERE maintenanceId = ${maintenanceId}
    `;

    return NextResponse.json({ success: true, maintenanceId });
  } catch (error) {
    console.error("PATCH /api/operations/maintenance/[maintenanceId] failed:", error);
    return NextResponse.json({ success: false, message: "Failed to update maintenance record." }, { status: 500 });
  }
}