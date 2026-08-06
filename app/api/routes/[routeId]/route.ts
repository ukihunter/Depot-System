// app/api/routes/[routeId]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteContext {
  params: Promise<{
    routeId: string;
  }>;
}

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
          typeof stop === "string"
            ? stop
            : (stop?.stopName ?? stop?.name ?? ""),
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
 * GET /api/routes/:routeId
 */
export async function GET(_request: NextRequest, context: RouteContext) {
  try {
    const { routeId } = await context.params;

    const route = await prisma.route.findUnique({
      where: {
        routeId,
      },
      include: {
        stops: {
          orderBy: {
            stopOrder: "asc",
          },
        },
      },
    });

    if (!route) {
      return NextResponse.json(
        {
          error: "Route not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      route: serializeRoute(route),
    });
  } catch (error) {
    console.error("GET route error:", error);

    return NextResponse.json(
      {
        error: "Failed to load route",
      },
      {
        status: 500,
      },
    );
  }
}

/**
 * PUT /api/routes/:routeId
 */
export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    const { routeId } = await context.params;

    const existingRoute = await prisma.route.findUnique({
      where: {
        routeId,
      },
    });

    if (!existingRoute) {
      return NextResponse.json(
        {
          error: "Route not found",
        },
        {
          status: 404,
        },
      );
    }

    const body = await request.json();

    const data: Record<string, unknown> = {};

    if (body.routeName !== undefined) {
      if (typeof body.routeName !== "string" || !body.routeName.trim()) {
        return NextResponse.json(
          { error: "Invalid route name" },
          { status: 400 },
        );
      }

      data.routeName = body.routeName.trim();
    }

    if (body.startLocation !== undefined) {
      if (
        typeof body.startLocation !== "string" ||
        !body.startLocation.trim()
      ) {
        return NextResponse.json(
          { error: "Invalid start location" },
          { status: 400 },
        );
      }

      data.startLocation = body.startLocation.trim();
    }

    if (body.endLocation !== undefined) {
      if (typeof body.endLocation !== "string" || !body.endLocation.trim()) {
        return NextResponse.json(
          { error: "Invalid end location" },
          { status: 400 },
        );
      }

      data.endLocation = body.endLocation.trim();
    }

    if (body.stops !== undefined) {
      if (!isValidStops(body.stops)) {
        return NextResponse.json(
          {
            error: "Stops must be an array of strings",
          },
          { status: 400 },
        );
      }

      data.stops = {
        deleteMany: {},
        create: body.stops.map((stop: string, index: number) => ({
          stopName: stop.trim(),
          stopOrder: index + 1,
        })),
      };
    }

    if (body.distance !== undefined) {
      const distance = Number(body.distance);

      if (!Number.isFinite(distance) || distance < 0) {
        return NextResponse.json(
          { error: "Invalid distance" },
          { status: 400 },
        );
      }

      data.distance = distance;
    }

    if (body.estimatedDuration !== undefined) {
      const duration = Number(body.estimatedDuration);

      if (!Number.isInteger(duration) || duration < 0) {
        return NextResponse.json(
          { error: "Invalid estimated duration" },
          { status: 400 },
        );
      }

      data.estimatedDuration = duration;
    }

    if (body.status !== undefined) {
      data.status =
        body.status === "Inactive" || body.status === "INACTIVE"
          ? "INACTIVE"
          : "ACTIVE";
    }

    const route = await prisma.route.update({
      where: {
        routeId,
      },
      data,
      include: {
        stops: {
          orderBy: {
            stopOrder: "asc",
          },
        },
      },
    });

    return NextResponse.json({
      route: serializeRoute(route),
    });
  } catch (error) {
    console.error("PUT route error:", error);

    return NextResponse.json(
      {
        error: "Failed to update route",
      },
      {
        status: 500,
      },
    );
  }
}

/**
 * DELETE /api/routes/:routeId
 */
export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    const { routeId } = await context.params;

    const existingRoute = await prisma.route.findUnique({
      where: {
        routeId,
      },
    });

    if (!existingRoute) {
      return NextResponse.json(
        {
          error: "Route not found",
        },
        {
          status: 404,
        },
      );
    }

    const scheduleCount = await prisma.schedule.count({
      where: {
        routeId,
      },
    });

    if (scheduleCount > 0) {
      return NextResponse.json(
        {
          error:
            "This route cannot be deleted because it is assigned to one or more schedules.",
        },
        {
          status: 409,
        },
      );
    }

    await prisma.route.delete({
      where: {
        routeId,
      },
    });

    return NextResponse.json({
      message: "Route deleted successfully",
    });
  } catch (error) {
    console.error("DELETE route error:", error);

    return NextResponse.json(
      {
        error: "Failed to delete route",
      },
      {
        status: 500,
      },
    );
  }
}
