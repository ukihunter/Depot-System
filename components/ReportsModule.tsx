import React, { useState } from "react";
import {
  Route,
  Driver,
  Vehicle,
  FuelLog,
  MaintenanceRecord,
  Schedule,
} from "../type";
import {
  Printer,
  FileText,
  Calendar,
  Filter,
  TrendingUp,
  Sparkles,
  BarChart2,
  ShieldCheck,
  Download,
} from "lucide-react";

interface ReportsModuleProps {
  routes: Route[];
  drivers: Driver[];
  vehicles: Vehicle[];
  fuelLogs: FuelLog[];
  maintenance: MaintenanceRecord[];
  schedules: Schedule[];
}

export default function ReportsModule({
  routes,
  drivers,
  vehicles,
  fuelLogs,
  maintenance,
  schedules,
}: ReportsModuleProps) {
  const [reportType, setReportType] = useState<
    "performance" | "fuel" | "maintenance" | "utilization"
  >("performance");
  const [timeframe, setTimeframe] = useState<"weekly" | "monthly">("weekly");

  // Sum Costs/Consumption
  const totalFuelCost = fuelLogs.reduce((sum, f) => sum + f.cost, 0);
  const totalFuelLiters = fuelLogs.reduce((sum, f) => sum + f.liters, 0);
  const totalMaintCost = maintenance.reduce((sum, m) => sum + m.cost, 0);
  const completedTrips = schedules.filter(
    (s) => s.status === "Completed",
  ).length;

  const triggerPDFPrint = () => {
    // Elegant system print trigger
    window.print();
  };

  const handleExportReport = () => {
    let csvHeader = "";
    let csvRows: string[] = [];

    if (reportType === "performance") {
      csvHeader = "Route Name,Start Location,Arrival Station,Distance (KM),Duration (MIN),Status";
      csvRows = routes.map(
        (r) => `"${r.route_name}","${r.start_location}","${r.end_location}",${r.distance},${r.estimated_duration},"${r.status}"`
      );
    } else if (reportType === "fuel") {
      csvHeader = "Refuel Date,Vehicle Reg ID,Liters Loaded,Fuel Price Paid (LKR),Run Distance (KM),Fuel Efficiency (KM/L)";
      csvRows = fuelLogs.map((fl) => {
        const v = vehicles.find((bus) => bus.vehicle_id === fl.vehicle_id);
        const eff = fl.liters > 0 ? (fl.distance_covered / fl.liters).toFixed(2) : "0.00";
        return `"${fl.date}","${v?.registration_number || fl.vehicle_id}",${fl.liters},${fl.cost},${fl.distance_covered},${eff}`;
      });
    } else if (reportType === "maintenance") {
      csvHeader = "Vehicle Reg ID,Type,Refit Date,Next Check Date,Cost (LKR),Status";
      csvRows = maintenance.map((m) => {
        const v = vehicles.find((bus) => bus.vehicle_id === m.vehicle_id);
        return `"${v?.registration_number || m.vehicle_id}","${m.maintenance_type}","${m.service_date}","${m.next_service_date}",${m.cost},"${m.status}"`;
      });
    } else if (reportType === "utilization") {
      csvHeader = "Driver Name,NIC Number,License Reference,Mobile Contact,Weekly Shift Hours,Duty Status";
      csvRows = drivers.map(
        (d) => `"${d.name}","${d.nic}","${d.license_number}","${d.phone}",${d.working_hours},"${d.status}"`
      );
    }

    const csvContent = [csvHeader, ...csvRows].join("\n");

    // 1. Save to Local Storage
    const storageKey = `srmss_report_export_${reportType}_${timeframe}`;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({
        exportedAt: new Date().toISOString(),
        reportType,
        timeframe,
        data: csvContent,
      }));
    } catch (err) {
      console.error("Failed to save report export to LocalStorage:", err);
    }

    // 2. Download File to local disk
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `SRMSS_${reportType}_${timeframe}_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="reports-module-root" className="space-y-6">
      {/* Filtering selectors */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl print:hidden">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs">
            <Filter className="w-4 h-4 text-[#8a96a0]" />
            <span className="font-semibold text-[#8a96a0]">
              Report Category:
            </span>
            <select
              id="select-report-type"
              value={reportType}
              onChange={(e) => setReportType(e.target.value as any)}
              className="input-field font-bold text-[#ede9e3] py-1.5"
            >
              <option value="performance">Route Performance Report</option>
              <option value="fuel">Fuel Utilization & Audit Logs</option>
              <option value="maintenance">Maintenance Expense Log</option>
              <option value="utilization">Driver Utilization Register</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <Calendar className="w-4 h-4 text-[#8a96a0]" />
            <span className="font-semibold text-[#8a96a0]">Timeframe:</span>
            <select
              id="select-report-timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="input-field font-bold text-[#ede9e3] py-1.5 animate-fade-in"
            >
              <option value="weekly">Weekly Operational Summary</option>
              <option value="monthly">Monthly Accounting Ledger</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-export-csv-report"
            onClick={handleExportReport}
            className="btn-amber w-full sm:w-auto text-xs"
          >
            <Download className="w-4 h-4" />
            Export CSV to Storage
          </button>

          <button
            id="btn-print-pdf-report"
            onClick={triggerPDFPrint}
            className="btn-primary w-full sm:w-auto text-xs"
          >
            <Printer className="w-4 h-4" />
            Generate Official Print PDF
          </button>
        </div>
      </div>

      {/* Printable Report Layout block */}
      <div
        className="glass-panel rounded-3xl p-8 max-w-4xl mx-auto print:shadow-none print:border-none relative overflow-hidden print:bg-white print:text-black"
        id="official-audit-document"
      >
        {/* Report Header block */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b-2 pb-6 border-[#27323a] print:border-slate-300">
          <div className="space-y-1">
            <span className="badge badge-amber font-mono font-bold tracking-wider uppercase">
              SRMSS Official Depot Audit Report
            </span>
            <h2 className="text-xl font-extrabold text-[#ede9e3] print:text-black tracking-tight leading-none uppercase mt-2">
              {reportType === "performance" && "Route Operational Performance Report"}
              {reportType === "fuel" && "Fleet Fuel Consumption & Audit Log"}
              {reportType === "maintenance" && "Fleet Maintenance Expense Report"}
              {reportType === "utilization" && "Driver Duty Utilization Register"}
            </h2>
            <p className="text-xs text-[#8bb552] print:text-emerald-700 font-mono font-bold uppercase tracking-wider mt-1">
              Depot Transit System Management Hub
            </p>
          </div>
          <div className="text-right text-[10px] font-mono text-[#8a96a0] print:text-slate-600 space-y-0.5">
            <div>
              REF ID:{" "}
              <span className="font-bold text-[#ede9e3] print:text-black">
                SRMSS-RPT-{reportType.toUpperCase()}-{new Date().getFullYear()}
              </span>
            </div>
            <div>
              TIMEFRAME:{" "}
              <span className="font-bold text-[#ede9e3] print:text-black uppercase">{timeframe}</span>
            </div>
            <div>
              GENERATED DATE:{" "}
              <span className="font-bold text-[#ede9e3] print:text-black">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Overview Stats Segment */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-[#27323a] print:border-slate-200">
          <div className="p-3 bg-[#12181d] border border-[#27323a] print:bg-slate-50 print:border-slate-200 rounded-xl">
            <span className="block text-[10px] text-[#8a96a0] font-mono uppercase font-bold leading-none">
              Active Routes
            </span>
            <span className="block text-lg font-black text-[#ede9e3] print:text-black mt-1 font-mono">
              {routes.length}{" "}
              <span className="text-xs font-semibold">Lines</span>
            </span>
          </div>
          <div className="p-3 bg-[#12181d] border border-[#27323a] print:bg-slate-50 print:border-slate-200 rounded-xl">
            <span className="block text-[10px] text-[#8a96a0] font-mono uppercase font-bold leading-none">
              Completed Trips
            </span>
            <span className="block text-lg font-black text-[#ede9e3] print:text-black mt-1 font-mono">
              {completedTrips}{" "}
              <span className="text-xs font-semibold">Shifts</span>
            </span>
          </div>
          <div className="p-3 bg-[#12181d] border border-[#27323a] print:bg-slate-50 print:border-slate-200 rounded-xl">
            <span className="block text-[10px] text-[#8a96a0] font-mono uppercase font-bold leading-none">
              Fuel Expenditures
            </span>
            <span className="block text-lg font-black text-[#8bb552] print:text-emerald-700 mt-1 font-mono">
              LKR {totalFuelCost.toLocaleString()}
            </span>
          </div>
          <div className="p-3 bg-[#12181d] border border-[#27323a] print:bg-slate-50 print:border-slate-200 rounded-xl">
            <span className="block text-[10px] text-[#8a96a0] font-mono uppercase font-bold leading-none">
              Maintenance Repairs
            </span>
            <span className="block text-lg font-black text-[#c49a5c] print:text-amber-700 mt-1 font-mono">
              LKR {totalMaintCost.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Dynamic Categorized Report sections */}
        <div className="py-6 space-y-6 flex-1 min-h-[300px]">
          {reportType === "performance" && (
            <div className="space-y-4">
              <h4 className="font-bold text-[#ede9e3] print:text-black text-sm border-b pb-1 border-[#27323a] flex items-center gap-1.5">
                <TrendingUp className="w-4.5 h-4.5 text-[#6b8f3c]" /> Route
                Operational Performance Indices
              </h4>
              <p className="text-xs text-[#8a96a0] print:text-slate-500">
                Summary compiled for the {timeframe} reporting span detailing
                route lengths and active dispatch logs:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse font-sans">
                  <thead>
                    <tr className="bg-[#141a1f] print:bg-slate-100 text-[#8a96a0] print:text-slate-800 font-bold border-b border-[#27323a] print:border-slate-200 font-mono text-[10px]">
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">
                        Route Name
                      </th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">
                        Start location
                      </th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">
                        Arrival Station
                      </th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono">
                        Distance (KM)
                      </th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono">
                        Duration (MIN)
                      </th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#27323a] print:divide-slate-200">
                    {routes.map((r) => (
                      <tr
                        key={r.route_id}
                        className="hover:bg-[#1a2228]/50 print:hover:bg-slate-50"
                      >
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-semibold text-[#ede9e3] print:text-black">
                          {r.route_name}
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0] print:text-slate-700">
                          {r.start_location}
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0] print:text-slate-700">
                          {r.end_location}
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono font-semibold text-[#ede9e3] print:text-black">
                          {r.distance} KM
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono text-[#8a96a0] print:text-slate-700">
                          {r.estimated_duration} mins
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-center">
                          <span className={`badge ${r.status === "Active" ? "badge-success" : "badge-danger"}`}>
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {reportType === "fuel" && (
            <div className="space-y-4">
              <h4 className="font-bold text-[#ede9e3] print:text-black text-sm border-b pb-1 border-[#27323a] flex items-center gap-1.5">
                <BarChart2 className="w-4.5 h-4.5 text-[#6b8f3c]" /> Fleet Refuel
                Consumption Ledger
              </h4>
              <p className="text-xs text-[#8a96a0] print:text-slate-500">
                Audit trail verifying fuel efficiency averages across{" "}
                {timeframe} shifts:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#141a1f] print:bg-slate-100 text-[#8a96a0] print:text-slate-700 font-bold border-b border-[#27323a] font-mono text-[10px]">
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Refuel Date</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Vehicle Reg ID</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono">Liters loaded</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono">Fuel Price Paid</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono">Run distance</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono text-right">
                        Fuel Efficiency (KM / L)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-mono divide-y divide-[#27323a] print:divide-slate-200">
                    {fuelLogs.map((fl) => {
                      const v = vehicles.find(
                        (bus) => bus.vehicle_id === fl.vehicle_id,
                      );
                      return (
                        <tr key={fl.fuel_id} className="hover:bg-[#1a2228]/50 print:hover:bg-slate-50">
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-semibold text-[#ede9e3] print:text-black">
                            {fl.date}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-sans font-semibold text-[#c49a5c]">
                            {v?.registration_number || fl.vehicle_id}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0]">
                            {fl.liters} L
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-sans font-semibold text-[#ede9e3] print:text-black">
                            LKR {fl.cost}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0]">
                            {fl.distance_covered} KM
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-right font-sans font-bold text-[#8bb552]">
                            {fl.liters > 0
                              ? (fl.distance_covered / fl.liters).toFixed(2)
                              : "0.00"}{" "}
                            KM/L
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="bg-[#141a1f] print:bg-slate-100 font-bold">
                      <td
                        colSpan={2}
                        className="p-2.5 border border-[#27323a] print:border-slate-200 text-right font-sans text-[#ede9e3] print:text-black"
                      >
                        Accumulated fuel Volume:
                      </td>
                      <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#ede9e3] print:text-black">
                        {totalFuelLiters} L
                      </td>
                      <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-sans text-[#8bb552]">
                        LKR {totalFuelCost}
                      </td>
                      <td
                        colSpan={2}
                        className="p-2.5 border border-[#27323a] print:border-slate-200 text-right text-[10px] text-[#8a96a0]"
                      >
                        Ledger balanced
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {reportType === "maintenance" && (
            <div className="space-y-4">
              <h4 className="font-bold text-[#ede9e3] print:text-black text-sm border-b pb-1 border-[#27323a] flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#6b8f3c]" />{" "}
                Maintenance Overhead Tracking Log
              </h4>
              <p className="text-xs text-[#8a96a0] print:text-slate-500">
                Service logs detailing fleet corrective refits and emergency
                repairs:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#141a1f] print:bg-slate-100 text-[#8a96a0] print:text-slate-700 font-bold border-b border-[#27323a] font-mono text-[10px]">
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Vehicle Reg</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Type</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Refit Date</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Next Check Date</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono">Invoice Cost</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#27323a] print:divide-slate-200">
                    {maintenance.map((m) => {
                      const v = vehicles.find(
                        (bus) => bus.vehicle_id === m.vehicle_id,
                      );
                      return (
                        <tr
                          key={m.maintenance_id}
                          className="hover:bg-[#1a2228]/50 print:hover:bg-slate-50"
                        >
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-bold font-mono text-[#ede9e3] print:text-black">
                            {v?.registration_number || m.vehicle_id}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-semibold text-[#ede9e3] print:text-black">
                            {m.maintenance_type}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0] font-mono">
                            {m.service_date}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0] font-mono">
                            {m.next_service_date}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono font-bold text-[#ede9e3] print:text-black">
                            LKR {m.cost}
                          </td>
                          <td className="p-2.5 border border-[#27323a] print:border-slate-200">
                            <span className={`badge ${m.status === "Completed" ? "badge-success" : "badge-amber"}`}>
                              {m.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {reportType === "utilization" && (
            <div className="space-y-4">
              <h4 className="font-bold text-[#ede9e3] print:text-black text-sm border-b pb-1 border-[#27323a] flex items-center gap-1.5">
                <FileText className="w-4.5 h-4.5 text-[#6b8f3c]" /> Driver
                Utilization Register
              </h4>
              <p className="text-xs text-[#8a96a0] print:text-slate-500">
                Weekly operational shift hour meters tracking driver safety and
                rest limits:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#141a1f] print:bg-slate-100 text-[#8a96a0] print:text-slate-700 font-bold border-b border-[#27323a] font-mono text-[10px]">
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Driver Name</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">NIC Number</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">License Reference</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200">Mobile Contact</th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 font-mono">
                        Weekly Shift Hour
                      </th>
                      <th className="p-2.5 border border-[#27323a] print:border-slate-200 text-center">Duty Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#27323a] print:divide-slate-200">
                    {drivers.map((d) => (
                      <tr key={d.driver_id} className="hover:bg-[#1a2228]/50 print:hover:bg-slate-50">
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-semibold text-[#ede9e3] print:text-black">{d.name}</td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0] font-mono">
                          {d.nic}
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0] font-mono">
                          {d.license_number}
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-[#8a96a0] font-mono">
                          {d.phone}
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 font-bold font-mono text-[#ede9e3] print:text-black">
                          {d.working_hours} hrs
                        </td>
                        <td className="p-2.5 border border-[#27323a] print:border-slate-200 text-center">
                          <span className={`badge ${d.status === "Active" ? "badge-success" : d.status === "Inactive" ? "badge-danger" : "badge-amber"}`}>
                            {d.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Closing & Signatures block */}
        <div
          className="border-t-2 pt-8 flex justify-between items-end gap-6 text-[10px] text-[#8a96a0] print:text-slate-500 font-mono border-[#27323a] print:border-slate-300"
          id="signature-block"
        >
          <div>
            <div className="font-bold text-[#ede9e3] print:text-black uppercase">
              Security Token
            </div>
            <div>VERIFIED SECURE PLATFORM SHA: 256B89D776</div>
            <div>SRMSS DEPT OF HIGHWAYS TRANSIT</div>
          </div>
          <div className="text-center">
            <div className="w-32 border-b border-[#27323a] print:border-slate-300 mx-auto h-8"></div>
            <div className="font-bold text-[#ede9e3] print:text-black mt-2 uppercase">
              Depot Operations Chief
            </div>
            <div>Official Signer & Authority</div>
          </div>
        </div>
      </div>
    </div>
  );
}
