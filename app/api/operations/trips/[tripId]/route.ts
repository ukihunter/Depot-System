import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type TripStatus =
  | "SCHEDULED"
  | "ACTIVE"
  | "DELAYED"
  | "COMPLETED"
  | "CANCELLED";

function formatDateTime(value: Date | null) {
  return value ? value.toISOString() : "";
}

function parseOptionalDateTime(value: unknown) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return undefined;
  }

  return new Date(String(value));
}

function serializeTrip(trip: {
  tripId: string;
  schedule: { scheduleId: string };
  startTime: Date;
  endTime: Date | null;
  status: TripStatus;
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

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ tripId: string }> },
) {
  try {
    const { tripId } = await context.params;
    const body = await request.json();

    const data: {
      startTime?: Date;
      endTime?: Date | null;
      status?: TripStatus;
      remarks?: string | null;
    } = {};

    if (body.start_time !== undefined) {
      data.startTime = new Date(String(body.start_time));
    }

    if (body.end_time !== undefined) {
      data.endTime = parseOptionalDateTime(body.end_time) ?? null;
    }

    if (body.status !== undefined) {
      const status = String(body.status).toUpperCase();
      data.status =
        status === "ACTIVE"
          ? "ACTIVE"
          : status === "DELAYED"
            ? "DELAYED"
            : status === "COMPLETED"
              ? "COMPLETED"
              : status === "CANCELLED"
                ? "CANCELLED"
                : "SCHEDULED";
    }

    if (body.remarks !== undefined) {
      data.remarks = body.remarks === null ? null : String(body.remarks).trim();
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { success: false, message: "No trip updates provided." },
        { status: 400 },
      );
    }

    const trip = await prisma.trip.update({
      where: {
        tripId,
      },
      data,
      include: {
        schedule: {
          select: { scheduleId: true },
        },
      },
    });

    return NextResponse.json({ success: true, trip: serializeTrip(trip) });
  } catch (error) {
    console.error("PATCH /api/operations/trips/[tripId] failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update trip." },
      { status: 500 },
    );
  }
}
