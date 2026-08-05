import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export function serializeSchedule(schedule: any) {
  return {
    schedule_id: schedule.scheduleId,
    route_id: schedule.routeId,
    vehicle_id: schedule.vehicleId,
    driver_id: schedule.driverId,
    departure_time: schedule.departureTime,
    arrival_time: schedule.arrivalTime,
    schedule_date: schedule.scheduleDate.toISOString().split("T")[0],
    status:
      schedule.status === "SCHEDULED"
        ? "Scheduled"
        : schedule.status === "ACTIVE"
          ? "Active"
          : schedule.status === "DELAYED"
            ? "Delayed"
            : schedule.status === "COMPLETED"
              ? "Completed"
              : "Cancelled",
  };
}

export async function GET() {
  try {
    const schedules = await prisma.schedule.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      schedules: schedules.map(serializeSchedule),
    });
  } catch (error) {
    console.error("GET /api/schedules error:", error);

    return NextResponse.json(
      {
        error: "Failed to load schedules",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      route_id,
      vehicle_id,
      driver_id,
      departure_time,
      arrival_time,
      schedule_date,
      status,
    } = body;

    if (
      !route_id ||
      !vehicle_id ||
      !driver_id ||
      !departure_time ||
      !arrival_time ||
      !schedule_date
    ) {
      return NextResponse.json(
        { error: "All schedule fields are required." },
        { status: 400 },
      );
    }

    const routeExists = await prisma.route.findUnique({
      where: { routeId: String(route_id) },
    });
    if (!routeExists) {
      return NextResponse.json({ error: "Route not found" }, { status: 404 });
    }

    const vehicleExists = await prisma.vehicle.findUnique({
      where: { vehicleId: String(vehicle_id) },
    });
    if (!vehicleExists) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    const driverExists = await prisma.driver.findUnique({
      where: { driverId: String(driver_id) },
    });
    if (!driverExists) {
      return NextResponse.json({ error: "Driver not found" }, { status: 404 });
    }

    const schedule = await prisma.schedule.create({
      data: {
        routeId: String(route_id),
        vehicleId: String(vehicle_id),
        driverId: String(driver_id),
        departureTime: String(departure_time),
        arrivalTime: String(arrival_time),
        scheduleDate: new Date(`${schedule_date}T00:00:00.000Z`),
        status:
          status === "Active"
            ? "ACTIVE"
            : status === "Delayed"
              ? "DELAYED"
              : status === "Completed"
                ? "COMPLETED"
                : status === "Cancelled"
                  ? "CANCELLED"
                  : "SCHEDULED",
      },
    });

    return NextResponse.json(
      {
        schedule: serializeSchedule(schedule),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/schedules error:", error);

    return NextResponse.json(
      {
        error: "Failed to create schedule",
      },
      { status: 500 },
    );
  }
}
