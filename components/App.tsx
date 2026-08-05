"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Bus,
  Calendar,
  Cog,
  FileText,
  LayoutDashboard,
  LogOut,
  Moon,
  RefreshCw,
  Sun,
  Unlock,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

import Dashboard from "./Dashboard";
import DriversModule from "./DriversModule";
import OperationsModules from "./OperationsModules";
import ReportsModule from "./ReportsModule";
import RoutesModule from "./RoutesModule";
import SchedulesModule from "./SchedulesModule";
import VehiclesModule from "./VehiclesModule";

import type {
  Driver,
  FuelLog,
  MaintenanceRecord,
  Route,
  Schedule,
  Trip,
  Vehicle,
} from "../type";

type AppRole = "Admin" | "Supervisor" | "Staff" | "User";
type AuthTab = "login" | "register";
type Theme = "light" | "dark";
type AppTab =
  | "dashboard"
  | "routes"
  | "drivers"
  | "vehicles"
  | "schedules"
  | "operations"
  | "reports"
  | "settings";

type AuthUser = {
  id: number;
  full_name: string;
  email: string;
  username: string;
  role: AppRole;
};

const initialRoutes: Route[] = [
  {
    route_id: "route_1",
    route_name: "Fort to Maharagama",
    start_location: "Fort Central Junction",
    end_location: "Maharagama Terminal",
    stops: ["Borella Junction", "Nugegoda Point"],
    distance: 18.4,
    estimated_duration: 42,
    status: "Active",
  },
  {
    route_id: "route_2",
    route_name: "Pettah to Panadura",
    start_location: "Pettah Central Bus Stand",
    end_location: "Panadura Central Depot",
    stops: ["Wellawatte Station", "Ratmalana Airport Corner"],
    distance: 33.1,
    estimated_duration: 65,
    status: "Active",
  },
];

const initialDrivers: Driver[] = [
  {
    driver_id: "driver_1",
    name: "Nimal Perera",
    nic: "901234567V",
    phone: "0771234567",
    address: "Colombo 07",
    license_number: "B1234567",
    license_expiry: "2027-12-31",
    working_hours: 36,
    status: "Active",
  },
  {
    driver_id: "driver_2",
    name: "Rashmi Silva",
    nic: "942345678V",
    phone: "0719876543",
    address: "Nugegoda",
    license_number: "B7654321",
    license_expiry: "2026-11-30",
    working_hours: 28,
    status: "On Trip",
  },
];

const initialVehicles: Vehicle[] = [
  {
    vehicle_id: "vehicle_1",
    registration_number: "NB-1024",
    vehicle_type: "Single Decker",
    seating_capacity: 45,
    mileage: 54000,
    fuel_type: "Diesel",
    status: "Available",
  },
  {
    vehicle_id: "vehicle_2",
    registration_number: "NB-2048",
    vehicle_type: "Double Decker",
    seating_capacity: 72,
    mileage: 68000,
    fuel_type: "Hybrid",
    status: "On Trip",
  },
];

const initialSchedules: Schedule[] = [
  {
    schedule_id: "schedule_1",
    route_id: "route_1",
    vehicle_id: "vehicle_1",
    driver_id: "driver_1",
    departure_time: "08:00",
    arrival_time: "08:42",
    schedule_date: "2026-08-05",
    status: "Scheduled",
  },
  {
    schedule_id: "schedule_2",
    route_id: "route_2",
    vehicle_id: "vehicle_2",
    driver_id: "driver_2",
    departure_time: "09:15",
    arrival_time: "10:20",
    schedule_date: "2026-08-05",
    status: "Active",
  },
];

const initialTrips: Trip[] = [
  {
    trip_id: "trip_1",
    schedule_id: "schedule_2",
    start_time: "2026-08-05T09:15:00",
    end_time: "",
    status: "Active",
  },
];

const initialFuelLogs: FuelLog[] = [
  {
    fuel_id: "fuel_1",
    vehicle_id: "vehicle_2",
    date: "2026-08-04",
    liters: 68,
    cost: 13200,
    distance_covered: 390,
  },
];

