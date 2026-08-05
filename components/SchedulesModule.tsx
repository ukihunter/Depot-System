import React, { useState } from "react";
import { Schedule, Driver, Vehicle, Route } from "../type";
import {
  Plus,
  Clock,
  Search,
  ShieldAlert,
  Sparkles,
  AlertCircle,
  RefreshCw,
  Layers,
  Calendar,
  User,
  Bus,
  MapPin,
  Check,
  Ban,
  X,
  Trash2,
} from "lucide-react";

interface SchedulesModuleProps {
  schedules: Schedule[];
  drivers: Driver[];
  vehicles: Vehicle[];
  routes: Route[];
  onCreateSchedule: (s: Partial<Schedule>) => Promise<any>;
  onUpdateSchedule: (
    scheduleId: string,
    updates: Partial<Schedule>,
  ) => Promise<any>;
  onDeleteSchedule: (scheduleId: string) => Promise<any>;
  onAIResolve: (prompt: string) => Promise<string>;
  userRole: string;
}

export default function SchedulesModule({
  schedules,
  drivers,
  vehicles,
  routes,
  onCreateSchedule,
  onUpdateSchedule,
  onDeleteSchedule,
  onAIResolve,
  userRole,
}: SchedulesModuleProps) {
  const [filterDate, setFilterDate] = useState("2026-06-15"); // default preview date
  const [timelineMode, setTimelineMode] = useState<"Daily" | "Weekly" | "All">(
    "Daily",
  );
  const [showModal, setShowModal] = useState(false);

  // Form states
  const [selectedRouteId, setSelectedRouteId] = useState("");
  const [selectedDriverId, setSelectedDriverId] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [depTime, setDepTime] = useState("08:00");
  const [arrTime, setArrTime] = useState("09:30");
  const [sDate, setSDate] = useState("2026-06-15");

  // Conflict state
  const [conflicts, setConflicts] = useState<string[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState("");

  const canWrite = userRole === "Admin" || userRole === "Supervisor";

  // Helper: check overlap between two time slots [A, B] and [C, D]
  const timesOverlap = (
    startA: string,
    endA: string,
    startB: string,
    endB: string,
  ) => {
    return startA < endB && endA > startB;
  };

  const validateSchedule = (
    routeId: string,
    driverId: string,
    vehicleId: string,
    departure: string,
    arrival: string,
    date: string,
  ): string[] => {
    const errorLogs: string[] = [];

    if (
      !routeId ||
      !driverId ||
      !vehicleId ||
      !departure ||
      !arrival ||
      !date
    ) {
      errorLogs.push("All coordination fields must be satisfied.");
      return errorLogs;
    }

    if (departure >= arrival) {
      errorLogs.push("Departure time must precede arrival time.");
    }

    // 1. Driver license expired validation
    const driver = drivers.find((d) => d.driver_id === driverId);
    if (driver) {
      const expDate = new Date(driver.license_expiry);
      const schDate = new Date(date);
      if (expDate < schDate) {
        errorLogs.push(
          `Driver security gate failed: ${driver.name}'s License expired on ${driver.license_expiry}.`,
        );
      }
    }

    // 2. Vehicle under maintenance validation
    const bus = vehicles.find((v) => v.vehicle_id === vehicleId);
    if (bus && bus.status === "Maintenance") {
      errorLogs.push(
        `Vehicle dispatch failed: Bus ${bus.registration_number} is flagged under 'Maintenance'.`,
      );
    }

    // 3. Driver overlapping schedule conflicts
    const driverOverlaps = schedules.filter(
      (s) =>
        s.driver_id === driverId &&
        s.schedule_date === date &&
        s.status !== "Cancelled" &&
        timesOverlap(s.departure_time, s.arrival_time, departure, arrival),
    );
    if (driverOverlaps.length > 0) {
      driverOverlaps.forEach((overlap) => {
        const rName =
          routes.find((r) => r.route_id === overlap.route_id)?.route_name ||
          overlap.route_id;
        errorLogs.push(
          `Timeline overlap: Driver ${driver?.name} is already assigned on ${rName} between ${overlap.departure_time} - ${overlap.arrival_time}.`,
        );
      });
    }

    // 4. Vehicle overlapping schedule conflicts
    const vehicleOverlaps = schedules.filter(
      (s) =>
        s.vehicle_id === vehicleId &&
        s.schedule_date === date &&
        s.status !== "Cancelled" &&
        timesOverlap(s.departure_time, s.arrival_time, departure, arrival),
    );
    if (vehicleOverlaps.length > 0) {
      vehicleOverlaps.forEach((overlap) => {
        const rName =
          routes.find((r) => r.route_id === overlap.route_id)?.route_name ||
          overlap.route_id;
        errorLogs.push(
          `Fleet overlap: Bus ${bus?.registration_number} is already assigned on ${rName} between ${overlap.departure_time} - ${overlap.arrival_time}.`,
        );
      });
    }

    return errorLogs;
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const rId =
      selectedRouteId || (routes.length > 0 ? routes[0].route_id : "");
    const dId =
      selectedDriverId || (drivers.length > 0 ? drivers[0].driver_id : "");
    const vId =
      selectedVehicleId || (vehicles.length > 0 ? vehicles[0].vehicle_id : "");

    const detected = validateSchedule(rId, dId, vId, depTime, arrTime, sDate);
    if (detected.length > 0) {
      setConflicts(detected);
      return;
    }

    setConflicts([]);
    await onCreateSchedule({
      route_id: rId,
      driver_id: dId,
      vehicle_id: vId,
      departure_time: depTime,
      arrival_time: arrTime,
      schedule_date: sDate,
      status: "Scheduled",
    });
    setShowModal(false);
  };

  const triggerAIRecommendation = async () => {
    setAiLoading(true);
    setAiRecommendation("");
    try {
      const driverObj = drivers.find((d) => d.driver_id === selectedDriverId);
      const vehicleObj = vehicles.find(
        (v) => v.vehicle_id === selectedVehicleId,
      );
      const routeObj = routes.find((r) => r.route_id === selectedRouteId);

      const prompt = `Review the following public transit scheduling assignment in depot:
- Requested Date: ${sDate}
- Planned Timeframe: ${depTime} to ${arrTime}
- Route: ${routeObj?.route_name || "Unknown"}
- Assigned Driver: ${driverObj?.name || "Unknown"} (Status: ${driverObj?.status})
- Assigned Bus: ${vehicleObj?.registration_number || "Unknown"} (Status: ${vehicleObj?.status})

Current Conflicts Triggered: 
${conflicts.map((c, i) => `${i + 1}. ${c}`).join("\n")}

Provide a short, 2-sentence actionable operational recommendation to resolve these conflicts. Be brief, suggesting alternative drivers, buses, or slightly adjusted timeframes.`;

      const advice = await onAIResolve(prompt);
      setAiRecommendation(advice);
    } catch (err) {
      setAiRecommendation(
        "AI agent suggestions are cached. Alternate Recommendation: Re-assign Driver to rest shift or shift departure by +90 minutes.",
      );
    } finally {
      setAiLoading(false);
    }
  };

  const handleCancelTrip = async (schId: string) => {
    await onUpdateSchedule(schId, { status: "Cancelled" });
  };

  const handleStartTrip = async (schId: string) => {
    await onUpdateSchedule(schId, { status: "Active" });
  };

  const filteredSchedules = schedules.filter((s) => {
    if (timelineMode === "Daily") {
      return s.schedule_date === filterDate;
    } else if (timelineMode === "Weekly") {
      // simplified filter: matches same month & within 7 days
      const sDay = new Date(s.schedule_date).getDate();
      const fDay = new Date(filterDate).getDate();
      return (
        Math.abs(sDay - fDay) <= 7 &&
        s.schedule_date.substring(0, 7) === filterDate.substring(0, 7)
      );
    }
    return true;
  });

  return (
    <div id="schedules-module-root" className="space-y-6">
      {/* Filtering and Mode strip */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex border border-slate-200 rounded-lg overflow-hidden bg-slate-50 p-0.5">
            <button
              id="btn-timeline-daily"
              onClick={() => setTimelineMode("Daily")}
              className={`px-3 py-1 text-xs font-semibold rounded-md ${
                timelineMode === "Daily"
                  ? "bg-white text-slate-800 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Daily Timetable
            </button>
            <button
              id="btn-timeline-weekly"
              onClick={() => setTimelineMode("Weekly")}
              className={`px-3 py-1 text-xs font-semibold rounded-md ${
                timelineMode === "Weekly"
                  ? "bg-white text-slate-800 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Weekly Shift view
            </button>
            <button
              id="btn-timeline-all"
              onClick={() => setTimelineMode("All")}
              className={`px-3 py-1 text-xs font-semibold rounded-md ${
                timelineMode === "All"
                  ? "bg-white text-slate-800 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              All Shifts Log
            </button>
          </div>

          {timelineMode !== "All" && (
            <div className="flex items-center gap-1.5 text-xs text-slate-650">
              <Calendar className="w-4 h-4 text-slate-400" />
              <input
                id="input-filter-date"
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono font-bold"
              />
            </div>
          )}
        </div>

        {canWrite && (
          <button
            id="btn-add-schedule"
            onClick={() => {
              setConflicts([]);
              setAiRecommendation("");
              if (routes.length > 0) setSelectedRouteId(routes[0].route_id);
              if (drivers.length > 0) setSelectedDriverId(drivers[0].driver_id);
              if (vehicles.length > 0)
                setSelectedVehicleId(vehicles[0].vehicle_id);
              setShowModal(true);
            }}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            Assign Route Shift
          </button>
        )}
      </div>

      {/* Main Timetable grid display */}
      <div
        className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
        id="timetable-scroller"
      >
        <div className="max-w-full overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/75 text-slate-500 font-bold border-b border-slate-200 font-mono text-[11px]">
                <th className="p-4">TIME FRAMING</th>
                <th className="p-4">ROUTE</th>
                <th className="p-4">ASSIGNED DRIVER</th>
                <th className="p-4">FLEET BUS</th>
                <th className="p-4">DATE</th>
                <th className="p-4 text-center">DISPATCH STATUS</th>
                <th className="p-4 text-right">CONTROLS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              {filteredSchedules.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="p-12 text-center text-slate-500 font-semibold"
                  >
                    No timetabled shifts are active for this range.
                  </td>
                </tr>
              ) : (
                filteredSchedules.map((s) => {
                  const driver = drivers.find(
                    (d) => d.driver_id === s.driver_id,
                  );
                  const bus = vehicles.find(
                    (v) => v.vehicle_id === s.vehicle_id,
                  );
                  const route = routes.find((r) => r.route_id === s.route_id);

                  return (
                    <tr
                      key={s.schedule_id}
                      id={`row-schedule-${s.schedule_id}`}
                      className="hover:bg-slate-50/40"
                    >
                      <td className="p-4 font-bold font-mono text-slate-800">
                        <div className="flex items-center gap-1.5 text-blue-700 bg-blue-50 border border-blue-100/55 px-2.5 py-1.5 rounded-lg w-max shadow-sm">
                          <Clock className="w-3.5 h-3.5" />
                          <span>
                            {s.departure_time} - {s.arrival_time}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-850 block">
                            {route?.route_name || "Unmapped"}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono block">
                            ID: {s.route_id}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-0.5">
                          <span className="font-semibold text-slate-800 flex items-center gap-1 text-[11px]">
                            <User className="w-3 h-3 text-slate-400" />
                            {driver?.name || "Suspended File"}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono block">
                            D/L: {driver?.license_number}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 font-mono font-semibold text-slate-700">
                        <div className="space-y-0.5">
                          <span className="text-slate-850 flex items-center gap-1 font-bold">
                            <Bus className="w-3.5 h-3.5 text-slate-400" />
                            {bus?.registration_number || "No Assignment"}
                          </span>
                          <span className="text-[9px] text-blue-600 bg-blue-50 border px-1 rounded-sm block w-max font-bold">
                            {bus?.vehicle_type}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 font-mono text-slate-500 font-semibold">
                        {s.schedule_date}
                      </td>
                      <td className="p-4 text-center">
                        <span
                          className={`text-[10px] px-2.5 py-1 rounded-full font-extrabold uppercase ${
                            s.status === "Scheduled"
                              ? "bg-slate-100 text-slate-600"
                              : s.status === "Active"
                                ? "bg-blue-100 text-blue-800 animate-pulse"
                                : s.status === "Completed"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : s.status === "Delayed"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-red-100 text-red-800"
                          }`}
                        >
                          {s.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        {canWrite ? (
                          <div className="flex items-center justify-end gap-1.5">
                            {s.status === "Scheduled" && (
                              <>
                                <button
                                  id={`btn-start-${s.schedule_id}`}
                                  onClick={() => handleStartTrip(s.schedule_id)}
                                  className="bg-emerald-550 text-white hover:bg-emerald-600 font-bold px-2 py-1.5 rounded-lg text-[10px] shadow-xs flex items-center gap-0.5 cursor-pointer"
                                >
                                  Dispatch
                                </button>
                                <button
                                  id={`btn-cancel-${s.schedule_id}`}
                                  onClick={() =>
                                    handleCancelTrip(s.schedule_id)
                                  }
                                  className="bg-white hover:bg-red-50 text-red-650 border border-red-200 font-semibold px-2 py-1.5 rounded-lg text-[10px] cursor-pointer"
                                >
                                  Cancel
                                </button>
                              </>
                            )}
                            {s.status === "Active" && (
                              <span className="text-[10px] text-emerald-600 font-extrabold animate-pulse">
                                DISPATCHED
                              </span>
                            )}
                            {s.status === "Completed" && (
                              <span className="text-[10px] text-slate-400 font-semibold">
                                Shift Completed
                              </span>
                            )}
                            {s.status === "Cancelled" && (
                              <span className="text-[10px] text-red-400 line-through">
                                Cancelled
                              </span>
                            )}
                            <button
                              id={`btn-del-shift-${s.schedule_id}`}
                              onClick={() => onDeleteSchedule(s.schedule_id)}
                              className="bg-slate-50 hover:bg-red-50 text-slate-350 hover:text-red-600 p-1.5 rounded-lg border border-slate-200 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-mono font-semibold">
                            Read-Only
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Timetable Configuration modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in"
          id="modal-container-schedule"
        >
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-xl shadow-xl overflow-hidden flex flex-col p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-bold text-slate-950 text-base">
                Assign Route Shift & Timeline Check
              </h3>
              <button
                id="btn-close-schedule-modal"
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-slate-150 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={handleCreate}
              className="space-y-4 text-xs font-medium"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Target Route
                  </label>
                  <select
                    id="schedule-form-route"
                    value={selectedRouteId}
                    onChange={(e) => setSelectedRouteId(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold"
                  >
                    {routes.map((r) => (
                      <option key={r.route_id} value={r.route_id}>
                        {r.route_name} ({r.distance} KM)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Shift Date
                  </label>
                  <input
                    id="schedule-form-date"
                    type="date"
                    value={sDate}
                    onChange={(e) => setSDate(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Assigned Driver
                  </label>
                  <select
                    id="schedule-form-driver"
                    value={selectedDriverId}
                    onChange={(e) => setSelectedDriverId(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold"
                  >
                    {drivers.map((d) => (
                      <option key={d.driver_id} value={d.driver_id}>
                        {d.name} (Exp: {d.license_expiry})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Assigned Fleet Bus
                  </label>
                  <select
                    id="schedule-form-vehicle"
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold"
                  >
                    {vehicles.map((v) => (
                      <option key={v.vehicle_id} value={v.vehicle_id}>
                        {v.registration_number} ({v.vehicle_type} - {v.status})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Planned Departure Time
                  </label>
                  <input
                    id="schedule-form-deptime"
                    type="time"
                    value={depTime}
                    onChange={(e) => setDepTime(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Planned Arrival Time
                  </label>
                  <input
                    id="schedule-form-arrtime"
                    type="time"
                    value={arrTime}
                    onChange={(e) => setArrTime(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold font-mono"
                  />
                </div>
              </div>

              {/* Automatic conflict block banner */}
              {conflicts.length > 0 && (
                <div
                  className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3"
                  id="conflict-error-box"
                >
                  <div className="flex items-start gap-2 text-red-800">
                    <ShieldAlert className="w-5 h-5 text-red-650 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider">
                        Critical overlap block triggered
                      </h4>
                      <p className="text-[10px] text-red-600 mt-0.5">
                        Relational checks failed. Re-assignment or optimizer
                        recommended.
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-[11px] text-red-700 space-y-1.5 pl-1 bg-white/40 p-2 rounded-lg border border-red-100">
                    {conflicts.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>

                  {/* AI Resolution Option */}
                  <div className="border-t border-red-100 pt-3 flex flex-col gap-2">
                    <button
                      id="btn-ai-resolve"
                      type="button"
                      onClick={triggerAIRecommendation}
                      disabled={aiLoading}
                      className="bg-blue-600 hover:bg-slate-905 duration-205 text-white font-bold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 w-max text-[10px] self-end shadow-sm cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {aiLoading
                        ? "Consulting Depot AI..."
                        : "Consult AI Schedule Assistant"}
                    </button>

                    {aiRecommendation && (
                      <div
                        className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-blue-900 text-xs mt-2 relative animate-fade-in"
                        id="ai-recommender-card"
                      >
                        <div className="flex items-center gap-1 mb-1 font-bold text-[10px] text-blue-700 uppercase tracking-widest leading-none">
                          <Sparkles className="w-3.5 h-3.5" /> AI Recommendation
                        </div>
                        <p className="italic font-normal leading-relaxed text-slate-700 mt-1">
                          {aiRecommendation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 border-t pt-3 border-slate-100">
                <button
                  id="btn-schedule-cancel"
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 select-none text-slate-600 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  id="btn-schedule-save"
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg select-none shadow-sm transition-all font-semibold"
                >
                  Confirm Shift
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
