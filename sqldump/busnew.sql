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

-- Dumping structure for table srmss.audit_logs
CREATE TABLE IF NOT EXISTS `audit_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `action` varchar(191) NOT NULL,
  `entity` varchar(191) NOT NULL,
  `entityId` varchar(191) DEFAULT NULL,
  `description` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `audit_logs_userId_idx` (`userId`),
  KEY `audit_logs_entity_idx` (`entity`),
  CONSTRAINT `audit_logs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.audit_logs: ~0 rows (approximately)
DELETE FROM `audit_logs`;

-- Dumping structure for table srmss.depots
CREATE TABLE IF NOT EXISTS `depots` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `depotCode` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `code` varchar(191) NOT NULL,
  `address` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deletedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `depots_depotCode_key` (`depotCode`),
  UNIQUE KEY `depots_code_key` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.depots: ~3 rows (approximately)
DELETE FROM `depots`;
INSERT INTO `depots` (`id`, `depotCode`, `name`, `code`, `address`, `phone`, `email`, `isActive`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, 'cmshci3ct0000tcuvmqr1700v', 'Colombo Central Depot', 'CMB-001', 'Colombo', '0112345678', 'colombo@srmss.com', 1, '2026-08-06 10:00:40.061', '2026-08-06 10:00:40.061', NULL),
	(2, 'cmshci3d40001tcuvrb7urbgq', 'Kandy Main Depot', 'KDY-001', 'Kandy', '0812345678', 'kandy@srmss.com', 1, '2026-08-06 10:00:40.072', '2026-08-06 10:00:40.072', NULL),
	(4, 'cmshif4zp00004guvq2maaqgj', 'Mawathagama Depo', 'Depo45896', 'Mawatahgaam kurunagala', '01156874256', 'mawatahqgamadepo@gmail.com', 1, '2026-08-06 12:46:19.909', '2026-08-06 12:46:19.909', NULL);

-- Dumping structure for table srmss.drivers
CREATE TABLE IF NOT EXISTS `drivers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `driverId` varchar(191) NOT NULL,
  `depotId` int(11) NOT NULL,
  `fullName` varchar(191) NOT NULL,
  `nic` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `address` varchar(191) DEFAULT NULL,
  `licenseNumber` varchar(191) NOT NULL,
  `licenseExpiry` datetime(3) NOT NULL,
  `status` enum('ACTIVE','INACTIVE','ON_LEAVE','ON_TRIP') NOT NULL DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deletedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `drivers_driverId_key` (`driverId`),
  UNIQUE KEY `drivers_nic_key` (`nic`),
  UNIQUE KEY `drivers_licenseNumber_key` (`licenseNumber`),
  KEY `drivers_depotId_idx` (`depotId`),
  KEY `drivers_status_idx` (`status`),
  CONSTRAINT `drivers_depotId_fkey` FOREIGN KEY (`depotId`) REFERENCES `depots` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.drivers: ~0 rows (approximately)
DELETE FROM `drivers`;

-- Dumping structure for table srmss.fuel_logs
CREATE TABLE IF NOT EXISTS `fuel_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fuelId` varchar(191) NOT NULL,
  `depotId` int(11) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `date` datetime(3) NOT NULL,
  `liters` double NOT NULL,
  `cost` double NOT NULL,
  `distanceCovered` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fuel_logs_fuelId_key` (`fuelId`),
  KEY `fuel_logs_depotId_idx` (`depotId`),
  KEY `fuel_logs_vehicleId_idx` (`vehicleId`),
  KEY `fuel_logs_date_idx` (`date`),
  CONSTRAINT `fuel_logs_depotId_fkey` FOREIGN KEY (`depotId`) REFERENCES `depots` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fuel_logs_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.fuel_logs: ~0 rows (approximately)
DELETE FROM `fuel_logs`;

-- Dumping structure for table srmss.maintenance_records
CREATE TABLE IF NOT EXISTS `maintenance_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `maintenanceId` varchar(191) NOT NULL,
  `depotId` int(11) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `maintenanceType` enum('SCHEDULED','CORRECTIVE','EMERGENCY') NOT NULL,
  `serviceDate` datetime(3) NOT NULL,
  `nextServiceDate` datetime(3) DEFAULT NULL,
  `cost` double NOT NULL,
  `remarks` varchar(191) DEFAULT NULL,
  `status` enum('SCHEDULED','IN_PROGRESS','COMPLETED','CANCELLED') NOT NULL DEFAULT 'SCHEDULED',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `maintenance_records_maintenanceId_key` (`maintenanceId`),
  KEY `maintenance_records_depotId_idx` (`depotId`),
  KEY `maintenance_records_vehicleId_idx` (`vehicleId`),
  KEY `maintenance_records_serviceDate_idx` (`serviceDate`),
  CONSTRAINT `maintenance_records_depotId_fkey` FOREIGN KEY (`depotId`) REFERENCES `depots` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `maintenance_records_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.maintenance_records: ~0 rows (approximately)
