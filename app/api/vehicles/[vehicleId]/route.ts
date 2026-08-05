import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serializeVehicle } from "../route";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ vehicleId: string }> },
) {
  try {
    const { vehicleId } = await context.params;

    const vehicle = await prisma.vehicle.findUnique({
      where: {
        vehicleId,
      },
    });

    if (!vehicle) {
      return NextResponse.json(
        {
          success: false,
          message: "Vehicle not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      vehicle: serializeVehicle(vehicle),
    });
  } catch (error) {
    console.error("GET /api/vehicles/[vehicleId] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load vehicle.",
      },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ vehicleId: string }> },
) {
  try {
    const { vehicleId } = await context.params;
    const body = await request.json();

    const existingVehicle = await prisma.vehicle.findUnique({
      where: {
        vehicleId,
      },
    });

    if (!existingVehicle) {
      return NextResponse.json(
        {
          success: false,
          message: "Vehicle not found.",
        },
        { status: 404 },
      );
    }

    const {
      registration_number,
      vehicle_type,
      seating_capacity,
      mileage,
      fuel_type,
      status,
    } = body;

    const duplicateVehicle = await prisma.vehicle.findFirst({
      where: {
        AND: [
          {
            vehicleId: {
              not: vehicleId,
            },
          },
          {
            ...(registration_number
              ? { registrationNumber: String(registration_number) }
              : {}),
          },
        ],
      },
    });

    if (duplicateVehicle && registration_number) {
      return NextResponse.json(
        {
          success: false,
          message: "Another vehicle already uses this registration number.",
        },
        { status: 409 },
      );
    }

    const updateData: any = {};

    if (registration_number !== undefined) {
      updateData.registrationNumber = String(registration_number).trim();
    }

    if (vehicle_type !== undefined) {
      updateData.vehicleType =
        vehicle_type === "Single Decker"
          ? "SINGLE_DECKER"
          : vehicle_type === "Double Decker"
            ? "DOUBLE_DECKER"
            : vehicle_type === "Electric Bus"
              ? "ELECTRIC_BUS"
              : vehicle_type === "Articulated Bus"
                ? "ARTICULATED_BUS"
                : "COACH";
    }

    if (seating_capacity !== undefined) {
      updateData.seatingCapacity = Number(seating_capacity);
    }

    if (mileage !== undefined) {
      updateData.mileage = Number(mileage);
    }

    if (fuel_type !== undefined) {
      updateData.fuelType =
        fuel_type === "Diesel"
          ? "DIESEL"
          : fuel_type === "Electric"
            ? "ELECTRIC"
            : fuel_type === "CNG"
              ? "CNG"
              : "HYBRID";
    }

    if (status !== undefined) {
      updateData.status =
        status === "Maintenance"
          ? "MAINTENANCE"
          : status === "On Trip"
            ? "ON_TRIP"
            : "AVAILABLE";
    }

    const vehicle = await prisma.vehicle.update({
      where: {
        vehicleId,
      },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      vehicle: serializeVehicle(vehicle),
    });
  } catch (error) {
    console.error("PUT /api/vehicles/[vehicleId] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update vehicle.",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ vehicleId: string }> },
) {
  try {
    const { vehicleId } = await context.params;

    const existingVehicle = await prisma.vehicle.findUnique({
      where: {
        vehicleId,
      },
    });

    if (!existingVehicle) {
      return NextResponse.json(
        {
          success: false,
          message: "Vehicle not found.",
        },
        { status: 404 },
      );
    }

    await prisma.vehicle.delete({
      where: {
        vehicleId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Vehicle deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE /api/vehicles/[vehicleId] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete vehicle.",
      },
      { status: 500 },
    );
  }
}
