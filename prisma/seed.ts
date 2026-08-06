import "dotenv/config";
import { PrismaClient, UserRole, UserStatus } from "../generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import argon2 from "argon2";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "srmss",
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

async function hashPassword(password: string) {
  return argon2.hash(password);
}

async function main() {
  console.log("🌱 Starting seed...");

  // Clean existing data so the seed can be rerun safely.
  await prisma.$transaction([
    prisma.auditLog.deleteMany(),
    prisma.trip.deleteMany(),
    prisma.schedule.deleteMany(),
    prisma.routeStop.deleteMany(),
    prisma.fuelLog.deleteMany(),
    prisma.maintenanceRecord.deleteMany(),
    prisma.vehicle.deleteMany(),
    prisma.driver.deleteMany(),
    prisma.route.deleteMany(),
    prisma.user.deleteMany(),
    prisma.depot.deleteMany(),
  ]);

  /*
  ================================
  CREATE DEPOTS
  ================================
  */

  const colomboDepot = await prisma.depot.create({
    data: {
      name: "Colombo Central Depot",
      code: "CMB-001",
      address: "Colombo",
      phone: "0112345678",
      email: "colombo@srmss.com",
    },
  });

  const kandyDepot = await prisma.depot.create({
    data: {
      name: "Kandy Main Depot",
      code: "KDY-001",
      address: "Kandy",
      phone: "0812345678",
      email: "kandy@srmss.com",
    },
  });

  console.log("✅ Depots created");

  /*
  ================================
  PASSWORD HASH
  ================================
  */

  const passwords = {
    main: await hashPassword("MainAdmin@123"),
    depot: await hashPassword("DepotAdmin@123"),
    supervisor: await hashPassword("Supervisor@123"),
    staff: await hashPassword("Staff@123"),
  };

  /*
  ================================
  MAIN ADMIN
  ================================
  */

  await prisma.user.create({
    data: {
      fullName: "System Main Administrator",
      username: "mainadmin",
      email: "mainadmin@srmss.com",
      password: passwords.main,
      role: UserRole.MAIN_ADMIN,
      status: UserStatus.ACTIVE,
    },
  });

  /*
  ================================
  COLOMBO USERS
  ================================
  */

  await prisma.user.createMany({
    data: [
      {
        fullName: "Colombo Depot Admin",
        username: "colombo_admin",
        email: "colombo.admin@srmss.com",
        password: passwords.depot,
        role: UserRole.DEPOT_ADMIN,
        status: UserStatus.ACTIVE,
        depotId: colomboDepot.id,
      },
      {
        fullName: "Colombo Supervisor",
        username: "colombo_supervisor",
        email: "colombo.supervisor@srmss.com",
        password: passwords.supervisor,
        role: UserRole.SUPERVISOR,
        status: UserStatus.ACTIVE,
        depotId: colomboDepot.id,
      },
      {
        fullName: "Colombo Operational Staff",
        username: "colombo_staff",
        email: "colombo.staff@srmss.com",
        password: passwords.staff,
        role: UserRole.OPERATIONAL_STAFF,
        status: UserStatus.ACTIVE,
        depotId: colomboDepot.id,
      },
    ],
  });

  /*
  ================================
  KANDY USERS
  ================================
  */

  await prisma.user.createMany({
    data: [
      {
        fullName: "Kandy Depot Admin",
        username: "kandy_admin",
        email: "kandy.admin@srmss.com",
        password: passwords.depot,
        role: UserRole.DEPOT_ADMIN,
        status: UserStatus.ACTIVE,
        depotId: kandyDepot.id,
      },
      {
        fullName: "Kandy Supervisor",
        username: "kandy_supervisor",
        email: "kandy.supervisor@srmss.com",
        password: passwords.supervisor,
        role: UserRole.SUPERVISOR,
        status: UserStatus.ACTIVE,
        depotId: kandyDepot.id,
      },
      {
        fullName: "Kandy Operational Staff",
        username: "kandy_staff",
        email: "kandy.staff@srmss.com",
        password: passwords.staff,
        role: UserRole.OPERATIONAL_STAFF,
        status: UserStatus.ACTIVE,
        depotId: kandyDepot.id,
      },
    ],
  });

  console.log("✅ Users created");

  console.log(`
====================================
LOGIN DETAILS
====================================

MAIN ADMIN
username: mainadmin
password: MainAdmin@123


COLOMBO DEPOT

Depot Admin:
username: colombo_admin
password: DepotAdmin@123

Supervisor:
username: colombo_supervisor
password: Supervisor@123

Operational Staff:
username: colombo_staff
password: Staff@123



KANDY DEPOT

Depot Admin:
username: kandy_admin
password: DepotAdmin@123

Supervisor:
username: kandy_supervisor
password: Supervisor@123

Operational Staff:
username: kandy_staff
password: Staff@123


====================================
`);
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
