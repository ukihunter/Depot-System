import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
function serializeDriver(driver: Prisma.DriverGetPayload<{}>) {
  return {
    driver_id: driver.driverId,
    name: driver.fullName,
    nic: driver.nic,
    phone: driver.phone,
    address: driver.address ?? "",
    license_number: driver.licenseNumber,
    license_expiry: driver.licenseExpiry.toISOString().split("T")[0],
    status:
      driver.status === "ACTIVE"
        ? "Active"
        : driver.status === "INACTIVE"
          ? "Inactive"
          : "On Trip",
  };
}

/**
 * GET /api/drivers/[driverId]
 */
export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{ driverId: string }>;
  },
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
        {
          status: 404,
        },
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
      {
        status: 500,
      },
    );
  }
}

/**
 * PUT /api/drivers/[driverId]
 */
export async function PUT(
  request: NextRequest,
  context: {
    params: Promise<{ driverId: string }>;
  },
) {
  try {
    const { driverId } = await context.params;

    const body = await request.json();

    const {
      name,
      nic,
      phone,
      address,
      license_number,
      license_expiry,
      status,
    } = body;

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
        {
          status: 404,
        },
      );
    }

    const updatedDriver = await prisma.driver.update({
      where: {
        driverId,
      },

      data: {
        fullName: name !== undefined ? String(name).trim() : undefined,

        nic: nic !== undefined ? String(nic).trim() : undefined,

        phone: phone !== undefined ? String(phone).trim() : undefined,

        address: address !== undefined ? String(address).trim() : undefined,

        licenseNumber:
          license_number !== undefined
            ? String(license_number).trim()
            : undefined,

        licenseExpiry:
          license_expiry !== undefined
            ? new Date(`${license_expiry}T00:00:00.000Z`)
            : undefined,

        status:
          status === "Inactive"
            ? "INACTIVE"
            : status === "On Trip"
              ? "ON_TRIP"
              : status === "Active"
                ? "ACTIVE"
                : undefined,
      },
    });

    return NextResponse.json({
      success: true,
      driver: serializeDriver(updatedDriver),
    });
  } catch (error) {
    console.error("PUT /api/drivers/[driverId] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update driver.",
      },
      {
        status: 500,
      },
    );
  }
}

/**
 * DELETE /api/drivers/[driverId]
 */
export async function DELETE(
  request: NextRequest,
  context: {
    params: Promise<{ driverId: string }>;
  },
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
        {
          status: 404,
        },
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
      {
        status: 500,
      },
    );
  }
}
