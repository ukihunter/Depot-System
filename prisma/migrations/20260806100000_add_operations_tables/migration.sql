-- Create operations tables for trips, fuel logs, and maintenance records.

CREATE TABLE IF NOT EXISTS `trips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tripId` varchar(191) NOT NULL,
  `schedule_id` varchar(191) NOT NULL,
  `start_time` varchar(191) NOT NULL,
  `end_time` varchar(191) NOT NULL DEFAULT '',
  `status` enum('SCHEDULED','ACTIVE','DELAYED','COMPLETED','CANCELLED') NOT NULL DEFAULT 'SCHEDULED',
  `remarks` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `trips_tripId_key` (`tripId`),
  KEY `trips_schedule_id_idx` (`schedule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `fuel_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fuelId` varchar(191) NOT NULL,
  `vehicle_id` varchar(191) NOT NULL,
  `date` datetime(3) NOT NULL,
  `liters` double NOT NULL,
  `cost` double NOT NULL,
  `distance_covered` double NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fuel_logs_fuelId_key` (`fuelId`),
  KEY `fuel_logs_vehicle_id_idx` (`vehicle_id`),
  KEY `fuel_logs_date_idx` (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `maintenance_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `maintenanceId` varchar(191) NOT NULL,
  `vehicle_id` varchar(191) NOT NULL,
  `maintenance_type` enum('SCHEDULED','CORRECTIVE','EMERGENCY') NOT NULL,
  `service_date` datetime(3) NOT NULL,
  `next_service_date` datetime(3) NOT NULL,
  `cost` double NOT NULL,
  `remarks` varchar(191) DEFAULT NULL,
  `status` enum('SCHEDULED','IN_PROGRESS','COMPLETED','CANCELLED') NOT NULL DEFAULT 'SCHEDULED',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `maintenance_records_maintenanceId_key` (`maintenanceId`),
  KEY `maintenance_records_vehicle_id_idx` (`vehicle_id`),
  KEY `maintenance_records_service_date_idx` (`service_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;