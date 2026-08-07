import React, { useState } from "react";
import {
  Trip,
  FuelLog,
  MaintenanceRecord,
  Vehicle,
  Schedule,
  Route,
} from "../type";
import {
  Plus,
  Check,
  Play,
  Square,
  AlertTriangle,
  PenTool as Tool,
  Droplet,
  DollarSign,
  Gauge,
  Edit2,
  Calendar,
  FileText,
  Sparkles,
  Navigation,
} from "lucide-react";

interface OperationsModulesProps {
  trips: Trip[];
  fuelLogs: FuelLog[];
  maintenance: MaintenanceRecord[];
  vehicles: Vehicle[];
  schedules: Schedule[];
  routes: Route[];
  onStartTrip: (tripId: string) => Promise<any>;
  onEndTrip: (
    tripId: string,
    status: "Completed" | "Cancelled",
    remarks?: string,
  ) => Promise<any>;
  onUpdateTripStatus: (tripId: string, status: Trip["status"]) => Promise<any>;
  onAddFuelLog: (log: Partial<FuelLog>) => Promise<any>;
  onAddMaintenance: (rec: Partial<MaintenanceRecord>) => Promise<any>;
  onUpdateMaintenanceStatus: (
    recId: string,
    status: MaintenanceRecord["status"],
  ) => Promise<any>;
  userRole: string;
}

