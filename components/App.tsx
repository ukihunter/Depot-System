"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Building,
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
import {
  createDriver,
  deleteDriver,
  getDrivers,
  updateDriver,
} from "@/lib/api/drivers";
import {
  createVehicle,
  deleteVehicle,
  getVehicles,
  updateVehicle,
} from "@/lib/api/vehicles";
import {
  createRoute,
  deleteRoute,
  getRoutes,
  updateRoute,
} from "@/lib/api/routes";
import {
  createSchedule,
  deleteSchedule,
  getSchedules,
  updateSchedule,
} from "@/lib/api/schedules";
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

type AppRole =
  | "MAIN_ADMIN"
  | "DEPOT_ADMIN"
  | "SUPERVISOR"
  | "OPERATIONAL_STAFF";
const permissions: Record<AppRole, readonly string[]> = {
  MAIN_ADMIN: [
    "dashboard",
    "users",
    "depots",
    "routes",
    "drivers",
    "vehicles",
    "schedules",
    "operations",
    "reports",
    "settings",
  ],
  DEPOT_ADMIN: [
    "dashboard",

    "routes",
    "drivers",
    "vehicles",
    "schedules",
    "operations",
    "reports",
  ],
  SUPERVISOR: ["dashboard", "schedules", "operations", "reports"],
  OPERATIONAL_STAFF: ["operations", "schedules"],
};
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
  | "depots"
  | "users"
  | "settings";

