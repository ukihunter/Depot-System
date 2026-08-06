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
 * GET /api/drivers
 */
export async function GET() {
  try {
    const drivers = await prisma.driver.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      drivers: drivers.map(serializeDriver),
    });
  } catch (error) {
    console.error("GET /api/drivers failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load drivers.",
      },
      {
        status: 500,
      },
    );
  }
}

/**
 * POST /api/drivers
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      nic,
      phone,
      address,
      license_number,
      license_expiry,
      depot_id,
      status,
    } = body;

    if (
      !name ||
      !nic ||
      !phone ||
      !license_number ||
      !license_expiry ||
      !depot_id
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, NIC, phone, license number, license expiry and depot are required.",
        },
        {
          status: 400,
        },
      );
    }

    const existingDriver = await prisma.driver.findFirst({
      where: {
        OR: [
          {
            nic: String(nic).trim(),
          },
          {
            licenseNumber: String(license_number).trim(),
          },
        ],
      },
    });

    if (existingDriver) {
      if (existingDriver.nic === String(nic).trim()) {
        return NextResponse.json(
          {
            success: false,
            message: "A driver with this NIC already exists.",
          },
          {
            status: 409,
          },
        );
      }

      if (existingDriver.licenseNumber === String(license_number).trim()) {
        return NextResponse.json(
          {
            success: false,
            message: "A driver with this license number already exists.",
          },
          {
            status: 409,
          },
        );
      }
    }

    const driver = await prisma.driver.create({
      data: {
        fullName: String(name).trim(),

        nic: String(nic).trim(),

        phone: String(phone).trim(),

        address: address ? String(address).trim() : null,

        licenseNumber: String(license_number).trim(),

        licenseExpiry: new Date(`${license_expiry}T00:00:00.000Z`),

        depotId: Number(depot_id),

        status:
          status === "Inactive"
            ? "INACTIVE"
            : status === "On Trip"
              ? "ON_TRIP"
              : "ACTIVE",
      },
    });

    return NextResponse.json(
      {
        success: true,
        driver: serializeDriver(driver),
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("POST /api/drivers failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create driver.",
      },
      {
        status: 500,
      },
    );
  }
}
