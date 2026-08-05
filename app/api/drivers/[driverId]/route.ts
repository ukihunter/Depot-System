import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function serializeDriver(driver: {
  driverId: string;
  name: string;
  nic: string;
  phone: string;
  address: string | null;
  licenseNumber: string;
  licenseExpiry: Date;
  workingHours: number;
  status: "ACTIVE" | "INACTIVE" | "ON_TRIP";
}) {
  return {
    driver_id: driver.driverId,
    name: driver.name,
    nic: driver.nic,
    phone: driver.phone,
    address: driver.address ?? "",
    license_number: driver.licenseNumber,
    license_expiry: driver.licenseExpiry.toISOString().split("T")[0],
    working_hours: driver.workingHours,
    status:
      driver.status === "ACTIVE"
        ? "Active"
        : driver.status === "INACTIVE"
          ? "Inactive"
          : "On Trip",
  };
}

/**
 * GET /api/drivers/:driverId
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ driverId: string }> },
) {
  try {
    const { driverId } = await context.params;

    const driver = await prisma.driver.findUnique({
      where: {
        driverId,
      },
    });

    if (!driver) {
      return NextResponse.json(
        {
          success: false,
          message: "Driver not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      driver: serializeDriver(driver),
    });
  } catch (error) {
    console.error("GET /api/drivers/[driverId] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load driver.",
      },
      { status: 500 },
    );
  }
}

/**
 * PUT /api/drivers/:driverId
 */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ driverId: string }> },
) {
  try {
    const { driverId } = await context.params;
    const body = await request.json();

    const existingDriver = await prisma.driver.findUnique({
      where: {
        driverId,
      },
    });

    if (!existingDriver) {
      return NextResponse.json(
        {
          success: false,
          message: "Driver not found.",
        },
        { status: 404 },
      );
    }

    const {
      name,
      nic,
      phone,
      address,
      license_number,
      license_expiry,
      working_hours,
      status,
    } = body;

    const duplicateDriver = await prisma.driver.findFirst({
      where: {
        AND: [
          {
            driverId: {
              not: driverId,
            },
          },
          {
            OR: [
              ...(nic
                ? [
                    {
                      nic: String(nic),
                    },
                  ]
                : []),
              ...(license_number
                ? [
                    {
                      licenseNumber: String(license_number),
                    },
                  ]
                : []),
            ],
          },
        ],
      },
    });

    if (duplicateDriver) {
      if (nic && duplicateDriver.nic === String(nic)) {
        return NextResponse.json(
          {
            success: false,
            message: "Another driver already uses this NIC.",
          },
          { status: 409 },
        );
      }

      if (
        license_number &&
        duplicateDriver.licenseNumber === String(license_number)
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Another driver already uses this license number.",
          },
          { status: 409 },
        );
      }
    }

    const updateData: {
      name?: string;
      nic?: string;
      phone?: string;
      address?: string | null;
      licenseNumber?: string;
      licenseExpiry?: Date;
      workingHours?: number;
      status?: "ACTIVE" | "INACTIVE" | "ON_TRIP";
    } = {};

    if (name !== undefined) {
      updateData.name = String(name).trim();
    }

    if (nic !== undefined) {
      updateData.nic = String(nic).trim();
    }

    if (phone !== undefined) {
      updateData.phone = String(phone).trim();
    }

    if (address !== undefined) {
      updateData.address = address ? String(address).trim() : null;
    }

    if (license_number !== undefined) {
      updateData.licenseNumber = String(license_number).trim();
    }

    if (license_expiry !== undefined) {
      updateData.licenseExpiry = new Date(`${license_expiry}T00:00:00.000Z`);
    }

    if (working_hours !== undefined) {
      updateData.workingHours = Number(working_hours);
    }

    if (status !== undefined) {
      updateData.status =
        status === "Inactive"
          ? "INACTIVE"
          : status === "On Trip"
            ? "ON_TRIP"
            : "ACTIVE";
    }

    const driver = await prisma.driver.update({
      where: {
        driverId,
      },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      driver: serializeDriver(driver),
    });
  } catch (error) {
    console.error("PUT /api/drivers/[driverId] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update driver.",
      },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/drivers/:driverId
 */
export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ driverId: string }> },
) {
  try {
    const { driverId } = await context.params;

    const existingDriver = await prisma.driver.findUnique({
      where: {
        driverId,
      },
    });

    if (!existingDriver) {
      return NextResponse.json(
        {
          success: false,
          message: "Driver not found.",
        },
        { status: 404 },
      );
    }

    await prisma.driver.delete({
      where: {
        driverId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Driver deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE /api/drivers/[driverId] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete driver.",
      },
      { status: 500 },
    );
  }
}
