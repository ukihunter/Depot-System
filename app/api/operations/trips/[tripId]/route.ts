import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type TripStatus =
  | "SCHEDULED"
  | "ACTIVE"
  | "DELAYED"
  | "COMPLETED"
  | "CANCELLED";

function serializeTrip(trip: {
  tripId: string;
  scheduleId: string;
  startTime: string;
  endTime: string;
  status: TripStatus;
  remarks: string | null;
}) {
  return {
    trip_id: trip.tripId,
    schedule_id: trip.scheduleId,
    start_time: trip.startTime,
    end_time: trip.endTime,
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

    let updateCount = 0;

    if (body.start_time !== undefined) {
      await prisma.$executeRaw`
        UPDATE trips
        SET start_time = ${String(body.start_time)}, updated_at = NOW(3)
        WHERE tripId = ${tripId}
      `;
      updateCount++;
    }

    if (body.end_time !== undefined) {
      await prisma.$executeRaw`
        UPDATE trips
        SET end_time = ${String(body.end_time)}, updated_at = NOW(3)
        WHERE tripId = ${tripId}
      `;
      updateCount++;
    }

    if (body.status !== undefined) {
      await prisma.$executeRaw`
        UPDATE trips
        SET status = ${String(body.status).toUpperCase()}, updated_at = NOW(3)
        WHERE tripId = ${tripId}
      `;
      updateCount++;
    }

    if (body.remarks !== undefined) {
      await prisma.$executeRaw`
        UPDATE trips
        SET remarks = ${body.remarks === null ? null : String(body.remarks).trim()}, updated_at = NOW(3)
        WHERE tripId = ${tripId}
      `;
      updateCount++;
    }

    if (updateCount === 0) {
      return NextResponse.json(
        { success: false, message: "No trip updates provided." },
        { status: 400 },
      );
    }

    const rows = await prisma.$queryRaw<
      Array<{
        tripId: string;
        scheduleId: string;
        startTime: string;
        endTime: string;
        status: TripStatus;
        remarks: string | null;
      }>
    >`
      SELECT tripId, schedule_id AS scheduleId, start_time AS startTime, end_time AS endTime, status, remarks
      FROM trips
      WHERE tripId = ${tripId}
      LIMIT 1
    `;

    const trip = rows[0];
    if (!trip) {
      return NextResponse.json(
        { success: false, message: "Trip not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, trip: serializeTrip(trip) });
  } catch (error) {
    console.error("PATCH /api/operations/trips/[tripId] failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update trip." },
      { status: 500 },
    );
  }
}
