-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for srmss
CREATE DATABASE IF NOT EXISTS `srmss` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `srmss`;

-- Dumping structure for table srmss.drivers
CREATE TABLE IF NOT EXISTS `drivers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `driverId` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `nic` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `address` varchar(191) DEFAULT NULL,
  `licenseNumber` varchar(191) NOT NULL,
  `licenseExpiry` datetime(3) NOT NULL,
  `workingHours` int(11) NOT NULL DEFAULT 0,
  `status` enum('ACTIVE','INACTIVE','ON_TRIP') NOT NULL DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `drivers_driverId_key` (`driverId`),
  UNIQUE KEY `drivers_nic_key` (`nic`),
  UNIQUE KEY `drivers_licenseNumber_key` (`licenseNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.drivers: ~0 rows (approximately)
DELETE FROM `drivers`;
INSERT INTO `drivers` (`id`, `driverId`, `name`, `nic`, `phone`, `address`, `licenseNumber`, `licenseExpiry`, `workingHours`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'cmsgkoxub0002uouvbpwu6fm3', 'kevin', '200218901709', '0774856985', 'ududududud', '56984523', '2027-12-31 00:00:00.000', 32, 'ACTIVE', '2026-08-05 21:02:10.259', '2026-08-05 21:02:10.259');

-- Dumping structure for table srmss.routes
CREATE TABLE IF NOT EXISTS `routes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `routeId` varchar(191) NOT NULL,
  `route_name` varchar(191) NOT NULL,
  `start_location` varchar(191) NOT NULL,
  `end_location` varchar(191) NOT NULL,
  `stops` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`stops`)),
  `distance` double NOT NULL DEFAULT 0,
  `estimated_duration` int(11) NOT NULL DEFAULT 0,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `routes_routeId_key` (`routeId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.routes: ~1 rows (approximately)
DELETE FROM `routes`;
INSERT INTO `routes` (`id`, `routeId`, `route_name`, `start_location`, `end_location`, `stops`, `distance`, `estimated_duration`, `status`, `created_at`, `updated_at`) VALUES
	(3, 'cmsgkog520001uouv5yk4g5f0', 'new', 'dfsdf', 'sdfsdf', '[]', 10, 30, 'ACTIVE', '2026-08-05 21:01:47.318', '2026-08-05 21:01:47.318');

-- Dumping structure for table srmss.schedules
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scheduleId` varchar(191) NOT NULL,
  `route_id` varchar(191) NOT NULL,
  `vehicle_id` varchar(191) NOT NULL,
  `driver_id` varchar(191) NOT NULL,
  `departure_time` varchar(191) NOT NULL,
  `arrival_time` varchar(191) NOT NULL,
  `schedule_date` datetime(3) NOT NULL,
  `status` enum('SCHEDULED','ACTIVE','DELAYED','COMPLETED','CANCELLED') NOT NULL DEFAULT 'SCHEDULED',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `schedules_scheduleId_key` (`scheduleId`),
  KEY `schedules_route_id_idx` (`route_id`),
  KEY `schedules_vehicle_id_idx` (`vehicle_id`),
  KEY `schedules_driver_id_idx` (`driver_id`),
  KEY `schedules_schedule_date_idx` (`schedule_date`),
  CONSTRAINT `schedules_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`driverId`) ON UPDATE CASCADE,
  CONSTRAINT `schedules_route_id_fkey` FOREIGN KEY (`route_id`) REFERENCES `routes` (`routeId`) ON UPDATE CASCADE,
  CONSTRAINT `schedules_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicleId`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.schedules: ~0 rows (approximately)
DELETE FROM `schedules`;
INSERT INTO `schedules` (`id`, `scheduleId`, `route_id`, `vehicle_id`, `driver_id`, `departure_time`, `arrival_time`, `schedule_date`, `status`, `created_at`, `updated_at`) VALUES
	(1, 'cmsgkpc3o0004uouvwlbd5ijl', 'cmsgkog520001uouv5yk4g5f0', 'cmsgkp8vi0003uouv3yp9andc', 'cmsgkoxub0002uouvbpwu6fm3', '08:00', '09:30', '2026-06-15 00:00:00.000', 'SCHEDULED', '2026-08-05 21:02:28.741', '2026-08-05 21:02:28.741');

