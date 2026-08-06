import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ maintenanceId: string }> },
) {
  try {
    const { maintenanceId } = await context.params;
    const body = await request.json();

    if (body.status === undefined) {
      return NextResponse.json(
        { success: false, message: "No maintenance updates provided." },
        { status: 400 },
      );
    }

    await prisma.maintenanceRecord.update({
      where: {
        maintenanceId,
      },
      data: {
        status:
          String(body.status).toUpperCase() === "IN_PROGRESS"
            ? "IN_PROGRESS"
            : String(body.status).toUpperCase() === "COMPLETED"
              ? "COMPLETED"
              : String(body.status).toUpperCase() === "CANCELLED"
                ? "CANCELLED"
                : "SCHEDULED",
      },
    });

    return NextResponse.json({ success: true, maintenanceId });
  } catch (error) {
    console.error("PATCH /api/operations/maintenance/[maintenanceId] failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update maintenance record." },
      { status: 500 },
    );
  }
}