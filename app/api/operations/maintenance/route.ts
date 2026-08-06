import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "node:crypto";

function serializeMaintenance(record: {
  maintenanceId: string;
  vehicleId: string;
  maintenanceType: "SCHEDULED" | "CORRECTIVE" | "EMERGENCY";
  serviceDate: Date;
  nextServiceDate: Date;
  cost: number;
  remarks: string | null;
  status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
}) {
  return {
    maintenance_id: record.maintenanceId,
    vehicle_id: record.vehicleId,
    maintenance_type:
      record.maintenanceType === "CORRECTIVE"
        ? "Corrective"
        : record.maintenanceType === "EMERGENCY"
          ? "Emergency"
          : "Scheduled",
    service_date: record.serviceDate.toISOString().split("T")[0],
    next_service_date: record.nextServiceDate.toISOString().split("T")[0],
    cost: Number(record.cost),
    remarks: record.remarks ?? "",
    status:
      record.status === "IN_PROGRESS"
        ? "In Progress"
        : record.status === "COMPLETED"
          ? "Completed"
          : record.status === "CANCELLED"
            ? "Cancelled"
            : "Scheduled",
  };
}

export async function GET() {
  try {
    const rows = await prisma.$queryRaw<
      Array<{
        maintenanceId: string;
        vehicleId: string;
        maintenanceType: "SCHEDULED" | "CORRECTIVE" | "EMERGENCY";
        serviceDate: Date;
        nextServiceDate: Date;
        cost: number;
        remarks: string | null;
        status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
      }>
    >`
      SELECT maintenanceId, vehicle_id AS vehicleId, maintenance_type AS maintenanceType, service_date AS serviceDate, next_service_date AS nextServiceDate, cost, remarks, status
      FROM maintenance_records
      ORDER BY created_at DESC
    `;

    return NextResponse.json({
      success: true,
      maintenance: rows.map(serializeMaintenance),
    });
  } catch (error) {
    console.error("GET /api/operations/maintenance failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to load maintenance records." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const vehicleId = String(body.vehicle_id ?? "").trim();
    const maintenanceType = String(
      body.maintenance_type ?? "SCHEDULED",
    ).toUpperCase();
    const serviceDate = String(body.service_date ?? "").trim();
    const nextServiceDate = String(body.next_service_date ?? "").trim();
    const cost = Number(body.cost ?? 0);
    const remarks =
      body.remarks === undefined ? null : String(body.remarks).trim();
    const status = String(body.status ?? "SCHEDULED").toUpperCase();

    if (
      !vehicleId ||
      !serviceDate ||
      !nextServiceDate ||
      !Number.isFinite(cost)
    ) {
      return NextResponse.json(
        { success: false, message: "Vehicle, dates, and cost are required." },
        { status: 400 },
      );
    }

    const maintenanceId = randomUUID().replace(/-/g, "");

    await prisma.$executeRaw`
      INSERT INTO maintenance_records (maintenanceId, vehicle_id, maintenance_type, service_date, next_service_date, cost, remarks, status, created_at, updated_at)
      VALUES (${maintenanceId}, ${vehicleId}, ${maintenanceType}, ${new Date(`${serviceDate}T00:00:00.000Z`)}, ${new Date(`${nextServiceDate}T00:00:00.000Z`)}, ${cost}, ${remarks}, ${status}, NOW(3), NOW(3))
    `;

    const rows = await prisma.$queryRaw<
      Array<{
        maintenanceId: string;
        vehicleId: string;
        maintenanceType: "SCHEDULED" | "CORRECTIVE" | "EMERGENCY";
        serviceDate: Date;
        nextServiceDate: Date;
        cost: number;
        remarks: string | null;
        status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
      }>
    >`
      SELECT maintenanceId, vehicle_id AS vehicleId, maintenance_type AS maintenanceType, service_date AS serviceDate, next_service_date AS nextServiceDate, cost, remarks, status
      FROM maintenance_records
      WHERE maintenanceId = ${maintenanceId}
      ORDER BY created_at DESC
      LIMIT 1
    `;

    const record = rows[0];
    if (!record) {
      return NextResponse.json(
        { success: false, message: "Failed to create maintenance record." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, maintenance: serializeMaintenance(record) },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/operations/maintenance failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create maintenance record." },
      { status: 500 },
    );
  }
}
