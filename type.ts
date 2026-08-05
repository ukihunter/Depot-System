/**
 * SRMSS Data Types and Interfaces
 */

export enum UserRole {
  ADMIN = "Admin",
  SUPERVISOR = "Supervisor",
  STAFF = "Staff",
  USER = "User",
}

export interface User {
  user_id: string;
  full_name: string;
  email: string;
  username: string;
  role: UserRole;
  status: "Active" | "Inactive";
  created_at: string;
}

export interface Route {
  route_id: string;
  route_name: string;
  start_location: string;
  end_location: string;
  stops: string[]; // List of stop names
  distance: number; // in km
  estimated_duration: number; // in minutes
  status: "Active" | "Inactive";
}

export type Driver = {
  driver_id: string;
  name: string;
  nic: string;
  phone: string;
  address: string;
  license_number: string;
  license_expiry: string;
  working_hours: number;
  status: "Active" | "Inactive" | "On Trip";
};

export interface Vehicle {
  vehicle_id: string;
  registration_number: string;
  vehicle_type:
    | "Single Decker"
    | "Double Decker"
    | "Electric Bus"
    | "Articulated Bus"
    | "Coach";
  seating_capacity: number;
  mileage: number; // in km
  fuel_type: "Diesel" | "Electric" | "CNG" | "Hybrid";
  status: "Available" | "Maintenance" | "On Trip";
}

export interface Schedule {
  schedule_id: string;
  route_id: string;
  vehicle_id: string;
  driver_id: string;
  departure_time: string; // HH:MM
  arrival_time: string; // HH:MM
  schedule_date: string; // YYYY-MM-DD
  status: "Scheduled" | "Active" | "Delayed" | "Completed" | "Cancelled";
}

export interface Trip {
  trip_id: string;
  schedule_id: string;
  start_time: string; // datetime or time
  end_time: string; // datetime or time
  status: "Scheduled" | "Active" | "Delayed" | "Completed" | "Cancelled";
  remarks?: string;
}

export interface FuelLog {
  fuel_id: string;
  vehicle_id: string;
  date: string; // YYYY-MM-DD
  liters: number;
  cost: number;
  distance_covered: number; // in km
}

export interface MaintenanceRecord {
  maintenance_id: string;
  vehicle_id: string;
  maintenance_type: "Scheduled" | "Corrective" | "Emergency";
  service_date: string; // YYYY-MM-DD
  next_service_date: string; // YYYY-MM-DD
  cost: number;
  remarks: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Cancelled";
}

export interface DBState {
  users: User[];
  routes: Route[];
  drivers: Driver[];
  vehicles: Vehicle[];
  schedules: Schedule[];
  trips: Trip[];
  fuelLogs: FuelLog[];
  maintenance: MaintenanceRecord[];
}