type AuthUser = {
  id: number;
  full_name: string;
  email: string;
  username: string;
  role: AppRole;
  depot_id: number | null;
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

const appTabs = new Set<AppTab>([
  "dashboard",
  "routes",
  "drivers",
  "vehicles",
  "schedules",
  "operations",
  "reports",
  "settings",
]);

function normalizeRole(role: string): AppRole {
  switch (role.toUpperCase()) {
    case "MAIN_ADMIN":
    case "ADMIN":
      return "MAIN_ADMIN";
    case "DEPOT_ADMIN":
      return "DEPOT_ADMIN";
    case "SUPERVISOR":
      return "SUPERVISOR";
    case "OPERATIONAL_STAFF":
    case "STAFF":
    case "USER":
      return "OPERATIONAL_STAFF";
    default:
      return "OPERATIONAL_STAFF";
  }
}

function formatRoleLabel(role: AppRole) {
  return role
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function canAccessTab(role: AppRole, tab: AppTab) {
  return permissions[role].includes(tab);
}

function getFirstAccessibleTab(role: AppRole): AppTab {
  for (const tab of permissions[role]) {
    if (appTabs.has(tab as AppTab)) {
      return tab as AppTab;
    }
  }

  return "dashboard";
}

function normalizeUser(user: {
  id: number;
  full_name: string;
  email: string;
  username: string;
  role: string;
  depot_id: number | null;
}): AuthUser {
  return {
    id: user.id,
    full_name: user.full_name,
    email: user.email,
    username: user.username,
    role: normalizeRole(user.role),
    depot_id: user.depot_id,
  };
}
function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const [activeTab, setActiveTab] = useState<AppTab>(() =>
    currentUser ? getFirstAccessibleTab(currentUser.role) : "dashboard",
  );
  const [depotName, setDepotName] = useState("Colombo Central Transit Depot");
  const [operatingHours, setOperatingHours] = useState("24/7 operations");
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  const [routes, setRoutes] = useState<Route[]>([]);
  const [routesLoading, setRoutesLoading] = useState(false);
  const [routesError, setRoutesError] = useState("");
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [driversLoading, setDriversLoading] = useState(false);
  const [driversError, setDriversError] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(false);
  const [vehiclesError, setVehiclesError] = useState("");

  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [schedulesLoading, setSchedulesLoading] = useState(false);
  const [schedulesError, setSchedulesError] = useState("");
  const [trips, setTrips] = useState<Trip[]>(initialTrips);
  const [fuelLogs, setFuelLogs] = useState<FuelLog[]>(initialFuelLogs);
  const [maintenance, setMaintenance] =
    useState<MaintenanceRecord[]>(initialMaintenance);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    let cancelled = false;

    async function loadDrivers() {
      setDriversLoading(true);
      setDriversError("");

      try {
        const data = await getDrivers();

        if (!cancelled) {
          setDrivers(data);
        }
      } catch (error) {
        if (!cancelled) {
          setDriversError(
            error instanceof Error ? error.message : "Failed to load drivers.",
          );
        }
      } finally {
        if (!cancelled) {
          setDriversLoading(false);
        }
      }
    }

    async function loadVehicles() {
      setVehiclesLoading(true);
      setVehiclesError("");

      try {
        const data = await getVehicles();

        if (!cancelled) {
          setVehicles(data);
        }
      } catch (error) {
        if (!cancelled) {
          setVehiclesError(
            error instanceof Error ? error.message : "Failed to load vehicles.",
          );
        }
      } finally {
        if (!cancelled) {
          setVehiclesLoading(false);
        }
      }
    }

    async function loadRoutes() {
      setRoutesLoading(true);
      setRoutesError("");
      try {
        const data = await getRoutes();
        if (!cancelled) setRoutes(data);
      } catch (error) {
        if (!cancelled)
          setRoutesError(
            error instanceof Error ? error.message : "Failed to load routes.",
          );
      } finally {
        if (!cancelled) setRoutesLoading(false);
      }
    }

    async function loadSchedules() {
      setSchedulesLoading(true);
      setSchedulesError("");
      try {
        const data = await getSchedules();
        if (!cancelled) setSchedules(data);
      } catch (error) {
        if (!cancelled)
          setSchedulesError(
            error instanceof Error
              ? error.message
              : "Failed to load schedules.",
          );
      } finally {
        if (!cancelled) setSchedulesLoading(false);
      }
    }

    async function loadTrips() {
      try {
        const response = await fetch("/api/operations/trips", {
          method: "GET",
          cache: "no-store",
        });
        const data = await response.json();
        if (
          !cancelled &&
          response.ok &&
          data.success &&
          Array.isArray(data.trips)
        ) {
          setTrips(data.trips);
        }
      } catch (error) {
        console.error("Failed to load trips:", error);
      }
    }

    async function loadFuelLogs() {
      try {
        const response = await fetch("/api/operations/fuel-logs", {
          method: "GET",
          cache: "no-store",
        });
        const data = await response.json();
        if (!cancelled && response.ok && data.success) {
          setFuelLogs(data.fuelLogs ?? []);
        }
      } catch (error) {
        console.error("Failed to load fuel logs:", error);
      }
    }

    async function loadMaintenance() {
      try {
        const response = await fetch("/api/operations/maintenance", {
          method: "GET",
          cache: "no-store",
        });
        const data = await response.json();
        if (!cancelled && response.ok && data.success) {
          setMaintenance(data.maintenance ?? []);
        }
      } catch (error) {
        console.error("Failed to load maintenance records:", error);
      }
    }

    loadDrivers();
    loadVehicles();
    loadRoutes();
    loadSchedules();
    loadTrips();
    loadFuelLogs();
    loadMaintenance();

    return () => {
      cancelled = true;
    };
  }, [currentUser]);

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
      setActiveTab(getFirstAccessibleTab(user.role));
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
      setActiveTab(getFirstAccessibleTab(user.role));
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
    try {
      const created = await createRoute(route);
      setRoutes((prev) => [created, ...prev]);
    } catch (error) {
      console.error("Failed to create route:", error);
      setRoutesError(
        error instanceof Error ? error.message : "Failed to create route.",
      );
    }
  };

  const handleUpdateRoute = async (
    routeId: string,
    updates: Partial<Route>,
  ) => {
    try {
      const updated = await updateRoute(routeId, updates);
      setRoutes((prev) =>
        prev.map((r) => (r.route_id === updated.route_id ? updated : r)),
      );
    } catch (error) {
      console.error("Failed to update route:", error);
      setRoutesError(
        error instanceof Error ? error.message : "Failed to update route.",
      );
    }
  };

  const handleDeleteRoute = async (routeId: string) => {
    const route = routes.find((item) => item.route_id === routeId);
    if (!route) return;
    const confirmed = window.confirm(`Delete route "${route.route_name}"?`);
    if (!confirmed) return;
    try {
      await deleteRoute(routeId);
      setRoutes((prev) => prev.filter((item) => item.route_id !== routeId));
    } catch (error) {
      console.error("Failed to delete route:", error);
      setRoutesError(
        error instanceof Error ? error.message : "Failed to delete route.",
      );
    }
  };

  const handleAddDriver = async (driver: Partial<Driver>) => {
    try {
      const created = await createDriver(driver);

      setDrivers((prev) => [created, ...prev]);
    } catch (error) {
      console.error("Failed to create driver:", error);

      setDriversError(
        error instanceof Error ? error.message : "Failed to create driver.",
      );
    }
  };

  const handleUpdateDriver = async (
    driverId: string,
    updates: Partial<Driver>,
  ) => {
    try {
      const updated = await updateDriver(driverId, updates);

      setDrivers((prev) =>
        prev.map((driver) =>
          driver.driver_id === updated.driver_id ? updated : driver,
        ),
      );
    } catch (error) {
      console.error("Failed to update driver:", error);

      setDriversError(
        error instanceof Error ? error.message : "Failed to update driver.",
      );
    }
  };

  const handleDeleteDriver = async (driverId: string) => {
    const driver = drivers.find((item) => item.driver_id === driverId);

    if (!driver) {
      return;
    }

    const confirmed = window.confirm(`Delete driver "${driver.name}"?`);

    if (!confirmed) {
      return;
    }

    try {
      await deleteDriver(driverId);

      setDrivers((prev) => prev.filter((item) => item.driver_id !== driverId));
    } catch (error) {
      console.error("Failed to delete driver:", error);

      setDriversError(
        error instanceof Error ? error.message : "Failed to delete driver.",
      );
    }
  };

  const handleAddVehicle = async (vehicle: Partial<Vehicle>) => {
    try {
      const created = await createVehicle(vehicle);

      setVehicles((prev) => [created, ...prev]);
    } catch (error) {
      console.error("Failed to create vehicle:", error);

      setVehiclesError(
        error instanceof Error ? error.message : "Failed to create vehicle.",
      );
    }
  };

  const handleUpdateVehicle = async (
    vehicleId: string,
    updates: Partial<Vehicle>,
  ) => {
    try {
      const updated = await updateVehicle(vehicleId, updates);

      setVehicles((prev) =>
        prev.map((vehicle) =>
          vehicle.vehicle_id === updated.vehicle_id ? updated : vehicle,
        ),
      );
    } catch (error) {
      console.error("Failed to update vehicle:", error);

      setVehiclesError(
        error instanceof Error ? error.message : "Failed to update vehicle.",
      );
    }
  };

  const handleDeleteVehicle = async (vehicleId: string) => {
    const vehicle = vehicles.find((item) => item.vehicle_id === vehicleId);

    if (!vehicle) {
      return;
    }

    const confirmed = window.confirm(
      `Delete vehicle "${vehicle.registration_number}"?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteVehicle(vehicleId);

      setVehicles((prev) =>
        prev.filter((item) => item.vehicle_id !== vehicleId),
      );
    } catch (error) {
      console.error("Failed to delete vehicle:", error);

      setVehiclesError(
        error instanceof Error ? error.message : "Failed to delete vehicle.",
      );
    }
  };

  const handleCreateSchedule = async (schedule: Partial<Schedule>) => {
    try {
      const created = await createSchedule(schedule);
      setSchedules((prev) => [created, ...prev]);
    } catch (error) {
      console.error("Failed to create schedule:", error);
      setSchedulesError(
        error instanceof Error ? error.message : "Failed to create schedule.",
      );
    }
  };

  const handleUpdateSchedule = async (
    scheduleId: string,
    updates: Partial<Schedule>,
  ) => {
    try {
      const updated = await updateSchedule(scheduleId, updates);
      setSchedules((prev) =>
        prev.map((s) => (s.schedule_id === updated.schedule_id ? updated : s)),
      );
    } catch (error) {
      console.error("Failed to update schedule:", error);
      setSchedulesError(
        error instanceof Error ? error.message : "Failed to update schedule.",
      );
    }
  };

  const handleDeleteSchedule = async (scheduleId: string) => {
    const schedule = schedules.find((item) => item.schedule_id === scheduleId);
    if (!schedule) return;
    const confirmed = window.confirm(`Delete this schedule?`);
    if (!confirmed) return;
    try {
      await deleteSchedule(scheduleId);
      setSchedules((prev) =>
        prev.filter((item) => item.schedule_id !== scheduleId),
      );
    } catch (error) {
      console.error("Failed to delete schedule:", error);
      setSchedulesError(
        error instanceof Error ? error.message : "Failed to delete schedule.",
      );
    }
  };

  const handleAIResolve = async (prompt: string) => {
    return `AI suggestion for "${prompt}": assign the nearest available vehicle and driver, then recheck the schedule window.`;
  };

  const handleStartTrip = async (tripId: string) => {
    try {
      const existingTrip = trips.find((trip) => trip.trip_id === tripId);
      const startTime = existingTrip?.start_time || new Date().toISOString();
      const response = await fetch(`/api/operations/trips/${tripId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "ACTIVE", start_time: startTime }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Failed to start trip.");
      }

      setTrips((prev) =>
        prev.map((trip) => (trip.trip_id === tripId ? data.trip : trip)),
      );
    } catch (error) {
      console.error("Failed to start trip:", error);
    }
  };

  const handleEndTrip = async (
    tripId: string,
    status: "Completed" | "Cancelled",
    remarks?: string,
  ) => {
    try {
      const response = await fetch(`/api/operations/trips/${tripId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: status.toUpperCase(),
          end_time: new Date().toISOString(),
          remarks,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Failed to complete trip.");
      }

      setTrips((prev) =>
        prev.map((trip) => (trip.trip_id === tripId ? data.trip : trip)),
      );
    } catch (error) {
      console.error("Failed to end trip:", error);
    }
  };

  const handleUpdateTripStatus = async (
    tripId: string,
    status: Trip["status"],
  ) => {
    try {
      const response = await fetch(`/api/operations/trips/${tripId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: status.toUpperCase() }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Failed to update trip status.");
      }

      setTrips((prev) =>
        prev.map((trip) => (trip.trip_id === tripId ? data.trip : trip)),
      );
    } catch (error) {
      console.error("Failed to update trip status:", error);
    }
  };

  const handleAddFuelLog = async (log: Partial<FuelLog>) => {
    try {
      const response = await fetch("/api/operations/fuel-logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(log),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Failed to add fuel log.");
      }

      setFuelLogs((prev) => [data.fuelLog, ...prev]);
    } catch (error) {
      console.error("Failed to add fuel log:", error);
    }
  };

  const handleAddMaintenance = async (record: Partial<MaintenanceRecord>) => {
    try {
      const response = await fetch("/api/operations/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Failed to add maintenance record.");
      }

      setMaintenance((prev) => [data.maintenance, ...prev]);
    } catch (error) {
      console.error("Failed to add maintenance record:", error);
    }
  };

  const handleUpdateMaintenanceStatus = async (
    recordId: string,
    status: MaintenanceRecord["status"],
  ) => {
    try {
      const response = await fetch(`/api/operations/maintenance/${recordId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Failed to update maintenance status.");
      }

      setMaintenance((prev) =>
        prev.map((record) =>
          record.maintenance_id === recordId ? { ...record, status } : record,
        ),
      );
    } catch (error) {
      console.error("Failed to update maintenance status:", error);
    }
  };

  const handleSaveSettings = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setSaveSuccessMsg("Depot settings saved successfully.");
    window.setTimeout(() => setSaveSuccessMsg(""), 2500);
  };

  if (!mounted) {
    return null;
  }

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

        <div className="mx-auto  flex min-h-screen max-w-6xl items-center px-4 py-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
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
              {formatRoleLabel(currentUser.role)} Account
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
            {canAccessTab(currentUser.role, "dashboard") && (
              <button
                type="button"
                onClick={() => setActiveTab("dashboard")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "dashboard" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </button>
            )}
            {canAccessTab(currentUser.role, "routes") && (
              <button
                type="button"
                onClick={() => setActiveTab("routes")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "routes" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <Calendar className="h-4 w-4" /> Routes
              </button>
            )}
            {canAccessTab(currentUser.role, "depots") && (
              <button
                type="button"
                onClick={() => setActiveTab("depots")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${
                  activeTab === "depots"
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600"
                }`}
              >
                <Building className="h-4 w-4" />
                Depot Management
              </button>
            )}

            {canAccessTab(currentUser.role, "users") && (
              <button
                type="button"
                onClick={() => setActiveTab("users")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${
                  activeTab === "users"
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600"
                }`}
              >
                <Users className="h-4 w-4" />
                User Management
              </button>
            )}
            {canAccessTab(currentUser.role, "drivers") && (
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
            {canAccessTab(currentUser.role, "schedules") && (
              <button
                type="button"
                onClick={() => setActiveTab("schedules")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "schedules" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <Calendar className="h-4 w-4" /> Schedules
              </button>
            )}
            {canAccessTab(currentUser.role, "operations") && (
              <button
                type="button"
                onClick={() => setActiveTab("operations")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "operations" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <Zap className="h-4 w-4" /> Operations
              </button>
            )}
            {canAccessTab(currentUser.role, "reports") && (
              <button
                type="button"
                onClick={() => setActiveTab("reports")}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 ${activeTab === "reports" ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "text-slate-600"}`}
              >
                <FileText className="h-4 w-4" /> Reports
              </button>
            )}
          </div>

          {canAccessTab(currentUser.role, "settings") && (
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