const initialMaintenance: MaintenanceRecord[] = [
  {
    maintenance_id: "maint_1",
    vehicle_id: "vehicle_1",
    maintenance_type: "Scheduled",
    service_date: "2026-07-20",
    next_service_date: "2026-10-20",
    cost: 24500,
    remarks: "Oil change and brake inspection",
    status: "Completed",
  },
];

function createId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function toAppRole(role: string): AppRole {
  switch (role.toUpperCase()) {
    case "ADMIN":
      return "Admin";
    case "SUPERVISOR":
      return "Supervisor";
    case "STAFF":
      return "Staff";
    default:
      return "User";
  }
}

function normalizeUser(user: {
  id: number;
  full_name: string;
  email: string;
  username: string;
  role: string;
}): AuthUser {
  return {
    id: user.id,
    full_name: user.full_name,
    email: user.email,
    username: user.username,
    role: toAppRole(user.role),
  };
}

function App() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const storedUser =
      window.localStorage.getItem("srmss_user") ??
      window.sessionStorage.getItem("srmss_user");
    if (!storedUser) {
      return null;
    }

    try {
      return normalizeUser(JSON.parse(storedUser));
    } catch {
      window.localStorage.removeItem("srmss_user");
      window.sessionStorage.removeItem("srmss_user");
      return null;
    }
  });
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("srmss_theme");
    return storedTheme === "dark" ? "dark" : "light";
  });
  const [authTab, setAuthTab] = useState<AuthTab>("login");
  const [authLoading, setAuthLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [regFullName, setRegFullName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotPasswordUser, setForgotPasswordUser] = useState("");

  const [activeTab, setActiveTab] = useState<AppTab>("dashboard");
  const [depotName, setDepotName] = useState("Colombo Central Transit Depot");
  const [operatingHours, setOperatingHours] = useState("24/7 operations");
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  const [routes, setRoutes] = useState<Route[]>(initialRoutes);
  const [drivers, setDrivers] = useState<Driver[]>(initialDrivers);
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules);
  const [trips, setTrips] = useState<Trip[]>(initialTrips);
  const [fuelLogs, setFuelLogs] = useState<FuelLog[]>(initialFuelLogs);
  const [maintenance, setMaintenance] =
    useState<MaintenanceRecord[]>(initialMaintenance);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("srmss_theme", theme);
  }, [theme]);

  const persistUser = (user: AuthUser) => {
    const targetStorage = rememberMe
      ? window.localStorage
      : window.sessionStorage;
    window.localStorage.removeItem("srmss_user");
    window.sessionStorage.removeItem("srmss_user");
    targetStorage.setItem("srmss_user", JSON.stringify(user));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError("");
    setAuthLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setLoginError(data.message ?? "Invalid username or password.");
        return;
      }

      const user = normalizeUser(data.user);
      setCurrentUser(user);
      persistUser(user);
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Unable to connect to the server. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError("");
    setAuthLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: regFullName,
          email: regEmail,
          username: regUsername,
          password: regPassword,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setLoginError(data.message ?? "Unable to create account.");
        return;
      }

      const user = normalizeUser(data.user);
      setCurrentUser(user);
      persistUser(user);
      setRegFullName("");
      setRegEmail("");
      setRegUsername("");
      setRegPassword("");
      setAuthTab("login");
    } catch (error) {
      console.error("Registration failed:", error);
      setLoginError("Unable to connect to the server. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleResetPassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setShowForgotModal(false);
    setLoginError(
      `Reset link requested for ${forgotPasswordUser || "the selected account"}.`,
    );
  };

  const handleLogout = () => {
    window.localStorage.removeItem("srmss_user");
    window.sessionStorage.removeItem("srmss_user");
    setCurrentUser(null);
    setUsername("");
    setPassword("");
    setLoginError("");
    setAuthTab("login");
    setActiveTab("dashboard");
  };

  const updateById = <T extends object>(
    items: T[],
    idKey: keyof T,
    idValue: string,
    updates: Partial<T>,
  ) => {
    return items.map((item) =>
      String(item[idKey]) === idValue ? ({ ...item, ...updates } as T) : item,
    );
  };

  const handleCreateRoute = async (route: Partial<Route>) => {
    setRoutes((prev) => [
      ...prev,
      {
        route_id: route.route_id ?? createId("route"),
        route_name: route.route_name ?? "New Route",
        start_location: route.start_location ?? "",
        end_location: route.end_location ?? "",
        stops: route.stops ?? [],
        distance: route.distance ?? 0,
        estimated_duration: route.estimated_duration ?? 0,
        status: route.status ?? "Active",
      },
    ]);
  };

  const handleUpdateRoute = async (
    routeId: string,
    updates: Partial<Route>,
  ) => {
    setRoutes((prev) => updateById(prev, "route_id", routeId, updates));
  };

  const handleDeleteRoute = async (routeId: string) => {
    setRoutes((prev) => prev.filter((route) => route.route_id !== routeId));
  };

  const handleAddDriver = async (driver: Partial<Driver>) => {
    setDrivers((prev) => [
      ...prev,
      {
        driver_id: driver.driver_id ?? createId("driver"),
        name: driver.name ?? "New Driver",
        nic: driver.nic ?? "",
        phone: driver.phone ?? "",
        address: driver.address ?? "",
        license_number: driver.license_number ?? "",
        license_expiry: driver.license_expiry ?? "2027-12-31",
        working_hours: driver.working_hours ?? 0,
        status: driver.status ?? "Active",
      },
    ]);
  };

  const handleUpdateDriver = async (
    driverId: string,
    updates: Partial<Driver>,
  ) => {
    setDrivers((prev) => updateById(prev, "driver_id", driverId, updates));
  };

  const handleDeleteDriver = async (driverId: string) => {
    setDrivers((prev) =>
      prev.filter((driver) => driver.driver_id !== driverId),
    );
  };

  const handleAddVehicle = async (vehicle: Partial<Vehicle>) => {
    setVehicles((prev) => [
      ...prev,
      {
        vehicle_id: vehicle.vehicle_id ?? createId("vehicle"),
        registration_number: vehicle.registration_number ?? "",
        vehicle_type: vehicle.vehicle_type ?? "Single Decker",
        seating_capacity: vehicle.seating_capacity ?? 0,
        mileage: vehicle.mileage ?? 0,
        fuel_type: vehicle.fuel_type ?? "Diesel",
        status: vehicle.status ?? "Available",
      },
    ]);
  };

  const handleUpdateVehicle = async (
    vehicleId: string,
    updates: Partial<Vehicle>,
  ) => {
    setVehicles((prev) => updateById(prev, "vehicle_id", vehicleId, updates));
  };

  const handleDeleteVehicle = async (vehicleId: string) => {
    setVehicles((prev) =>
      prev.filter((vehicle) => vehicle.vehicle_id !== vehicleId),
    );
  };

  const handleCreateSchedule = async (schedule: Partial<Schedule>) => {
    setSchedules((prev) => [
      ...prev,
      {
        schedule_id: schedule.schedule_id ?? createId("schedule"),
        route_id: schedule.route_id ?? routes[0]?.route_id ?? "",
        vehicle_id: schedule.vehicle_id ?? vehicles[0]?.vehicle_id ?? "",
        driver_id: schedule.driver_id ?? drivers[0]?.driver_id ?? "",
        departure_time: schedule.departure_time ?? "08:00",
        arrival_time: schedule.arrival_time ?? "09:00",
        schedule_date: schedule.schedule_date ?? "2026-08-05",
        status: schedule.status ?? "Scheduled",
      },
    ]);
  };

  const handleUpdateSchedule = async (
    scheduleId: string,
    updates: Partial<Schedule>,
  ) => {
    setSchedules((prev) =>
      updateById(prev, "schedule_id", scheduleId, updates),
    );
  };

  const handleDeleteSchedule = async (scheduleId: string) => {
    setSchedules((prev) =>
      prev.filter((schedule) => schedule.schedule_id !== scheduleId),
    );
  };

  const handleAIResolve = async (prompt: string) => {
    return `AI suggestion for "${prompt}": assign the nearest available vehicle and driver, then recheck the schedule window.`;
  };

  const handleStartTrip = async (tripId: string) => {
    setTrips((prev) =>
      prev.map((trip) =>
        trip.trip_id === tripId
          ? {
              ...trip,
              status: "Active",
              start_time: trip.start_time || new Date().toISOString(),
            }
          : trip,
      ),
    );
  };

  const handleEndTrip = async (
    tripId: string,
    status: "Completed" | "Cancelled",
    remarks?: string,
  ) => {
    setTrips((prev) =>
      prev.map((trip) =>
        trip.trip_id === tripId
          ? { ...trip, status, end_time: new Date().toISOString(), remarks }
          : trip,
      ),
    );
  };

  const handleUpdateTripStatus = async (
    tripId: string,
    status: Trip["status"],
  ) => {
    setTrips((prev) =>
      prev.map((trip) =>
        trip.trip_id === tripId ? { ...trip, status } : trip,
      ),
    );
  };

  const handleAddFuelLog = async (log: Partial<FuelLog>) => {
    setFuelLogs((prev) => [
      ...prev,
      {
        fuel_id: log.fuel_id ?? createId("fuel"),
        vehicle_id: log.vehicle_id ?? vehicles[0]?.vehicle_id ?? "",
        date: log.date ?? "2026-08-05",
        liters: log.liters ?? 0,
        cost: log.cost ?? 0,
        distance_covered: log.distance_covered ?? 0,
      },
    ]);
  };

  const handleAddMaintenance = async (record: Partial<MaintenanceRecord>) => {
    setMaintenance((prev) => [
      ...prev,
      {
        maintenance_id: record.maintenance_id ?? createId("maint"),
        vehicle_id: record.vehicle_id ?? vehicles[0]?.vehicle_id ?? "",
        maintenance_type: record.maintenance_type ?? "Scheduled",
        service_date: record.service_date ?? "2026-08-05",
        next_service_date: record.next_service_date ?? "2026-11-05",
        cost: record.cost ?? 0,
        remarks: record.remarks ?? "",
        status: record.status ?? "Scheduled",
      },
    ]);
  };

  const handleUpdateMaintenanceStatus = async (
    recordId: string,
    status: MaintenanceRecord["status"],
  ) => {
    setMaintenance((prev) =>
      prev.map((record) =>
        record.maintenance_id === recordId ? { ...record, status } : record,
      ),
    );
  };

  const handleSaveSettings = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setSaveSuccessMsg("Depot settings saved successfully.");
    window.setTimeout(() => setSaveSuccessMsg(""), 2500);
  };

  if (!currentUser) {
    return (
      <div
        className={`min-h-screen ${theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"}`}
      >
        <div className="absolute right-5 top-5 z-20">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl border border-slate-300/60 bg-white/80 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur"
          >
            {theme === "dark" ? (
              <Sun className="inline-block h-4 w-4" />
            ) : (
              <Moon className="inline-block h-4 w-4" />
            )}
          </button>
        </div>

        <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="hidden rounded-4xl bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 p-10 text-white shadow-2xl lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Bus className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-black tracking-[0.25em]">
                  SRMSS
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-slate-300">
                  Transit Control
                </div>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-black leading-tight">
              Smart route operations, scheduling, and fleet control in one
              place.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              Sign in to manage routes, vehicles, drivers, schedules, dispatch
              logs, and audit reporting from a single dashboard.
            </p>
          </div>

          <div className="mx-auto w-full max-w-md rounded-4xl border border-slate-200/70 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex border-b border-slate-200 pb-1 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setAuthTab("login")}
                className={`flex-1 py-2 text-xs font-bold ${authTab === "login" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-400"}`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setAuthTab("register")}
                className={`flex-1 py-2 text-xs font-bold ${authTab === "register" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-400"}`}
              >
                Create Account
              </button>
            </div>

            <h2 className="text-xl font-black">
              {authTab === "login" ? "Welcome back" : "Register account"}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              {authTab === "login"
                ? "Access the depot portal."
                : "Create a passenger or staff account."}
            </p>

            {loginError && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            {authTab === "login" ? (
              <form onSubmit={handleLogin} className="mt-5 space-y-4">
                <div>
                  <label className="mb-1 block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Username
                  </label>
                  <div className="relative">
                    <UserCheck className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <label className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setForgotPasswordUser(username);
                        setShowForgotModal(true);
                      }}
                      className="text-[10px] font-bold text-blue-600"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Unlock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Keep me signed in
                </label>

                <button
                  type="submit"
                  disabled={authLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-3 text-sm font-black text-white shadow-lg disabled:opacity-70"
                >
                  {authLoading ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Zap className="h-4 w-4" />
                  )}
                  Access Portal
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="mt-5 space-y-3.5">
                <div>
                  <label className="mb-1 block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Full name
                  </label>
                  <input
                    value={regFullName}
                    onChange={(e) => setRegFullName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Email
                  </label>
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Username
                  </label>
                  <input
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Password
                  </label>
                  <input
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <button
                  type="submit"
                  disabled={authLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-cyan-600 py-3 text-sm font-black text-white shadow-lg disabled:opacity-70"
                >
                  {authLoading ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <UserCheck className="h-4 w-4" />
                  )}
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>

        {showForgotModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-800">
                <h3 className="font-black uppercase tracking-wider">
                  Reset Password
                </h3>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(false)}
                  className="text-2xl leading-none text-slate-400"
                >
                  ×
                </button>
              </div>
              <form
                onSubmit={handleResetPassword}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="mb-1 block font-bold uppercase tracking-widest text-slate-500">
                    Account Username
                  </label>
                  <input
                    value={forgotPasswordUser}
                    onChange={(e) => setForgotPasswordUser(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="rounded-lg px-3 py-2 font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="flex h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Bus className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xs font-black uppercase tracking-widest">
              SRMSS
            </h1>
            <p className="text-[10px] text-slate-500">{depotName}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <div className="text-xs font-bold">{currentUser.full_name}</div>
            <div className="text-[10px] uppercase tracking-wide text-slate-500">
              {currentUser.role} Account
            </div>
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl border border-slate-200 p-2.5 dark:border-slate-700"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-slate-200 p-2.5 dark:border-slate-700"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-full border-b border-slate-200 bg-white p-4 md:w-64 md:border-b-0 md:border-r dark:border-slate-800 dark:bg-slate-900">
          <div className="space-y-1 text-xs font-semibold">
            {currentUser.role === "Admin" && (
              <button
                type="button"
                onClick={() => setActiveTab("dashboard")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "dashboard" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </button>
            )}
            <button
              type="button"
              onClick={() => setActiveTab("routes")}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "routes" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
            >
              <Calendar className="h-4 w-4" /> Routes
            </button>
            {currentUser.role === "Admin" && (
              <>
                <button
                  type="button"
                  onClick={() => setActiveTab("drivers")}
                  className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "drivers" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
                >
                  <Users className="h-4 w-4" /> Drivers
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("vehicles")}
                  className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "vehicles" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
                >
                  <Bus className="h-4 w-4" /> Vehicles
                </button>
              </>
            )}
            {(currentUser.role === "Admin" ||
              currentUser.role === "Supervisor" ||
              currentUser.role === "User") && (
              <button
                type="button"
                onClick={() => setActiveTab("schedules")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "schedules" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <Calendar className="h-4 w-4" /> Schedules
              </button>
            )}
            {(currentUser.role === "Admin" || currentUser.role === "Staff") && (
              <button
                type="button"
                onClick={() => setActiveTab("operations")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "operations" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <Zap className="h-4 w-4" /> Operations
              </button>
            )}
            {(currentUser.role === "Admin" ||
              currentUser.role === "Supervisor") && (
              <button
                type="button"
                onClick={() => setActiveTab("reports")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "reports" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <FileText className="h-4 w-4" /> Reports
              </button>
            )}
          </div>

          {currentUser.role === "Admin" && (
            <button
              type="button"
              onClick={() => setActiveTab("settings")}
              className={`mt-4 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs ${activeTab === "settings" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
            >
              <Cog className="h-4 w-4" /> Settings
            </button>
          )}
        </aside>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeTab === "dashboard" && (
            <Dashboard
              routes={routes}
              drivers={drivers}
              vehicles={vehicles}
              schedules={schedules}
              fuelLogs={fuelLogs}
              trips={trips}
              onSetTab={setActiveTab}
            />
          )}

          {activeTab === "routes" && (
            <RoutesModule
              routes={routes}
              onCreateRoute={handleCreateRoute}
              onUpdateRoute={handleUpdateRoute}
              onDeleteRoute={handleDeleteRoute}
              userRole={currentUser.role}
            />
          )}

          {activeTab === "drivers" && (
            <DriversModule
              drivers={drivers}
              onAddDriver={handleAddDriver}
              onUpdateDriver={handleUpdateDriver}
              onDeleteDriver={handleDeleteDriver}
              userRole={currentUser.role}
            />
          )}

          {activeTab === "vehicles" && (
            <VehiclesModule
              vehicles={vehicles}
              onAddVehicle={handleAddVehicle}
              onUpdateVehicle={handleUpdateVehicle}
              onDeleteVehicle={handleDeleteVehicle}
              userRole={currentUser.role}
            />
          )}

          {activeTab === "schedules" && (
            <SchedulesModule
              schedules={schedules}
              drivers={drivers}
              vehicles={vehicles}
              routes={routes}
              onCreateSchedule={handleCreateSchedule}
              onUpdateSchedule={handleUpdateSchedule}
              onDeleteSchedule={handleDeleteSchedule}
              onAIResolve={handleAIResolve}
              userRole={currentUser.role}
            />
          )}

          {activeTab === "operations" && (
            <OperationsModules
              trips={trips}
              fuelLogs={fuelLogs}
              maintenance={maintenance}
              vehicles={vehicles}
              schedules={schedules}
              routes={routes}
              onStartTrip={handleStartTrip}
              onEndTrip={handleEndTrip}
              onUpdateTripStatus={handleUpdateTripStatus}
              onAddFuelLog={handleAddFuelLog}
              onAddMaintenance={handleAddMaintenance}
              onUpdateMaintenanceStatus={handleUpdateMaintenanceStatus}
              userRole={currentUser.role}
            />
          )}

          {activeTab === "reports" && (
            <ReportsModule
              routes={routes}
              drivers={drivers}
              vehicles={vehicles}
              fuelLogs={fuelLogs}
              maintenance={maintenance}
              schedules={schedules}
            />
          )}

          {activeTab === "settings" && (
            <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div>
                <h3 className="text-sm font-bold">
                  System Parameter Configurations
                </h3>
                <p className="text-xs text-slate-500">
                  Calibrate depot rules, terminal names, and backup intervals.
                </p>
              </div>

              {saveSuccessMsg && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-200">
                  <span>{saveSuccessMsg}</span>
                </div>
              )}

              <form
                onSubmit={handleSaveSettings}
                className="space-y-4 text-xs font-semibold"
              >
                <div className="space-y-1">
                  <label className="text-slate-700 dark:text-slate-300">
                    Official Depot Terminal Name
                  </label>
                  <input
                    value={depotName}
                    onChange={(e) => setDepotName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-700 dark:text-slate-300">
                    Operating hours
                  </label>
                  <input
                    value={operatingHours}
                    onChange={(e) => setOperatingHours(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <div className="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white"
                  >
                    Save Configurations
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
