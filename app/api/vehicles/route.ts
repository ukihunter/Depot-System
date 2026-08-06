import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export function serializeVehicle(vehicle: any) {
  return {
    vehicle_id: vehicle.vehicleId,
    depot_id: vehicle.depotId,
    registration_number: vehicle.registrationNumber,
    vehicle_type:
      vehicle.vehicleType === "SINGLE_DECKER"
        ? "Single Decker"
        : vehicle.vehicleType === "DOUBLE_DECKER"
          ? "Double Decker"
          : vehicle.vehicleType === "ELECTRIC_BUS"
            ? "Electric Bus"
            : vehicle.vehicleType === "ARTICULATED_BUS"
              ? "Articulated Bus"
              : "Coach",
    seating_capacity: vehicle.seatingCapacity,
    mileage: vehicle.mileage,
    fuel_type:
      vehicle.fuelType === "DIESEL"
        ? "Diesel"
        : vehicle.fuelType === "ELECTRIC"
          ? "Electric"
          : vehicle.fuelType === "CNG"
            ? "CNG"
            : "Hybrid",
    status:
      vehicle.status === "AVAILABLE"
        ? "Available"
        : vehicle.status === "MAINTENANCE"
          ? "Maintenance"
          : "On Trip",
  };
}

export async function GET(request: NextRequest) {
  try {
    const depotIdParam = request.nextUrl.searchParams.get("depotId");
    const depotId = depotIdParam === null ? undefined : Number(depotIdParam);

    const vehicles = await prisma.vehicle.findMany({
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
      success: true,
      vehicles: vehicles.map(serializeVehicle),
    });
  } catch (error) {
    console.error("GET /api/vehicles failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load vehicles.",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      registration_number,
      vehicle_type,
      seating_capacity,
      mileage,
      fuel_type,
      depot_id,
      status,
    } = body;

    const numericDepotId = Number(depot_id);

    if (
      !registration_number ||
      !vehicle_type ||
      seating_capacity === undefined ||
      mileage === undefined ||
      !fuel_type ||
      !Number.isFinite(numericDepotId)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Registration number, vehicle type, seating capacity, mileage, and fuel type are required.",
        },
        { status: 400 },
      );
    }

    const depot = await prisma.depot.findUnique({
      where: {
        id: numericDepotId,
      },
    });

    if (!depot) {
      return NextResponse.json(
        {
          success: false,
          message: "Depot not found.",
        },
        { status: 404 },
      );
    }

    const existingVehicle = await prisma.vehicle.findFirst({
      where: {
        registrationNumber: String(registration_number),
      },
    });

    if (existingVehicle) {
      return NextResponse.json(
        {
          success: false,
          message: "A vehicle with this registration number already exists.",
        },
        { status: 409 },
      );
    }

    const vehicle = await prisma.vehicle.create({
      data: {
        registrationNumber: String(registration_number).trim(),
        vehicleType:
          vehicle_type === "Single Decker"
            ? "SINGLE_DECKER"
            : vehicle_type === "Double Decker"
              ? "DOUBLE_DECKER"
              : vehicle_type === "Electric Bus"
                ? "ELECTRIC_BUS"
                : vehicle_type === "Articulated Bus"
                  ? "ARTICULATED_BUS"
                  : "COACH",
        seatingCapacity: Number(seating_capacity ?? 0),
        mileage: Number(mileage ?? 0),
        fuelType:
          fuel_type === "Diesel"
            ? "DIESEL"
            : fuel_type === "Electric"
              ? "ELECTRIC"
              : fuel_type === "CNG"
                ? "CNG"
                : "HYBRID",
        depotId: numericDepotId,
        status:
          status === "Maintenance"
            ? "MAINTENANCE"
            : status === "On Trip"
              ? "ON_TRIP"
              : "AVAILABLE",
      },
    });

    return NextResponse.json(
      {
        success: true,
        vehicle: serializeVehicle(vehicle),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/vehicles failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create vehicle.",
      },
      { status: 500 },
    );
  }
}
