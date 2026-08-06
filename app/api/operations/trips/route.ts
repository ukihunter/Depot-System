import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import { randomUUID } from "node:crypto";

function serializeTrip(trip: {
  tripId: string;
  scheduleId: string;
  startTime: string;
  endTime: string;
  status: "SCHEDULED" | "ACTIVE" | "DELAYED" | "COMPLETED" | "CANCELLED";
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

export async function GET(request: NextRequest) {
  try {
    const depotIdParam = request.nextUrl.searchParams.get("depotId");
    const depotId = depotIdParam === null ? undefined : Number(depotIdParam);

    const depotFilter =
      depotId === undefined
        ? Prisma.empty
        : Prisma.sql`WHERE s.depotId = ${depotId}`;

    const trips = await prisma.$queryRaw<
      Array<{
        tripId: string;
        scheduleId: string;
        startTime: string;
        endTime: string;
        status: "SCHEDULED" | "ACTIVE" | "DELAYED" | "COMPLETED" | "CANCELLED";
        remarks: string | null;
      }>
    >(Prisma.sql`
      SELECT t.tripId, t.schedule_id AS scheduleId, t.start_time AS startTime, t.end_time AS endTime, t.status, t.remarks
      FROM trips t
      INNER JOIN schedules s ON s.scheduleId = t.schedule_id
      ${depotFilter}
      ORDER BY t.created_at DESC
    `);

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
    const endTime = String(body.end_time ?? "").trim();
    const status = String(body.status ?? "SCHEDULED").toUpperCase();
    const remarks =
      body.remarks === undefined ? null : String(body.remarks).trim();

    if (!scheduleId || !startTime) {
      return NextResponse.json(
        { success: false, message: "Schedule and start time are required." },
        { status: 400 },
      );
    }

    const tripId = randomUUID().replace(/-/g, "");

    await prisma.$executeRaw`
      INSERT INTO trips (tripId, schedule_id, start_time, end_time, status, remarks, created_at, updated_at)
      VALUES (${tripId}, ${scheduleId}, ${startTime}, ${endTime}, ${status}, ${remarks}, NOW(3), NOW(3))
    `;

    const rows = await prisma.$queryRaw<
      Array<{
        tripId: string;
        scheduleId: string;
        startTime: string;
        endTime: string;
        status: "SCHEDULED" | "ACTIVE" | "DELAYED" | "COMPLETED" | "CANCELLED";
        remarks: string | null;
      }>
    >`
      SELECT tripId, schedule_id AS scheduleId, start_time AS startTime, end_time AS endTime, status, remarks
      FROM trips
      WHERE tripId = ${tripId}
      LIMIT 1
    `;

    const trip = rows[0] ?? null;
    if (!trip) {
      return NextResponse.json(
        { success: false, message: "Failed to create trip." },
        { status: 500 },
      );
    }

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
