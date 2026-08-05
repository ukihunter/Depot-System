-- CreateTable
CREATE TABLE `vehicles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicleId` VARCHAR(191) NOT NULL,
    `registrationNumber` VARCHAR(191) NOT NULL,
    `vehicleType` ENUM('SINGLE_DECKER', 'DOUBLE_DECKER', 'ELECTRIC_BUS', 'ARTICULATED_BUS', 'COACH') NOT NULL,
    `seatingCapacity` INTEGER NOT NULL DEFAULT 0,
    `mileage` INTEGER NOT NULL DEFAULT 0,
    `fuelType` ENUM('DIESEL', 'ELECTRIC', 'CNG', 'HYBRID') NOT NULL,
    `status` ENUM('AVAILABLE', 'MAINTENANCE', 'ON_TRIP') NOT NULL DEFAULT 'AVAILABLE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `vehicles_vehicleId_key`(`vehicleId`),
    UNIQUE INDEX `vehicles_registrationNumber_key`(`registrationNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `routes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `routeId` VARCHAR(191) NOT NULL,
    `route_name` VARCHAR(191) NOT NULL,
    `start_location` VARCHAR(191) NOT NULL,
    `end_location` VARCHAR(191) NOT NULL,
    `stops` JSON NOT NULL,
    `distance` DOUBLE NOT NULL DEFAULT 0,
    `estimated_duration` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `routes_routeId_key`(`routeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schedules` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `scheduleId` VARCHAR(191) NOT NULL,
    `route_id` VARCHAR(191) NOT NULL,
    `vehicle_id` VARCHAR(191) NOT NULL,
    `driver_id` VARCHAR(191) NOT NULL,
    `departure_time` VARCHAR(191) NOT NULL,
    `arrival_time` VARCHAR(191) NOT NULL,
    `schedule_date` DATETIME(3) NOT NULL,
    `status` ENUM('SCHEDULED', 'ACTIVE', 'DELAYED', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'SCHEDULED',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `schedules_scheduleId_key`(`scheduleId`),
    INDEX `schedules_route_id_idx`(`route_id`),
    INDEX `schedules_vehicle_id_idx`(`vehicle_id`),
    INDEX `schedules_driver_id_idx`(`driver_id`),
    INDEX `schedules_schedule_date_idx`(`schedule_date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_route_id_fkey` FOREIGN KEY (`route_id`) REFERENCES `routes`(`routeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`vehicleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`driverId`) ON DELETE RESTRICT ON UPDATE CASCADE;
