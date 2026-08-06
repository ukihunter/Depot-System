// app/api/routes/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isValidStops(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((stop) => typeof stop === "string" && stop.trim().length > 0)
  );
}

function serializeRoute(route: any) {
  const stops = Array.isArray(route.stops)
    ? route.stops
        .map((stop: any) =>
          typeof stop === "string" ? stop : stop?.stopName ?? stop?.name ?? "",
        )
        .filter((stop: string) => stop.length > 0)
    : [];

  return {
    route_id: route.routeId,
    depot_id: route.depotId,
    route_name: route.routeName,
    start_location: route.startLocation,
    end_location: route.endLocation,
    stops,
    distance: Number(route.distance),
    estimated_duration: route.estimatedDuration,
    status: route.status,
  };
}

/**
 * GET /api/routes
 */
export async function GET(request: NextRequest) {
  try {
    const depotIdParam = request.nextUrl.searchParams.get("depotId");
    const depotId = depotIdParam === null ? undefined : Number(depotIdParam);

    const routes = await prisma.route.findMany({
      include: {
        stops: {
          orderBy: {
            stopOrder: "asc",
          },
        },
      },
      where:
        depotId === undefined
          ? undefined
          : {
              depotId,
            },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      routes: routes.map(serializeRoute),
    });
  } catch (error) {
    console.error("GET /api/routes error:", error);

    return NextResponse.json(
      {
        error: "Failed to load routes",
      },
      {
        status: 500,
      },
    );
  }
}

/**
 * POST /api/routes
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      routeName,
      startLocation,
      endLocation,
      stops,
      distance,
      estimatedDuration,
      depotId,
      status,
    } = body;

    const numericDepotId = Number(depotId);

    if (typeof routeName !== "string" || !routeName.trim()) {
      return NextResponse.json(
        { error: "Route name is required" },
        { status: 400 },
      );
    }

    if (typeof startLocation !== "string" || !startLocation.trim()) {
      return NextResponse.json(
        { error: "Start location is required" },
        { status: 400 },
      );
    }

    if (typeof endLocation !== "string" || !endLocation.trim()) {
      return NextResponse.json(
        { error: "End location is required" },
        { status: 400 },
      );
    }

    if (!isValidStops(stops)) {
      return NextResponse.json(
        {
          error: "Stops must be an array of strings",
        },
        { status: 400 },
      );
    }

    const numericDistance = Number(distance);
    const numericDuration = Number(estimatedDuration);

    if (!Number.isFinite(numericDistance) || numericDistance < 0) {
      return NextResponse.json(
        { error: "Distance must be a valid positive number" },
        { status: 400 },
      );
    }

    if (!Number.isInteger(numericDuration) || numericDuration < 0) {
      return NextResponse.json(
        {
          error: "Estimated duration must be a valid non-negative integer",
        },
        { status: 400 },
      );
    }

    if (!Number.isFinite(numericDepotId)) {
      return NextResponse.json(
        { error: "Depot ID is required" },
        { status: 400 },
      );
    }

    const depot = await prisma.depot.findUnique({
      where: { id: numericDepotId },
    });

    if (!depot) {
      return NextResponse.json({ error: "Depot not found" }, { status: 404 });
    }

    const route = await prisma.route.create({
      data: {
        depotId: numericDepotId,
        routeName: routeName.trim(),
        startLocation: startLocation.trim(),
        endLocation: endLocation.trim(),
        distance: numericDistance,
        estimatedDuration: numericDuration,
        status: status === "INACTIVE" ? "INACTIVE" : "ACTIVE",
        stops: {
          create: stops.map((stopName: string, index: number) => ({
            stopName: stopName.trim(),
            stopOrder: index + 1,
          })),
        },
      },
      include: {
        stops: {
          orderBy: {
            stopOrder: "asc",
          },
        },
      },
    });

    return NextResponse.json(
      {
        route: serializeRoute(route),
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("POST /api/routes error:", error);

    return NextResponse.json(
      {
        error: "Failed to create route",
      },
      {
        status: 500,
      },
    );
  }
}