DELETE FROM `maintenance_records`;

-- Dumping structure for table srmss.routes
CREATE TABLE IF NOT EXISTS `routes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `routeId` varchar(191) NOT NULL,
  `depotId` int(11) NOT NULL,
  `routeName` varchar(191) NOT NULL,
  `startLocation` varchar(191) NOT NULL,
  `endLocation` varchar(191) NOT NULL,
  `distance` double NOT NULL DEFAULT 0,
  `estimatedDuration` int(11) NOT NULL DEFAULT 0,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deletedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `routes_routeId_key` (`routeId`),
  KEY `routes_depotId_idx` (`depotId`),
  KEY `routes_status_idx` (`status`),
  CONSTRAINT `routes_depotId_fkey` FOREIGN KEY (`depotId`) REFERENCES `depots` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.routes: ~0 rows (approximately)
DELETE FROM `routes`;

-- Dumping structure for table srmss.route_stops
CREATE TABLE IF NOT EXISTS `route_stops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `routeId` int(11) NOT NULL,
  `stopName` varchar(191) NOT NULL,
  `stopOrder` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `route_stops_routeId_idx` (`routeId`),
  CONSTRAINT `route_stops_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `routes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.route_stops: ~0 rows (approximately)
DELETE FROM `route_stops`;

-- Dumping structure for table srmss.schedules
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scheduleId` varchar(191) NOT NULL,
  `depotId` int(11) NOT NULL,
  `routeId` int(11) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `driverId` int(11) NOT NULL,
  `departureTime` datetime(3) NOT NULL,
  `arrivalTime` datetime(3) NOT NULL,
  `scheduleDate` datetime(3) NOT NULL,
  `status` enum('SCHEDULED','ACTIVE','DELAYED','COMPLETED','CANCELLED') NOT NULL DEFAULT 'SCHEDULED',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `schedules_scheduleId_key` (`scheduleId`),
  KEY `schedules_depotId_idx` (`depotId`),
  KEY `schedules_routeId_idx` (`routeId`),
  KEY `schedules_vehicleId_idx` (`vehicleId`),
  KEY `schedules_driverId_idx` (`driverId`),
  KEY `schedules_scheduleDate_idx` (`scheduleDate`),
  CONSTRAINT `schedules_depotId_fkey` FOREIGN KEY (`depotId`) REFERENCES `depots` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `schedules_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `drivers` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `schedules_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `routes` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `schedules_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.schedules: ~0 rows (approximately)
DELETE FROM `schedules`;

