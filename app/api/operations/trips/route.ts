import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function formatDateTime(value: Date | null) {
  return value ? value.toISOString() : "";
}

function parseDateTime(value: string) {
  return new Date(value);
}

function parseOptionalDateTime(value: unknown) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return null;
  }

  return new Date(String(value));
}

function serializeTrip(trip: {
  tripId: string;
  schedule: { scheduleId: string };
  startTime: Date;
  endTime: Date | null;
  status: "SCHEDULED" | "ACTIVE" | "DELAYED" | "COMPLETED" | "CANCELLED";
  remarks: string | null;
}) {
  return {
    trip_id: trip.tripId,
    schedule_id: trip.schedule.scheduleId,
    start_time: formatDateTime(trip.startTime),
    end_time: formatDateTime(trip.endTime),
    status:
      trip.status === "ACTIVE"
        ? "Active"
        : trip.status === "DELAYED"
          ? "Delayed"
          : trip.status === "COMPLETED"
            ? "Completed"
            : trip.status === "CANCELLED"
              ? "Cancelled"
              : "Scheduled",
    remarks: trip.remarks ?? "",
  };
}

export async function GET(request: NextRequest) {
  try {
    const depotIdParam = request.nextUrl.searchParams.get("depotId");
    const depotId = depotIdParam === null ? undefined : Number(depotIdParam);

    const trips = await prisma.trip.findMany({
      where:
        depotId === undefined
          ? undefined
          : {
              schedule: {
                depotId,
              },
            },
      include: {
        schedule: {
          select: { scheduleId: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      trips: trips.map(serializeTrip),
    });
  } catch (error) {
    console.error("GET /api/operations/trips failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to load trips." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const scheduleId = String(body.schedule_id ?? "").trim();
    const startTime = String(body.start_time ?? "").trim();
    const endTime = body.end_time;
    const status = String(body.status ?? "SCHEDULED").toUpperCase();
    const remarks =
      body.remarks === undefined ? null : String(body.remarks).trim();

    if (!scheduleId || !startTime) {
      return NextResponse.json(
        { success: false, message: "Schedule and start time are required." },
        { status: 400 },
      );
    }

    const schedule = await prisma.schedule.findUnique({
      where: {
        scheduleId,
      },
    });

    if (!schedule) {
      return NextResponse.json(
        { success: false, message: "Schedule not found." },
        { status: 404 },
      );
    }

    const trip = await prisma.trip.create({
      data: {
        scheduleId: schedule.id,
        startTime: parseDateTime(startTime),
        endTime: parseOptionalDateTime(endTime),
        status:
          status === "ACTIVE"
            ? "ACTIVE"
            : status === "DELAYED"
              ? "DELAYED"
              : status === "COMPLETED"
                ? "COMPLETED"
                : status === "CANCELLED"
                  ? "CANCELLED"
                  : "SCHEDULED",
        remarks,
      },
      include: {
        schedule: {
          select: { scheduleId: true },
        },
      },
    });

    return NextResponse.json(
      { success: true, trip: serializeTrip(trip) },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/operations/trips failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create trip." },
      { status: 500 },
    );
  }
}
