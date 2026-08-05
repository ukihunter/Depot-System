import React from "react";
import { Route, Driver, Vehicle, Schedule, FuelLog, Trip } from "../type";
import {
  BarChart,
  Navigation,
  Users,
  Bus,
  Zap,
  Clock,
  ShieldCheck,
  Droplet,
  PenTool as Tool,
  FileText,
  AlertCircle,
} from "lucide-react";

interface DashboardProps {
  routes: Route[];
  drivers: Driver[];
  vehicles: Vehicle[];
  schedules: Schedule[];
  fuelLogs: FuelLog[];
  trips: Trip[];
  onSetTab: (tab: any) => void;
}

export default function Dashboard({
  routes,
  drivers,
  vehicles,
  schedules,
  fuelLogs,
  trips,
  onSetTab,
}: DashboardProps) {
  // Compute key counters
  const totalRoutes = routes.length;
  const totalDrivers = drivers.length;
  const totalVehicles = vehicles.length;
  const totalTrips = trips.length;

  const activeTrips = trips.filter((t) => t.status === "Active").length;
  const delayedTrips = trips.filter((t) => t.status === "Delayed").length;

  const availableVehicles = vehicles.filter(
    (v) => v.status === "Available",
  ).length;
  const availableDrivers = drivers.filter((d) => d.status === "Active").length;

  // Fuel data summary
  const totalFuelLiters = fuelLogs.reduce((sum, f) => sum + f.liters, 0);
  const totalFuelCost = fuelLogs.reduce((sum, f) => sum + f.cost, 0);

  // Simple dataset: Fuel consumed per vehicle bar-graph metrics
  const maxFuelVal = Math.max(...fuelLogs.map((f) => f.liters), 50);

  return (
    <div id="dashboard-root" className="space-y-6 animate-fade-in">
      {/* 2x3 statistics bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {/* Total Routes card */}
        <div
          id="stat-card-routes"
          onClick={() => onSetTab("routes")}
          className="glass-panel p-5 rounded-2xl shadow-xs hover-lift cursor-pointer space-y-2 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider leading-none">
              Total Routes
            </span>
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500 shadow-inner">
              <Navigation className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
              {totalRoutes}
            </span>
            <span className="block text-[9px] text-slate-400 font-medium">
              Configured tracks
            </span>
          </div>
        </div>

        {/* Total Drivers card */}
        <div
          id="stat-card-drivers"
          onClick={() => onSetTab("drivers")}
          className="glass-panel p-5 rounded-2xl shadow-xs hover-lift cursor-pointer space-y-2 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider leading-none">
              Depot Drivers
            </span>
            <div className="p-2 bg-sky-500/10 rounded-xl text-sky-500 shadow-inner">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
              {totalDrivers}
            </span>
            <span className="block text-[9px] text-emerald-605 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {availableDrivers} Available
            </span>
          </div>
        </div>

        {/* Total Busses card */}
        <div
          id="stat-card-vehicles"
          onClick={() => onSetTab("vehicles")}
          className="glass-panel p-5 rounded-2xl shadow-xs hover-lift cursor-pointer space-y-2 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider leading-none">
              Total Fleet
            </span>
            <div className="p-2 bg-teal-500/10 rounded-xl text-teal-500 shadow-inner">
              <Bus className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
              {totalVehicles}
            </span>
            <span className="block text-[9px] text-emerald-650 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {availableVehicles} Active Units
            </span>
          </div>
        </div>

        {/* Total Scheduled today */}
        <div
          id="stat-card-trips"
          onClick={() => onSetTab("schedules")}
          className="glass-panel p-5 rounded-2xl shadow-xs hover-lift cursor-pointer space-y-2 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider leading-none">
              Total Shifts
            </span>
            <div className="p-2 bg-purple-500/10 rounded-xl text-purple-500 shadow-inner">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
              {totalTrips}
            </span>
            <span className="block text-[9px] text-slate-400 font-medium">
              Loaded schedules
            </span>
          </div>
        </div>

        {/* Ongoing Dispatches status */}
        <div
          id="stat-card-active"
          onClick={() => onSetTab("operations")}
          className="bg-gradient-to-br from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-600 p-5 rounded-2xl shadow-xs hover-lift cursor-pointer text-white space-y-2 flex flex-col justify-between relative overflow-hidden group shadow-blue-500/10"
        >
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-all"></div>
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] text-blue-100 font-mono uppercase font-bold tracking-wider leading-none">
              Trips Dispatched
            </span>
            <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white shadow-inner">
              <Zap className="w-4 h-4 animate-bounce" />
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-2xl font-black text-white font-mono tracking-tight">
              {activeTrips}
            </span>
            <span className="block text-[9px] text-blue-100 font-semibold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>{" "}
              Operating Live
            </span>
          </div>
        </div>

        {/* Delayed warnings */}
        <div
          id="stat-card-delayed"
          onClick={() => onSetTab("operations")}
          className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 p-5 rounded-2xl shadow-xs hover-lift cursor-pointer text-white space-y-2 flex flex-col justify-between relative overflow-hidden group shadow-amber-500/10"
        >
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-all"></div>
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] text-amber-50 font-mono uppercase font-bold tracking-wider leading-none">
              Delayed Alarms
            </span>
            <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white shadow-inner">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-2xl font-black text-white font-mono tracking-tight">
              {delayedTrips}
            </span>
            <span className="block text-[9px] text-amber-50 mt-0.5">
              Overdue on coordinate
            </span>
          </div>
        </div>
      </div>

      {/* Center Layout split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Vector graph: Fuel refuel trends */}
        <div className="lg:col-span-8 glass-panel rounded-2xl p-6 shadow-sm hover-lift flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-sm bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Fuel Consumption Metric Audit
            </h3>
            <p className="text-xs text-slate-400">
              Total volume in liters consumed per logged vehicle session
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {fuelLogs.map((f, i) => {
              const bus = vehicles.find((v) => v.vehicle_id === f.vehicle_id);
              const pct = (f.liters / maxFuelVal) * 100;
              return (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-slate-800">
                      {bus?.registration_number || f.vehicle_id} (
                      {bus?.fuel_type})
                    </span>
                    <span className="font-mono text-slate-500 font-semibold">
                      {f.liters} L (LKR {f.cost})
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-900/60 h-3 rounded-md overflow-hidden flex shadow-inner">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-650 h-full rounded-md transition-all duration-300 shimmer-bar"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-100 dark:border-slate-850 pt-4 mt-6 flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>
              Aggregated Depot Fuel Volume:{" "}
              <strong className="text-slate-800">{totalFuelLiters} L</strong>
            </span>
            <span>
              Total Accounting Cost:{" "}
              <strong className="text-blue-600 font-semibold">
                LKR {totalFuelCost}
              </strong>
            </span>
          </div>
        </div>

        {/* Real-time Status and Availability overview */}
        <div className="lg:col-span-4 glass-panel rounded-2xl p-6 shadow-sm hover-lift space-y-5">
          <div>
            <h3 className="font-bold text-slate-900 text-sm bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Live Depot Board status
            </h3>
            <p className="text-xs text-slate-400">
              Resource levels checked June 14, 2026
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Drivers */}
            <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="space-y-1">
                <span className="font-bold text-slate-800 block">
                  Available Driver Rosters
                </span>
                <span className="text-[10px] text-slate-400 block">
                  {availableDrivers} of {totalDrivers} drivers active
                </span>
              </div>
              <span className="text-xl font-mono font-black text-slate-900 bg-white/70 px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-xs">
                {totalDrivers > 0
                  ? Math.round((availableDrivers / totalDrivers) * 100)
                  : 0}
                %
              </span>
            </div>

            {/* Fleet */}
            <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="space-y-1">
                <span className="font-bold text-slate-800 block">
                  Fleet dispatch readiness
                </span>
                <span className="text-[10px] text-slate-400 block">
                  {availableVehicles} of {totalVehicles} units operating
                </span>
              </div>
              <span className="text-xl font-mono font-black text-slate-900 bg-white/70 px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-xs">
                {totalVehicles > 0
                  ? Math.round((availableVehicles / totalVehicles) * 100)
                  : 0}
                %
              </span>
            </div>

            {/* Warnings */}
            <div className="p-4 bg-amber-50/40 border border-amber-100 text-amber-900 rounded-2xl flex items-start gap-2.5 shadow-sm">
              <AlertCircle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[11px]">
                  Automatic License Gates
                </span>
                <span className="text-[10px] text-amber-700 leading-normal block mt-0.5 font-medium">
                  1 driver (Mohamed Rizan) license has expired. The scheduling
                  system will automatically block shift associations for him.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
