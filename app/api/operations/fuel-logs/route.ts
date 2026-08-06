import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function formatDate(value: Date) {
  return value.toISOString().split("T")[0];
}

function serializeFuelLog(log: {
  fuelId: string;
  depotId: number;
  vehicle: { vehicleId: string };
  date: Date;
  liters: number;
  cost: number;
  distanceCovered: number;
}) {
  return {
    fuel_id: log.fuelId,
    depot_id: log.depotId,
    vehicle_id: log.vehicle.vehicleId,
    date: formatDate(log.date),
    liters: Number(log.liters),
    cost: Number(log.cost),
    distance_covered: Number(log.distanceCovered),
  };
}

export async function GET(request: NextRequest) {
  try {
    const depotIdParam = request.nextUrl.searchParams.get("depotId");
    const depotId = depotIdParam === null ? undefined : Number(depotIdParam);

    const rows = await prisma.fuelLog.findMany({
      where:
        depotId === undefined
          ? undefined
          : {
              depotId,
            },
      include: {
        vehicle: {
          select: { vehicleId: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      fuelLogs: rows.map(serializeFuelLog),
    });
  } catch (error) {
    console.error("GET /api/operations/fuel-logs failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to load fuel logs." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const depotId = Number(body.depotId ?? body.depot_id);
    const vehicleId = String(body.vehicle_id ?? "").trim();
    const date = String(body.date ?? "").trim();
    const liters = Number(body.liters ?? 0);
    const cost = Number(body.cost ?? 0);
    const distanceCovered = Number(body.distance_covered ?? 0);

    if (
      !Number.isFinite(depotId) ||
      !vehicleId ||
      !date ||
      !Number.isFinite(liters) ||
      !Number.isFinite(cost) ||
      !Number.isFinite(distanceCovered)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Vehicle, date, liters, cost, and distance are required.",
        },
        { status: 400 },
      );
    }

    const depot = await prisma.depot.findUnique({
      where: {
        id: depotId,
      },
    });

    if (!depot) {
      return NextResponse.json(
        { success: false, message: "Depot not found." },
        { status: 404 },
      );
    }

    const vehicle = await prisma.vehicle.findUnique({
      where: {
        vehicleId,
      },
    });

    if (!vehicle) {
      return NextResponse.json(
        { success: false, message: "Vehicle not found." },
        { status: 404 },
      );
    }

    if (vehicle.depotId !== depotId) {
      return NextResponse.json(
        {
          success: false,
          message: "Vehicle belongs to a different depot.",
        },
        { status: 400 },
      );
    }

    const fuelLog = await prisma.fuelLog.create({
      data: {
        depotId,
        vehicleId: vehicle.id,
        date: new Date(`${date}T00:00:00.000Z`),
        liters,
        cost,
        distanceCovered,
      },
      include: {
        vehicle: {
          select: { vehicleId: true },
        },
      },
    });

    return NextResponse.json(
      { success: true, fuelLog: serializeFuelLog(fuelLog) },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/operations/fuel-logs failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create fuel log." },
      { status: 500 },
    );
  }
}