-- Dumping structure for table srmss.trips
CREATE TABLE IF NOT EXISTS `trips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tripId` varchar(191) NOT NULL,
  `scheduleId` int(11) NOT NULL,
  `startTime` datetime(3) NOT NULL,
  `endTime` datetime(3) DEFAULT NULL,
  `status` enum('SCHEDULED','ACTIVE','DELAYED','COMPLETED','CANCELLED') NOT NULL DEFAULT 'SCHEDULED',
  `remarks` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `trips_tripId_key` (`tripId`),
  KEY `trips_scheduleId_idx` (`scheduleId`),
  KEY `trips_status_idx` (`status`),
  CONSTRAINT `trips_scheduleId_fkey` FOREIGN KEY (`scheduleId`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.trips: ~0 rows (approximately)
DELETE FROM `trips`;

-- Dumping structure for table srmss.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(191) NOT NULL,
  `fullName` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` enum('MAIN_ADMIN','DEPOT_ADMIN','SUPERVISOR','OPERATIONAL_STAFF') NOT NULL,
  `status` enum('ACTIVE','INACTIVE','SUSPENDED') NOT NULL DEFAULT 'ACTIVE',
  `depotId` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deletedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_userId_key` (`userId`),
  UNIQUE KEY `users_email_key` (`email`),
  UNIQUE KEY `users_username_key` (`username`),
  KEY `users_depotId_idx` (`depotId`),
  KEY `users_role_idx` (`role`),
  KEY `users_status_idx` (`status`),
  CONSTRAINT `users_depotId_fkey` FOREIGN KEY (`depotId`) REFERENCES `depots` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.users: ~7 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `userId`, `fullName`, `email`, `username`, `password`, `role`, `status`, `depotId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, 'cmshci3m00002tcuv8059d6mx', 'System Main Administrator', 'mainadmin@srmss.com', 'mainadmin', '$argon2id$v=19$m=65536,p=4,t=3$WwF+GxSPklT8mRdIWMhQtw$fiQoM26IyQdIe2pPTb1QFhMnMcxH9Qu0HNh9uP73v7o', 'MAIN_ADMIN', 'ACTIVE', NULL, '2026-08-06 10:00:40.392', '2026-08-06 10:00:40.392', NULL),
	(2, 'cmshci3mf0003tcuvheq5cpet', 'Colombo Depot Admin', 'colombo.admin@srmss.com', 'colombo_admin', '$argon2id$v=19$m=65536,p=4,t=3$6s+vNUeHBWgVy1Btsaltjg$nqq1Kp99ymOC1Le/8h58kmYIoKnT66ZyQDN9+tF1x/g', 'DEPOT_ADMIN', 'ACTIVE', 1, '2026-08-06 10:00:40.407', '2026-08-06 10:00:40.407', NULL),
	(3, 'cmshci3mf0004tcuvg1m2apx3', 'Colombo Supervisor', 'colombo.supervisor@srmss.com', 'colombo_supervisor', '$argon2id$v=19$m=65536,p=4,t=3$DNuyfHFwEywq4t3DQLt0qw$cOKj8ERiU/egZexUma6FiBYOu9ujroRP71UnIRR2Iuc', 'SUPERVISOR', 'ACTIVE', 1, '2026-08-06 10:00:40.407', '2026-08-06 10:00:40.407', NULL),
	(4, 'cmshci3mf0005tcuvaeokg5x2', 'Colombo Operational Staff', 'colombo.staff@srmss.com', 'colombo_staff', '$argon2id$v=19$m=65536,p=4,t=3$6EvuJvebUvxuHiOR4k1Ctg$j1rZS2g19pLe9wXbIyNWOixgsy7k2FEZ96NuYj3Ta2k', 'OPERATIONAL_STAFF', 'ACTIVE', 1, '2026-08-06 10:00:40.407', '2026-08-06 10:00:40.407', NULL),
	(5, 'cmshci3mk0006tcuvr9r7qfnm', 'Kandy Depot Admin', 'kandy1.admin@srmss.com', 'kandy_admin', '$argon2id$v=19$m=65536,p=4,t=3$6s+vNUeHBWgVy1Btsaltjg$nqq1Kp99ymOC1Le/8h58kmYIoKnT66ZyQDN9+tF1x/g', 'DEPOT_ADMIN', 'ACTIVE', 2, '2026-08-06 10:00:40.412', '2026-08-06 13:06:05.969', NULL),
	(6, 'cmshci3mk0007tcuv1mlrcjus', 'Kandy Supervisor', 'kandy.supervisor@srmss.com', 'kandy_supervisor', '$argon2id$v=19$m=65536,p=4,t=3$DNuyfHFwEywq4t3DQLt0qw$cOKj8ERiU/egZexUma6FiBYOu9ujroRP71UnIRR2Iuc', 'SUPERVISOR', 'ACTIVE', 2, '2026-08-06 10:00:40.412', '2026-08-06 10:00:40.412', NULL),
	(7, 'cmshci3mk0008tcuvzwhzmvsx', 'Kandy Operational Staff', 'kandy.staff@srmss.com', 'kandy_staff', '$argon2id$v=19$m=65536,p=4,t=3$6EvuJvebUvxuHiOR4k1Ctg$j1rZS2g19pLe9wXbIyNWOixgsy7k2FEZ96NuYj3Ta2k', 'OPERATIONAL_STAFF', 'ACTIVE', 2, '2026-08-06 10:00:40.412', '2026-08-06 10:00:40.412', NULL);

-- Dumping structure for table srmss.vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicleId` varchar(191) NOT NULL,
  `depotId` int(11) NOT NULL,
  `registrationNumber` varchar(191) NOT NULL,
  `vehicleType` enum('SINGLE_DECKER','DOUBLE_DECKER','ELECTRIC_BUS','ARTICULATED_BUS','COACH') NOT NULL,
  `seatingCapacity` int(11) NOT NULL,
  `mileage` double NOT NULL,
  `fuelType` enum('DIESEL','ELECTRIC','HYBRID','CNG') NOT NULL,
  `status` enum('AVAILABLE','ON_TRIP','MAINTENANCE','OUT_OF_SERVICE') NOT NULL DEFAULT 'AVAILABLE',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deletedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vehicles_vehicleId_key` (`vehicleId`),
  UNIQUE KEY `vehicles_registrationNumber_key` (`registrationNumber`),
  KEY `vehicles_depotId_idx` (`depotId`),
  KEY `vehicles_status_idx` (`status`),
  CONSTRAINT `vehicles_depotId_fkey` FOREIGN KEY (`depotId`) REFERENCES `depots` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table srmss.vehicles: ~0 rows (approximately)
DELETE FROM `vehicles`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
