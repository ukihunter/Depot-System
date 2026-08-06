import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serializeSchedule } from "../route";

function parseScheduleDate(value: string) {
  return new Date(`${value}T00:00:00.000Z`);
}

function combineDateAndTime(date: Date, time: string) {
  const datePart = date.toISOString().split("T")[0];
  const normalizedTime = time.length === 5 ? `${time}:00` : time;
  return new Date(`${datePart}T${normalizedTime}.000Z`);
}

function formatTime(value: Date) {
  return value.toISOString().slice(11, 16);
}

interface ScheduleContext {
  params: Promise<{
    scheduleId: string;
  }>;
}

export async function GET(_request: NextRequest, context: ScheduleContext) {
  try {
    const { scheduleId } = await context.params;

    const schedule = await prisma.schedule.findUnique({
      where: {
        scheduleId,
      },
    });

    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      schedule: serializeSchedule(schedule),
    });
  } catch (error) {
    console.error("GET schedule error:", error);

    return NextResponse.json(
      { error: "Failed to load schedule" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest, context: ScheduleContext) {
  try {
    const { scheduleId } = await context.params;

    const existingSchedule = await prisma.schedule.findUnique({
      where: {
        scheduleId,
      },
    });

    if (!existingSchedule) {
      return NextResponse.json(
        { error: "Schedule not found" },
        { status: 404 },
      );
    }

    const body = await request.json();

    const data: Record<string, any> = {};

    if (body.route_id !== undefined) {
      const routeExists = await prisma.route.findUnique({
        where: { routeId: String(body.route_id) },
      });
      if (!routeExists) {
        return NextResponse.json({ error: "Route not found" }, { status: 404 });
      }
      if (routeExists.depotId !== existingSchedule.depotId) {
        return NextResponse.json(
          { error: "Route belongs to a different depot." },
          { status: 400 },
        );
      }
      data.routeId = routeExists.id;
    }

    if (body.vehicle_id !== undefined) {
      const vehicleExists = await prisma.vehicle.findUnique({
        where: { vehicleId: String(body.vehicle_id) },
      });
      if (!vehicleExists) {
        return NextResponse.json(
          { error: "Vehicle not found" },
          { status: 404 },
        );
      }
      if (vehicleExists.depotId !== existingSchedule.depotId) {
        return NextResponse.json(
          { error: "Vehicle belongs to a different depot." },
          { status: 400 },
        );
      }
      data.vehicleId = vehicleExists.id;
    }

    if (body.driver_id !== undefined) {
      const driverExists = await prisma.driver.findUnique({
        where: { driverId: String(body.driver_id) },
      });
      if (!driverExists) {
        return NextResponse.json(
          { error: "Driver not found" },
          { status: 404 },
        );
      }
      if (driverExists.depotId !== existingSchedule.depotId) {
        return NextResponse.json(
          { error: "Driver belongs to a different depot." },
          { status: 400 },
        );
      }
      data.driverId = driverExists.id;
    }

    if (body.departure_time !== undefined) {
      data.departureTime = combineDateAndTime(
        body.schedule_date !== undefined
          ? parseScheduleDate(String(body.schedule_date))
          : existingSchedule.scheduleDate,
        String(body.departure_time),
      );
    }

    if (body.arrival_time !== undefined) {
      data.arrivalTime = combineDateAndTime(
        body.schedule_date !== undefined
          ? parseScheduleDate(String(body.schedule_date))
          : existingSchedule.scheduleDate,
        String(body.arrival_time),
      );
    }

    if (body.schedule_date !== undefined) {
      const scheduleDate = parseScheduleDate(String(body.schedule_date));
      data.scheduleDate = scheduleDate;

      if (body.departure_time === undefined) {
        data.departureTime = combineDateAndTime(
          scheduleDate,
          formatTime(existingSchedule.departureTime),
        );
      }

      if (body.arrival_time === undefined) {
        data.arrivalTime = combineDateAndTime(
          scheduleDate,
          formatTime(existingSchedule.arrivalTime),
        );
      }
    }

    if (body.status !== undefined) {
      data.status =
        body.status === "Active"
          ? "ACTIVE"
          : body.status === "Delayed"
            ? "DELAYED"
            : body.status === "Completed"
              ? "COMPLETED"
              : body.status === "Cancelled"
                ? "CANCELLED"
                : "SCHEDULED";
    }

    const schedule = await prisma.schedule.update({
      where: {
        scheduleId,
      },
      data,
      include: {
        route: {
          select: { routeId: true },
        },
        vehicle: {
          select: { vehicleId: true },
        },
        driver: {
          select: { driverId: true },
        },
      },
    });

    return NextResponse.json({
      schedule: serializeSchedule(schedule),
    });
  } catch (error) {
    console.error("PUT schedule error:", error);

    return NextResponse.json(
      { error: "Failed to update schedule" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: NextRequest, context: ScheduleContext) {
  try {
    const { scheduleId } = await context.params;

    const existingSchedule = await prisma.schedule.findUnique({
      where: {
        scheduleId,
      },
    });

    if (!existingSchedule) {
      return NextResponse.json(
        { error: "Schedule not found" },
        { status: 404 },
      );
    }

    await prisma.schedule.delete({
      where: {
        scheduleId,
      },
    });

    return NextResponse.json({
      message: "Schedule deleted successfully",
    });
  } catch (error) {
    console.error("DELETE schedule error:", error);

    return NextResponse.json(
      { error: "Failed to delete schedule" },
      { status: 500 },
    );
  }
}
