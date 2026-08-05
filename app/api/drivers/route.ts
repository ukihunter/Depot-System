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
      { status: 500 },
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
      working_hours,
      status,
    } = body;

    if (!name || !nic || !phone || !license_number || !license_expiry) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, NIC, phone, license number and license expiry are required.",
        },
        { status: 400 },
      );
    }

    const existingDriver = await prisma.driver.findFirst({
      where: {
        OR: [
          {
            nic: String(nic),
          },
          {
            licenseNumber: String(license_number),
          },
        ],
      },
    });

    if (existingDriver) {
      if (existingDriver.nic === String(nic)) {
        return NextResponse.json(
          {
            success: false,
            message: "A driver with this NIC already exists.",
          },
          { status: 409 },
        );
      }

      if (existingDriver.licenseNumber === String(license_number)) {
        return NextResponse.json(
          {
            success: false,
            message: "A driver with this license number already exists.",
          },
          { status: 409 },
        );
      }
    }

    const driver = await prisma.driver.create({
      data: {
        name: String(name).trim(),
        nic: String(nic).trim(),
        phone: String(phone).trim(),
        address: address ? String(address).trim() : null,
        licenseNumber: String(license_number).trim(),
        licenseExpiry: new Date(`${license_expiry}T00:00:00.000Z`),
        workingHours: Number(working_hours ?? 0),
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
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/drivers failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create driver.",
      },
      { status: 500 },
    );
  }
}