export default function OperationsModules(props: OperationsModulesProps) {
  const {
    trips,
    fuelLogs,
    maintenance,
    vehicles,
    schedules,
    routes,
    onStartTrip,
    onEndTrip,
    onUpdateTripStatus,
    onAddFuelLog,
    onAddMaintenance,
    onUpdateMaintenanceStatus,
    userRole,
  } = props;
  const [activeWorkflow, setActiveWorkflow] = useState<
    "trips" | "fuel" | "maintenance"
  >("trips");

  // Fuel form state
  const [fuelVehicleId, setFuelVehicleId] = useState("");
  const [fuelDate, setFuelDate] = useState("2026-06-14");
  const [fuelLiters, setFuelLiters] = useState(65);
  const [fuelCost, setFuelCost] = useState(130);
  const [fuelDistance, setFuelDistance] = useState(380);

  // Maintenance form state
  const [maintVehicleId, setMaintVehicleId] = useState("");
  const [maintType, setMaintType] =
    useState<MaintenanceRecord["maintenance_type"]>("Scheduled");
  const [maintDate, setMaintDate] = useState("2026-06-14");
  const [maintNextDate, setMaintNextDate] = useState("2026-09-14");
  const [maintCost, setMaintCost] = useState(450);
  const [maintRemarks, setMaintRemarks] = useState("");

  const canWrite =
    userRole === "MAIN_ADMIN" ||
    userRole === "DEPOT_ADMIN" ||
    userRole === "OPERATIONAL_STAFF";

  // Fuel Efficiency Calcs
  const getFuelEfficiency = (liters: number, distance: number) => {
    if (!liters || liters <= 0) return "0.00";
    return (distance / liters).toFixed(2);
  };

  const handleLogFuel = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetVehicleId =
      fuelVehicleId || (vehicles.length > 0 ? vehicles[0].vehicle_id : "");
    if (!targetVehicleId || fuelLiters <= 0 || fuelCost <= 0) return;

    await onAddFuelLog({
      vehicle_id: targetVehicleId,
      date: fuelDate,
      liters: Number(fuelLiters),
      cost: Number(fuelCost),
      distance_covered: Number(fuelDistance),
    });

    // Reset Form
    setFuelLiters(50);
    setFuelCost(100);
    setFuelDistance(300);
    alert("Fuel expenditure logged successfully!");
  };

  const handleLogMaintenance = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetVehicleId =
      maintVehicleId || (vehicles.length > 0 ? vehicles[0].vehicle_id : "");
    if (!targetVehicleId || maintCost <= 0) return;

    await onAddMaintenance({
      vehicle_id: targetVehicleId,
      maintenance_type: maintType,
      service_date: maintDate,
      next_service_date: maintNextDate,
      cost: Number(maintCost),
      remarks: maintRemarks,
      status: "Scheduled",
    });

    setMaintCost(200);
    setMaintRemarks("");
    alert("Maintenance schedule dispatched!");
  };

  return (
    <div id="operations-module-root" className="space-y-6">
      {/* Workflow Navigation Tab group */}
      <div className="flex border-b border-[#27323a] gap-2">
        <button
          id="btn-subtab-trips"
          onClick={() => setActiveWorkflow("trips")}
          className={`px-5 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeWorkflow === "trips"
              ? "border-[#6b8f3c] text-[#8bb552]"
              : "border-transparent text-[#8a96a0] hover:text-[#ede9e3]"
          }`}
        >
          <Navigation className="w-4 h-4" />
          Active Trip Manifest (
          {
            trips.filter(
              (t) => t.status === "Active" || t.status === "Scheduled",
            ).length
          }
          )
        </button>
        <button
          id="btn-subtab-fuel"
          onClick={() => {
            setActiveWorkflow("fuel");
            if (vehicles.length > 0 && !fuelVehicleId)
              setFuelVehicleId(vehicles[0].vehicle_id);
          }}
          className={`px-5 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeWorkflow === "fuel"
              ? "border-[#6b8f3c] text-[#8bb552]"
              : "border-transparent text-[#8a96a0] hover:text-[#ede9e3]"
          }`}
        >
          <Droplet className="w-4 h-4" />
          Depot Fuel Audit Registers
        </button>
        <button
          id="btn-subtab-maintenance"
          onClick={() => {
            setActiveWorkflow("maintenance");
            if (vehicles.length > 0 && !maintVehicleId)
              setMaintVehicleId(vehicles[0].vehicle_id);
          }}
          className={`px-5 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeWorkflow === "maintenance"
              ? "border-[#6b8f3c] text-[#8bb552]"
              : "border-transparent text-[#8a96a0] hover:text-[#ede9e3]"
          }`}
        >
          <Tool className="w-4 h-4" />
          Maintenance Repair Schedules
        </button>
      </div>

      {/* TRIP WORKFLOW TAB */}
      {activeWorkflow === "trips" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Active Manifest */}
          <div
            className="lg:col-span-12 glass-panel rounded-2xl overflow-hidden"
            id="active-manifest"
          >
            <div className="bg-[#141a1f] border-b border-[#27323a] px-5 py-3">
              <h3 className="font-bold text-[#ede9e3] text-sm">
                Ongoing Depot Operational Manifest
              </h3>
              <p className="text-[10px] text-[#8a96a0] font-mono">
                Live status monitoring & trip completion gates
              </p>
            </div>

            <div className="max-w-full overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141a1f]/50 text-[#8a96a0] font-bold border-b border-[#27323a] uppercase font-mono text-[9px] tracking-wider">
                    <th className="p-4">Trip Code</th>
                    <th className="p-4">Tied Route Info</th>
                    <th className="p-4">Assigned Fleet</th>
                    <th className="p-4">Start Coordinates</th>
                    <th className="p-4">End Coordinates</th>
                    <th className="p-4">Dispatch status</th>
                    <th className="p-4 text-right">Gates/Override</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27323a]">
                  {trips.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="p-8 text-center text-[#8a96a0] italic"
                      >
                        No trips loaded on current timetabled date.
                      </td>
                    </tr>
                  ) : (
                    trips.map((t) => {
                      const sched = schedules.find(
                        (s) => s.schedule_id === t.schedule_id,
                      );
                      const route = routes.find(
                        (r) => r.route_id === sched?.route_id,
                      );
                      const bus = vehicles.find(
                        (v) => v.vehicle_id === sched?.vehicle_id,
                      );

                      return (
                        <tr key={t.trip_id} className="hover:bg-[#1a2228]/50 transition-colors">
                          <td className="p-4 font-mono font-bold text-[#ede9e3]">
                            {t.trip_id}
                          </td>
                          <td className="p-4 text-[#ede9e3]">
                            <div>
                              <span className="font-bold">
                                {route?.route_name || "Direct transit link"}
                              </span>
                              <span className="block text-[10px] text-[#8a96a0] font-mono">
                                Sched Ref: {t.schedule_id}
                              </span>
                            </div>
                          </td>
                          <td className="p-4 font-mono text-[#c49a5c] font-semibold">
                            {bus?.registration_number || "Awaiting vehicle"}
                          </td>
                          <td className="p-4 text-[#8a96a0] font-semibold">
                            {t.start_time || "Pending dispatch"}
                          </td>
                          <td className="p-4 text-[#8a96a0] font-semibold">
                            {t.end_time || "--:--"}
                          </td>
                          <td className="p-4">
                            <span
                              className={`badge ${
                                t.status === "Active"
                                  ? "badge-success animate-pulse"
                                  : t.status === "Completed"
                                    ? "badge-success"
                                    : t.status === "Delayed"
                                      ? "badge-warning"
                                      : "badge-danger"
                              }`}
                            >
                              {t.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            {canWrite ? (
                              <div className="flex gap-1.5 justify-end">
                                {t.status === "Scheduled" && (
                                  <button
                                    id={`btn-start-trip-${t.trip_id}`}
                                    onClick={() => onStartTrip(t.trip_id)}
                                    className="btn-primary py-1 px-2.5 text-[10px]"
                                  >
                                    <Play className="w-3 h-3" /> Start Transit
                                  </button>
                                )}
                                {t.status === "Active" && (
                                  <>
                                    <button
                                      id={`btn-complete-trip-${t.trip_id}`}
                                      onClick={() =>
                                        onEndTrip(t.trip_id, "Completed")
                                      }
                                      className="btn-primary py-1 px-2 text-[10px]"
                                    >
                                      Mark Complete
                                    </button>
                                    <button
                                      id={`btn-delay-trip-${t.trip_id}`}
                                      onClick={() =>
                                        onUpdateTripStatus(t.trip_id, "Delayed")
                                      }
                                      className="btn-amber py-1 px-2 text-[10px]"
                                    >
                                      Delay Alert
                                    </button>
                                  </>
                                )}
                                {t.status === "Delayed" && (
                                  <button
                                    id={`btn-complete-trip-delay-${t.trip_id}`}
                                    onClick={() =>
                                      onEndTrip(
                                        t.trip_id,
                                        "Completed",
                                        "Route delayed but completed safely.",
                                      )
                                    }
                                    className="btn-primary py-1 px-2 text-[10px]"
                                  >
                                    Complete Shift
                                  </button>
                                )}
                                {t.status === "Completed" && (
                                  <span className="text-[#8a96a0] font-semibold text-[10px]">
                                    Closed Log
                                  </span>
                                )}
                              </div>
                            ) : (
                              <span className="text-[#8a96a0] font-mono font-semibold text-[10px]">
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
        </div>
      )}

      {/* FUEL WORKFLOW TAB */}
      {activeWorkflow === "fuel" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Audit logger form */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-5">
            <h3 className="font-bold text-[#ede9e3] text-sm mb-4 border-b pb-2 border-[#27323a] flex items-center gap-1.5">
              <Droplet className="w-4.5 h-4.5 text-[#6b8f3c]" /> Fuel Log Entry
              Form
            </h3>

            <form
              onSubmit={handleLogFuel}
              className="space-y-4 text-xs font-semibold"
            >
              <div className="space-y-1">
                <label className="text-[#8a96a0]">
                  Target Vehicle (Terminal fleet)
                </label>
                <select
                  id="fuel-form-vehicle"
                  value={fuelVehicleId}
                  onChange={(e) => setFuelVehicleId(e.target.value)}
                  className="input-field w-full font-semibold"
                >
                  {vehicles.map((v) => (
                    <option key={v.vehicle_id} value={v.vehicle_id}>
                      {v.registration_number} ({v.fuel_type})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[#8a96a0] font-semibold">
                  Refuel Date
                </label>
                <input
                  id="fuel-form-date"
                  type="date"
                  value={fuelDate}
                  onChange={(e) => setFuelDate(e.target.value)}
                  className="input-field w-full font-mono font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#8a96a0] font-semibold">
                    Liters Dispensed
                  </label>
                  <input
                    id="fuel-form-liters"
                    type="number"
                    min="1"
                    value={fuelLiters}
                    onChange={(e) => setFuelLiters(Number(e.target.value))}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[#8a96a0] font-semibold">
                    Total Cost (LKR)
                  </label>
                  <input
                    id="fuel-form-cost"
                    type="number"
                    min="1"
                    value={fuelCost}
                    onChange={(e) => setFuelCost(Number(e.target.value))}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#8a96a0]">
                  Distance Traveled Since Last Refuel (KM)
                </label>
                <input
                  id="fuel-form-distance"
                  type="number"
                  min="0"
                  value={fuelDistance}
                  onChange={(e) => setFuelDistance(Number(e.target.value))}
                  className="input-field w-full font-mono font-semibold"
                />
              </div>

              {canWrite && (
                <button
                  id="btn-submit-fuel-log"
                  type="submit"
                  className="btn-primary w-full"
                >
                  Log Fuel Expenditure
                </button>
              )}
            </form>
          </div>

          {/* Audit logs history */}
          <div className="lg:col-span-8 glass-panel rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="bg-[#141a1f] border-b border-[#27323a] px-5 py-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#ede9e3] text-sm">
                  Depot Refuel Ledger Logs
                </h3>
                <p className="text-[10px] text-[#8a96a0] font-mono">
                  Efficiency calculations audit trails
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[385px]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141a1f]/50 text-[#8a96a0] font-bold border-b border-[#27323a] uppercase font-mono text-[9px] tracking-wider">
                    <th className="p-3">Refuel Date</th>
                    <th className="p-3">Vehicle</th>
                    <th className="p-3">Liters Entered</th>
                    <th className="p-3">Invoiced Price</th>
                    <th className="p-3">Run distance</th>
                    <th className="p-3 font-mono">Avg Fuel Efficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27323a] font-mono">
                  {fuelLogs.map((log) => {
                    const vehicle = vehicles.find(
                      (v) => v.vehicle_id === log.vehicle_id,
                    );

                    return (
                      <tr key={log.fuel_id} className="hover:bg-[#1a2228]/50 transition-colors">
                        <td className="p-3 font-semibold text-[#ede9e3]">
                          {log.date}
                        </td>
                        <td className="p-3 font-sans font-semibold text-[#c49a5c]">
                          {vehicle?.registration_number || log.vehicle_id}
                        </td>
                        <td className="p-3 text-[#ede9e3]">{log.liters} L</td>
                        <td className="p-3 font-sans font-bold text-[#ede9e3]">
                          LKR {log.cost}
                        </td>
                        <td className="p-3 text-[#ede9e3]">
                          {log.distance_covered} KM
                        </td>
                        <td className="p-3">
                          <span className="badge badge-primary font-mono font-bold">
                            {getFuelEfficiency(
                              log.liters,
                              log.distance_covered,
                            )}{" "}
                            KM/L
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* REPAIRS / MAINTENANCE TAB */}
      {activeWorkflow === "maintenance" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Dispatch repair form */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-5">
            <h3 className="font-bold text-[#ede9e3] text-sm mb-4 border-b pb-2 border-[#27323a] flex items-center gap-1.5">
              <Tool className="w-4.5 h-4.5 text-[#6b8f3c]" /> Book Vehicle Repair
            </h3>

            <form
              onSubmit={handleLogMaintenance}
              className="space-y-4 text-xs font-semibold"
            >
              <div className="space-y-1">
                <label className="text-[#8a96a0]">Vehicle under Repairs</label>
                <select
                  id="maint-form-vehicle"
                  value={maintVehicleId}
                  onChange={(e) => setMaintVehicleId(e.target.value)}
                  className="input-field w-full font-semibold"
                >
                  {vehicles.map((v) => (
                    <option key={v.vehicle_id} value={v.vehicle_id}>
                      {v.registration_number} ({v.status})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[#8a96a0]">Intervention Category</label>
                <select
                  id="maint-form-type"
                  value={maintType}
                  onChange={(e) => setMaintType(e.target.value as any)}
                  className="input-field w-full font-semibold"
                >
                  <option value="Scheduled">Scheduled Regular Service</option>
                  <option value="Corrective">
                    Corrective Mechanical Repair
                  </option>
                  <option value="Emergency">Emergency Fleet breakdown</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#8a96a0]">Refit Date</label>
                  <input
                    id="maint-form-date"
                    type="date"
                    value={maintDate}
                    onChange={(e) => setMaintDate(e.target.value)}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[#8a96a0]">Next Service Date</label>
                  <input
                    id="maint-form-next"
                    type="date"
                    value={maintNextDate}
                    onChange={(e) => setMaintNextDate(e.target.value)}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#8a96a0]">Calculated Cost (LKR)</label>
                <input
                  id="maint-form-cost"
                  type="number"
                  min="0"
                  value={maintCost}
                  onChange={(e) => setMaintCost(Number(e.target.value))}
                  className="input-field w-full font-mono font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#8a96a0]">
                  Engineers Remarks / Breakdown Notes
                </label>
                <textarea
                  id="maint-form-remarks"
                  placeholder="Describe failure scope, spark plug replaced, gearbox filters..."
                  value={maintRemarks}
                  onChange={(e) => setMaintRemarks(e.target.value)}
                  className="input-field w-full h-16 font-normal"
                />
              </div>

              {canWrite && (
                <button
                  id="btn-book-maintenance"
                  type="submit"
                  className="btn-primary w-full"
                >
                  Dispatch Maintenance Ticket
                </button>
              )}
            </form>
          </div>

          {/* Maintenance Registers list */}
          <div className="lg:col-span-8 glass-panel rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="bg-[#141a1f] border-b border-[#27323a] px-5 py-3">
              <h3 className="font-bold text-[#ede9e3] text-sm">
                Active Repair registers & logs
              </h3>
              <p className="text-[10px] text-[#8a96a0] font-mono">
                Fleet mechanical service files
              </p>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[464px]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141a1f]/50 text-[#8a96a0] font-bold border-b border-[#27323a] uppercase font-mono text-[9px] tracking-wider">
                    <th className="p-3">Vehicle Class</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Service Date</th>
                    <th className="p-3 font-mono">Invoice Cost</th>
                    <th className="p-3">Diagnostic Remarks</th>
                    <th className="p-3">Repair Status</th>
                    <th className="p-3 text-right">Action Gate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27323a]">
                  {maintenance.map((m) => {
                    const vehicle = vehicles.find(
                      (v) => v.vehicle_id === m.vehicle_id,
                    );

                    return (
                      <tr
                        key={m.maintenance_id}
                        className="hover:bg-[#1a2228]/50 transition-colors"
                      >
                        <td className="p-3 font-bold text-[#ede9e3] font-mono">
                          {vehicle?.registration_number || m.vehicle_id}
                        </td>
                        <td className="p-3">
                          <span
                            className={`badge ${
                              m.maintenance_type === "Emergency"
                                ? "badge-danger"
                                : m.maintenance_type === "Corrective"
                                  ? "badge-warning"
                                  : "badge-primary"
                            }`}
                          >
                            {m.maintenance_type}
                          </span>
                        </td>
                        <td className="p-3 text-[#8a96a0] font-mono font-semibold">
                          {m.service_date}
                        </td>
                        <td className="p-3 font-mono font-bold text-[#ede9e3]">
                          LKR {m.cost}
                        </td>
                        <td className="p-3 text-[#8a96a0] max-w-[160px] truncate">
                          {m.remarks || "No supplementary notes logged"}
                        </td>
                        <td className="p-3">
                          <span
                            className={`badge ${
                              m.status === "Completed"
                                ? "badge-success"
                                : m.status === "In Progress"
                                  ? "badge-primary animate-pulse"
                                  : "badge-warning"
                            }`}
                          >
                            {m.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          {m.status !== "Completed" && (
                            <button
                              id={`btn-complete-maint-${m.maintenance_id}`}
                              onClick={() =>
                                onUpdateMaintenanceStatus(
                                  m.maintenance_id,
                                  "Completed",
                                )
                              }
                              className="btn-primary py-1 px-2 text-[9px]"
                            >
                              Done Close
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
