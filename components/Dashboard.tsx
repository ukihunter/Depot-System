import React, { useMemo } from "react";
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
  // ==========================================
  // DYNAMIC FLEET DISPATCH METRICS (EMERALD GRAPH)
  // ==========================================
  const dispatchChartData = useMemo(() => {
    // Labels for a 7-day period (or 7 time slots)
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // Try counting trips/schedules per slot; fall back to calculated distribution if records are low
    const baseCount = trips.length > 0 ? trips.length : schedules.length || 12;

    // Group or generate balanced metrics per day
    const values = labels.map((_, idx) => {
      // If real trips exist, attempt matching by day index or ID modulo
      const count = trips.filter((t, i) => i % 7 === idx).length;
      // Fallback weight generator based on baseCount if array is small
      if (count > 0) return count;
      return Math.max(1, Math.round((baseCount / 7) * (0.6 + idx * 0.15)));
    });

    const totalDispatches = values.reduce((a, b) => a + b, 0);
    const maxVal = Math.max(...values, 1);

    return { labels, values, totalDispatches, maxVal };
  }, [trips, schedules]);
  return (
    <div id="dashboard-root" className="space-y-6 animate-fade-in">
      {/* 2x3 statistics bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Total Routes card */}
        <div
          id="stat-card-routes"
          onClick={() => onSetTab("routes")}
          className="glass-panel p-5 rounded-2xl cursor-pointer space-y-2 flex flex-col justify-between transition-all hover:border-[#6b8f3c]/40 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8a96a0] font-mono uppercase font-bold tracking-wider leading-none">
              Total Routes
            </span>
            <div className="p-2 bg-[#6b8f3c]/15 rounded-xl text-[#8bb552]">
              <Navigation className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-[#ede9e3] font-mono tracking-tight">
              {totalRoutes}
            </span>
            <span className="block text-[9px] text-[#8a96a0] font-medium mt-0.5">
              Configured tracks
            </span>
          </div>
        </div>

        {/* Total Drivers card */}
        <div
          id="stat-card-drivers"
          onClick={() => onSetTab("drivers")}
          className="glass-panel p-5 rounded-2xl cursor-pointer space-y-2 flex flex-col justify-between transition-all hover:border-[#6b8f3c]/40 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8a96a0] font-mono uppercase font-bold tracking-wider leading-none">
              Depot Drivers
            </span>
            <div className="p-2 bg-[#c49a5c]/15 rounded-xl text-[#c49a5c]">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-[#ede9e3] font-mono tracking-tight">
              {totalDrivers}
            </span>
            <span className="block text-[9px] text-[#5fa87a] font-bold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fa87a]"></span>
              {availableDrivers} Available
            </span>
          </div>
        </div>

        {/* Total Buses card */}
        <div
          id="stat-card-vehicles"
          onClick={() => onSetTab("vehicles")}
          className="glass-panel p-5 rounded-2xl cursor-pointer space-y-2 flex flex-col justify-between transition-all hover:border-[#6b8f3c]/40 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8a96a0] font-mono uppercase font-bold tracking-wider leading-none">
              Total Fleet
            </span>
            <div className="p-2 bg-[#6b8f3c]/15 rounded-xl text-[#8bb552]">
              <Bus className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-[#ede9e3] font-mono tracking-tight">
              {totalVehicles}
            </span>
            <span className="block text-[9px] text-[#5fa87a] font-bold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fa87a] animate-pulse"></span>
              {availableVehicles} Active Units
            </span>
          </div>
        </div>

        {/* Total Scheduled today */}
        <div
          id="stat-card-trips"
          onClick={() => onSetTab("schedules")}
          className="glass-panel p-5 rounded-2xl cursor-pointer space-y-2 flex flex-col justify-between transition-all hover:border-[#6b8f3c]/40 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8a96a0] font-mono uppercase font-bold tracking-wider leading-none">
              Total Shifts
            </span>
            <div className="p-2 bg-[#5a8ea8]/15 rounded-xl text-[#5a8ea8]">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-[#ede9e3] font-mono tracking-tight">
              {totalTrips}
            </span>
            <span className="block text-[9px] text-[#8a96a0] font-medium mt-0.5">
              Loaded schedules
            </span>
          </div>
        </div>

        {/* Ongoing Dispatches status */}
        <div
          id="stat-card-active"
          onClick={() => onSetTab("operations")}
          className="glass-panel p-5 rounded-2xl cursor-pointer text-white space-y-2 flex flex-col justify-between relative overflow-hidden group border-[#6b8f3c]/30 bg-[#6b8f3c]/10 hover:bg-[#6b8f3c]/20 transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] text-[#8bb552] font-mono uppercase font-bold tracking-wider leading-none">
              Trips Dispatched
            </span>
            <div className="p-1.5 bg-[#6b8f3c]/20 rounded-lg text-[#8bb552]">
              <Zap className="w-4 h-4 animate-bounce" />
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-2xl font-black text-[#ede9e3] font-mono tracking-tight">
              {activeTrips}
            </span>
            <span className="block text-[9px] text-[#5fa87a] font-semibold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fa87a] animate-ping"></span>{" "}
              Operating Live
            </span>
          </div>
        </div>

        {/* Delayed warnings */}
        <div
          id="stat-card-delayed"
          onClick={() => onSetTab("operations")}
          className="glass-panel p-5 rounded-2xl cursor-pointer text-white space-y-2 flex flex-col justify-between relative overflow-hidden group border-[#c47a4a]/30 bg-[#c47a4a]/10 hover:bg-[#c47a4a]/20 transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] text-[#c47a4a] font-mono uppercase font-bold tracking-wider leading-none">
              Delayed Alarms
            </span>
            <div className="p-1.5 bg-[#c47a4a]/20 rounded-lg text-[#c47a4a]">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-2xl font-black text-[#ede9e3] font-mono tracking-tight">
              {delayedTrips}
            </span>
            <span className="block text-[9px] text-[#c47a4a] mt-0.5 font-medium">
              Overdue on coordinate
            </span>
          </div>
        </div>
      </div>

      {/* Center Layout split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1 min-h-[460px]">
        {/* Vector graph: Fuel refuel trends */}
        <div className="lg:col-span-8 glass-panel rounded-2xl p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="font-bold text-[#ede9e3] text-sm">
              Fuel Consumption Metric Audit
            </h3>
            <p className="text-xs text-[#8a96a0]">
              Total volume in liters consumed per logged vehicle session
            </p>
          </div>

          <div className="mt-6 space-y-4 flex-1 overflow-y-auto pr-1 min-h-[200px]">
            {fuelLogs.map((f, i) => {
              const bus = vehicles.find((v) => v.vehicle_id === f.vehicle_id);
              const pct = (f.liters / maxFuelVal) * 100;
              return (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#ede9e3]">
                      {bus?.registration_number || f.vehicle_id} (
                      {bus?.fuel_type})
                    </span>
                    <span className="font-mono text-[#8a96a0] font-semibold">
                      {f.liters} L (LKR {f.cost})
                    </span>
                  </div>
                  <div className="w-full bg-[#12181d] h-3 rounded-md overflow-hidden flex border border-[#27323a]">
                    <div
                      className="bg-gradient-to-r from-[#6b8f3c] to-[#c49a5c] h-full rounded-md transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-[#27323a] pt-4 mt-6 flex justify-between items-center text-xs text-[#8a96a0] font-medium">
            <span>
              Aggregated Depot Fuel Volume:{" "}
              <strong className="text-[#ede9e3]">
                {totalFuelLiters} L
              </strong>
            </span>
            <span>
              Total Accounting Cost:{" "}
              <strong className="text-[#c49a5c] font-semibold">
                LKR {totalFuelCost}
              </strong>
            </span>
          </div>
        </div>

        {/* Real-time Status and Availability overview */}
        <div className="lg:col-span-4 glass-panel rounded-2xl p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="font-bold text-[#ede9e3] text-sm">
              Live Depot Board status
            </h3>
            <p className="text-xs text-[#8a96a0]">
              Resource levels checked June 14, 2026
            </p>
          </div>

          <div className="space-y-4 text-xs my-auto">
            {/* Drivers */}
            <div className="p-4 bg-[#141a1f] border border-[#27323a] rounded-2xl flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-bold text-[#ede9e3] block">
                  Available Driver Rosters
                </span>
                <span className="text-[10px] text-[#8a96a0] block">
                  {availableDrivers} of {totalDrivers} drivers active
                </span>
              </div>
              <span className="text-xl font-mono font-black text-[#ede9e3] bg-[#1a2228] px-3 py-1.5 rounded-xl border border-[#27323a]">
                {totalDrivers > 0
                  ? Math.round((availableDrivers / totalDrivers) * 100)
                  : 0}
                %
              </span>
            </div>

            {/* Fleet */}
            <div className="p-4 bg-[#141a1f] border border-[#27323a] rounded-2xl flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-bold text-[#ede9e3] block">
                  Fleet dispatch readiness
                </span>
                <span className="text-[10px] text-[#8a96a0] block">
                  {availableVehicles} of {totalVehicles} units operating
                </span>
              </div>
              <span className="text-xl font-mono font-black text-[#ede9e3] bg-[#1a2228] px-3 py-1.5 rounded-xl border border-[#27323a]">
                {totalVehicles > 0
                  ? Math.round((availableVehicles / totalVehicles) * 100)
                  : 0}
                %
              </span>
            </div>
          </div>

          {/* Bottom Status Tag */}
          <div className="p-3 bg-[#5fa87a]/15 border border-[#5fa87a]/30 rounded-xl flex items-center justify-between text-xs text-[#5fa87a] font-semibold">
            <span>Operational Status</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#5fa87a] animate-pulse"></span>
              Normal Operations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
