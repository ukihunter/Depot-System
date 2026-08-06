import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "node:crypto";

function serializeFuelLog(log: {
  fuelId: string;
  vehicleId: string;
  date: Date;
  liters: number;
  cost: number;
  distanceCovered: number;
}) {
  return {
    fuel_id: log.fuelId,
    vehicle_id: log.vehicleId,
    date: log.date.toISOString().split("T")[0],
    liters: Number(log.liters),
    cost: Number(log.cost),
    distance_covered: Number(log.distanceCovered),
  };
}

export async function GET() {
  try {
    const rows = await prisma.$queryRaw<Array<{
      fuelId: string;
      vehicleId: string;
      date: Date;
      liters: number;
      cost: number;
      distanceCovered: number;
    }>>`
      SELECT fuelId, vehicle_id AS vehicleId, date, liters, cost, distance_covered AS distanceCovered
      FROM fuel_logs
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ success: true, fuelLogs: rows.map(serializeFuelLog) });
  } catch (error) {
    console.error("GET /api/operations/fuel-logs failed:", error);
    return NextResponse.json({ success: false, message: "Failed to load fuel logs." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const vehicleId = String(body.vehicle_id ?? "").trim();
    const date = String(body.date ?? "").trim();
    const liters = Number(body.liters ?? 0);
    const cost = Number(body.cost ?? 0);
    const distanceCovered = Number(body.distance_covered ?? 0);

    if (!vehicleId || !date || !Number.isFinite(liters) || !Number.isFinite(cost) || !Number.isFinite(distanceCovered)) {
      return NextResponse.json({ success: false, message: "Vehicle, date, liters, cost, and distance are required." }, { status: 400 });
    }

    const fuelId = randomUUID().replace(/-/g, "");

    await prisma.$executeRaw`
      INSERT INTO fuel_logs (fuelId, vehicle_id, date, liters, cost, distance_covered, created_at, updated_at)
      VALUES (${fuelId}, ${vehicleId}, ${new Date(`${date}T00:00:00.000Z`)}, ${liters}, ${cost}, ${distanceCovered}, NOW(3), NOW(3))
    `;

    const rows = await prisma.$queryRaw<Array<{
      fuelId: string;
      vehicleId: string;
      date: Date;
      liters: number;
      cost: number;
      distanceCovered: number;
    }>>`
      SELECT fuelId, vehicle_id AS vehicleId, date, liters, cost, distance_covered AS distanceCovered
      FROM fuel_logs
      WHERE fuelId = ${fuelId}
      ORDER BY created_at DESC
      LIMIT 1
    `;

    const fuelLog = rows[0];
    if (!fuelLog) {
      return NextResponse.json({ success: false, message: "Failed to create fuel log." }, { status: 500 });
    }

    return NextResponse.json({ success: true, fuelLog: serializeFuelLog(fuelLog) }, { status: 201 });
  } catch (error) {
    console.error("POST /api/operations/fuel-logs failed:", error);
    return NextResponse.json({ success: false, message: "Failed to create fuel log." }, { status: 500 });
  }
}