-- Dumping structure for table srmss.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` enum('ADMIN','SUPERVISOR','STAFF','USER') NOT NULL DEFAULT 'USER',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`),
  UNIQUE KEY `users_username_key` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.users: ~2 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `full_name`, `email`, `username`, `password`, `role`, `created_at`, `updated_at`) VALUES
	(1, 'System Administrator', 'admin@srmss.local', 'admin', '$argon2id$v=19$m=65536,p=4,t=3$B8Cc/w84S/Q2Hzssp+dCRA$8FFWrzbiNgKvGZAcEJvpVwLsUyMHnwP9mSFrtKK+kK8', 'ADMIN', '2026-08-05 16:36:13.761', '2026-08-05 16:36:13.761'),
	(2, 'amila', 'amila@gmail.com', 'amila', '$argon2id$v=19$m=65536,p=4,t=3$B8Cc/w84S/Q2Hzssp+dCRA$8FFWrzbiNgKvGZAcEJvpVwLsUyMHnwP9mSFrtKK+kK8', 'USER', '2026-08-05 17:42:14.955', '2026-08-05 17:42:14.955'),
	(3, 'Test User2', 'test2@test.com', 'testuser2', '$argon2id$v=19$m=65536,p=4,t=3$Bulsa4l1sxWM6peMHWxjpQ$xk3tU4ngdVX2mzpqRt4IHdO7166z9ciIwYx79bBK4XY', 'USER', '2026-08-05 20:50:51.094', '2026-08-05 20:50:51.094');

-- Dumping structure for table srmss.vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicleId` varchar(191) NOT NULL,
  `registrationNumber` varchar(191) NOT NULL,
  `vehicleType` enum('SINGLE_DECKER','DOUBLE_DECKER','ELECTRIC_BUS','ARTICULATED_BUS','COACH') NOT NULL,
  `seatingCapacity` int(11) NOT NULL DEFAULT 0,
  `mileage` int(11) NOT NULL DEFAULT 0,
  `fuelType` enum('DIESEL','ELECTRIC','CNG','HYBRID') NOT NULL,
  `status` enum('AVAILABLE','MAINTENANCE','ON_TRIP') NOT NULL DEFAULT 'AVAILABLE',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vehicles_vehicleId_key` (`vehicleId`),
  UNIQUE KEY `vehicles_registrationNumber_key` (`registrationNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.vehicles: ~0 rows (approximately)
DELETE FROM `vehicles`;
INSERT INTO `vehicles` (`id`, `vehicleId`, `registrationNumber`, `vehicleType`, `seatingCapacity`, `mileage`, `fuelType`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'cmsgkp8vi0003uouv3yp9andc', 'ER34343', 'SINGLE_DECKER', 40, 10000, 'ELECTRIC', 'AVAILABLE', '2026-08-05 21:02:24.558', '2026-08-05 21:02:24.558');

-- Dumping structure for table srmss._prisma_migrations
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss._prisma_migrations: ~4 rows (approximately)
DELETE FROM `_prisma_migrations`;
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
	('2f936b1f-63ef-45e6-938d-bace7d6506dc', '7990aaba0711bcc1f14b7547af8948f6b1b464d711340a758ecd7ec21db9748f', '2026-08-05 20:23:38.539', '20260805154617_create_users', NULL, NULL, '2026-08-05 20:23:38.530', 1),
	('681181e9-04ef-4506-b44f-789ec91d2d31', '3af0c2ce147c4ad531684bdae80258d3cb21b84fabe173a3a4f4881fc287ed9a', '2026-08-05 20:23:38.625', '20260805200915_add_vehicles_routes_schedules', NULL, NULL, '2026-08-05 20:23:38.550', 1),
	('70df4c36-3ac8-47c5-b219-382e7c6305f5', '6f990efaee1250f183a5dc15a0f8983be3430796ee2b575b323e37c64b4f5ac5', '2026-08-05 20:23:48.017', '20260805202347_add_routes_and_schedules', NULL, NULL, '2026-08-05 20:23:47.934', 1),
	('b122c6b6-1db1-4816-8f49-0f9d20b302d6', 'b69cff4b33c3cb0e10d708582e50c96013b0718d8c42aa1a54fa8ce65bb04ac8', '2026-08-05 20:23:38.549', '20260805181100_add_drivers', NULL, NULL, '2026-08-05 20:23:38.540', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
