import argon2 from "argon2";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "srmss",
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await argon2.hash("Admin@12345");

  const admin = await prisma.user.upsert({
    where: {
      username: "admin",
    },
    update: {
      fullName: "System Administrator",
      email: "admin@srmss.local",
      password,
      role: "ADMIN",
    },
    create: {
      fullName: "System Administrator",
      email: "admin@srmss.local",
      username: "admin",
      password,
      role: "ADMIN",
    },
  });

  console.log("Admin user created:");
  console.log({
    id: admin.id,
    fullName: admin.fullName,
    email: admin.email,
    username: admin.username,
    role: admin.role,
  });
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
