import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET ALL DEPOTS
export async function GET() {
  try {
    const depots = await prisma.depot.findMany({
      where: {
        deletedAt: null,
      },

      orderBy: {
        createdAt: "desc",
      },

      include: {
        _count: {
          select: {
            users: true,
            drivers: true,
            vehicles: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      depots,
    });
  } catch (error) {
    console.error("GET DEPOTS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load depots",
      },
      {
        status: 500,
      },
    );
  }
}

// CREATE DEPOT
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, code, address, phone, email } = body;

    if (!name || !code) {
      return NextResponse.json(
        {
          success: false,
          message: "Depot name and code are required",
        },
        {
          status: 400,
        },
      );
    }

    // Prisma client in this project doesn't support the `mode` argument
    // (case-insensitive equals). Use a basic existence check instead.
    const existingDepot = await prisma.depot.findFirst({
      where: {
        OR: [{ name: name }, { code: code }],
      },
    });

    if (existingDepot) {
      return NextResponse.json(
        {
          success: false,
          message: "Depot name or code already exists",
        },
        {
          status: 409,
        },
      );
    }

    const depot = await prisma.depot.create({
      data: {
        name,

        code,

        address: address ?? null,

        phone: phone ?? null,

        email: email ?? null,

        isActive: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        depot,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("CREATE DEPOT ERROR:", error);

    const errMsg = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      {
        success: false,
        message: `Failed to create depot: ${errMsg}`,
      },
      {
        status: 500,
      },
    );
  }
}
