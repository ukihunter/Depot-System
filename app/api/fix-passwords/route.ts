import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import argon2 from "argon2";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    let updatedCount = 0;

    for (const user of users) {
      if (!user.password.startsWith("$argon2")) {
        const hashedPassword = await argon2.hash(user.password);
        await prisma.user.update({
          where: { id: user.id },
          data: { password: hashedPassword },
        });
        updatedCount++;
      }
    }

    return NextResponse.json({ success: true, updatedCount });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
