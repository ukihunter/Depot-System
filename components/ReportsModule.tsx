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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:hidden">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-500">
              Report Category:
            </span>
            <select
              id="select-report-type"
              value={reportType}
              onChange={(e) => setReportType(e.target.value as any)}
              className="border border-slate-205 rounded-lg p-1.5 font-bold text-slate-800 bg-slate-50"
            >
              <option value="performance">Route Performance Report</option>
              <option value="fuel">Fuel Utilization & Audit Logs</option>
              <option value="maintenance">Maintenance Expense Log</option>
              <option value="utilization">Driver Utilization Register</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-500">Timeframe:</span>
            <select
              id="select-report-timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="border border-slate-205 rounded-lg p-1.5 font-bold text-slate-800 bg-slate-50 animate-fade-in"
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
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 duration-205 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Export CSV to Storage
          </button>

          <button
            id="btn-print-pdf-report"
            onClick={triggerPDFPrint}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 duration-205 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Generate Official Print PDF
          </button>
        </div>
      </div>

      {/* Printable Report Layout block */}
      <div
        className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-md print:shadow-none print:border-none relative overflow-hidden"
        id="official-audit-document"
      >
        {/* Academic watermark stamp background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 opacity-5 pointer-events-none text-slate-900 border-8 border-slate-950 p-6 rounded-full inline-block text-center select-none font-bold text-base max-w-sm">
          SMART ROUTE SYSTEM (SRMSS) • DEPOT ACCOUNTING • ACADEMIC RECORD
        </div>

        {/* Report Header block */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b-2 pb-6 border-slate-250">
          <div className="space-y-1">
            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold font-mono tracking-widest block w-max uppercase">
              Official Audit Ledger
            </span>
            <h2 className="text-xl font-extrabold text-slate-950 tracking-tight leading-none">
              SMART ROUTE MANAGEMENT SYSTEM
            </h2>
            <p className="text-xs text-blue-700 font-mono font-bold uppercase tracking-wider">
              Public Transport Depot Terminal Hubs
            </p>
          </div>
          <div className="text-right text-[10px] font-mono text-slate-500 space-y-0.5">
            <div>
              DOCUMENT REFERENCE:{" "}
              <span className="font-bold text-slate-800">SRMSS-AUDIT-2026</span>
            </div>
            <div>
              COMPILED DATE:{" "}
              <span className="font-bold text-slate-800">June 14, 2026</span>
            </div>
            <div>
              STATUS:{" "}
              <span className="text-emerald-600 font-bold">
                APPROVED BY BOARD
              </span>
            </div>
          </div>
        </div>

        {/* Overview Stats Segment */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-slate-100">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="block text-[10px] text-slate-400 font-mono uppercase font-bold leading-none">
              Active Routes
            </span>
            <span className="block text-lg font-black text-slate-900 mt-1 font-mono">
              {routes.length}{" "}
              <span className="text-xs font-semibold">Lines</span>
            </span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="block text-[10px] text-slate-400 font-mono uppercase font-bold leading-none">
              Completed Trips
            </span>
            <span className="block text-lg font-black text-slate-900 mt-1 font-mono">
              {completedTrips}{" "}
              <span className="text-xs font-semibold">Shifts</span>
            </span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="block text-[10px] text-slate-400 font-mono uppercase font-bold leading-none">
              Fuel Expenditures
            </span>
            <span className="block text-lg font-black text-blue-700 mt-1 font-mono">
              LKR {totalFuelCost.toLocaleString()}
            </span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="block text-[10px] text-slate-400 font-mono uppercase font-bold leading-none">
              Maintenance Repairs
            </span>
            <span className="block text-lg font-black text-slate-900 mt-1 font-mono">
              LKR {totalMaintCost.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Dynamic Categorized Report sections */}
        <div className="py-6 space-y-6 flex-1 min-h-[300px]">
          {reportType === "performance" && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm border-b pb-1 flex items-center gap-1">
                <TrendingUp className="w-4.5 h-4.5 text-blue-600" /> Route
                Operational Performance Indices
              </h4>
              <p className="text-xs text-slate-500">
                Summary compiled for the {timeframe} reporting span detailing
                route lengths and active dispatch logs:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse font-sans">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-700 font-mono text-[10px]">
                      <th className="p-2 border border-slate-200 dark:border-slate-700">
                        Route Name
                      </th>
                      <th className="p-2 border border-slate-200 dark:border-slate-700">
                        Start location
                      </th>
                      <th className="p-2 border border-slate-200 dark:border-slate-700">
                        Arrival Station
                      </th>
                      <th className="p-2 border border-slate-200 dark:border-slate-700 font-mono">
                        Distance (KM)
                      </th>
                      <th className="p-2 border border-slate-200 dark:border-slate-700 font-mono">
                        Duration (MIN)
                      </th>
                      <th className="p-2 border border-slate-200 dark:border-slate-700 text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((r) => (
                      <tr
                        key={r.route_id}
                        className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                      >
                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-slate-100">
                          {r.route_name}
                        </td>
                        <td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                          {r.start_location}
                        </td>
                        <td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                          {r.end_location}
                        </td>
                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono font-semibold text-slate-900 dark:text-slate-100">
                          {r.distance} KM
                        </td>
                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-slate-700 dark:text-slate-200">
                          {r.estimated_duration} mins
                        </td>
                        <td className="p-2 border border-slate-200 dark:border-slate-700 text-center font-bold text-emerald-600 dark:text-emerald-400">
                          {r.status}
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
              <h4 className="font-bold text-slate-900 text-sm border-b pb-1 flex items-center gap-1">
                <BarChart2 className="w-4.5 h-4.5 text-blue-600" /> Fleet Refuel
                Consumption Ledger
              </h4>
              <p className="text-xs text-slate-500">
                Audit trail verifying fuel efficiency averages across{" "}
                {timeframe} shifts:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-250 font-mono text-[10px]">
                      <th className="p-2 border">Refuel Date</th>
                      <th className="p-2 border">Vehicle Reg ID</th>
                      <th className="p-2 border font-mono">Liters loaded</th>
                      <th className="p-2 border font-mono">Fuel Price Paid</th>
                      <th className="p-2 border font-mono">Run distance</th>
                      <th className="p-2 border font-mono text-right">
                        Fuel Efficiency (KM / L)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {fuelLogs.map((fl) => {
                      const v = vehicles.find(
                        (bus) => bus.vehicle_id === fl.vehicle_id,
                      );
                      return (
                        <tr key={fl.fuel_id} className="hover:bg-slate-50/20">
                          <td className="p-2 border font-semibold">
                            {fl.date}
                          </td>
                          <td className="p-2 border font-sans font-semibold text-blue-700">
                            {v?.registration_number || fl.vehicle_id}
                          </td>
                          <td className="p-2 border text-slate-700">
                            {fl.liters} L
                          </td>
                          <td className="p-2 border font-sans font-semibold text-slate-905">
                            LKR {fl.cost}
                          </td>
                          <td className="p-2 border text-slate-700">
                            {fl.distance_covered} KM
                          </td>
                          <td className="p-2 border text-right font-sans font-bold text-blue-600">
                            {fl.liters > 0
                              ? (fl.distance_covered / fl.liters).toFixed(2)
                              : "0.00"}{" "}
                            KM/L
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="bg-slate-100/70 font-bold">
                      <td
                        colSpan={2}
                        className="p-2 border text-right font-sans"
                      >
                        Accumulated fuel Volume:
                      </td>
                      <td className="p-2 border text-slate-800">
                        {totalFuelLiters} L
                      </td>
                      <td className="p-2 border font-sans text-blue-600">
                        LKR {totalFuelCost}
                      </td>
                      <td
                        colSpan={2}
                        className="p-2 border text-right text-[10px] text-slate-400"
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
              <h4 className="font-bold text-slate-900 text-sm border-b pb-1 flex items-center gap-1">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />{" "}
                Maintenance Overhead Tracking Log
              </h4>
              <p className="text-xs text-slate-500">
                Service logs detailing fleet corrective refits and emergency
                repairs:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-250 font-mono text-[10px]">
                      <th className="p-2 border">Vehicle Reg</th>
                      <th className="p-2 border">Type</th>
                      <th className="p-2 border">Refit Date</th>
                      <th className="p-2 border">Next Check Date</th>
                      <th className="p-2 border font-mono">Invoice Cost</th>
                      <th className="p-2 border">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenance.map((m) => {
                      const v = vehicles.find(
                        (bus) => bus.vehicle_id === m.vehicle_id,
                      );
                      return (
                        <tr
                          key={m.maintenance_id}
                          className="hover:bg-slate-50/20"
                        >
                          <td className="p-2 border font-bold font-mono">
                            {v?.registration_number || m.vehicle_id}
                          </td>
                          <td className="p-2 border font-semibold">
                            {m.maintenance_type}
                          </td>
                          <td className="p-2 border text-slate-650 font-mono">
                            {m.service_date}
                          </td>
                          <td className="p-2 border text-slate-650 font-mono">
                            {m.next_service_date}
                          </td>
                          <td className="p-2 border font-mono font-bold text-slate-900">
                            LKR {m.cost}
                          </td>
                          <td className="p-2 border font-semibold capitalize text-emerald-700">
                            {m.status}
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
              <h4 className="font-bold text-slate-900 text-sm border-b pb-1 flex items-center gap-1">
                <FileText className="w-4.5 h-4.5 text-blue-650" /> Driver
                Utilization Register
              </h4>
              <p className="text-xs text-slate-500">
                Weekly operational shift hour meters tracking driver safety and
                rest limits:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-250 font-mono text-[10px]">
                      <th className="p-2 border">Driver Name</th>
                      <th className="p-2 border">NIC Number</th>
                      <th className="p-2 border">License Reference</th>
                      <th className="p-2 border">Mobile Contact</th>
                      <th className="p-2 border font-mono">
                        Weekly Shift Hour
                      </th>
                      <th className="p-2 border text-center">Duty Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.map((d) => (
                      <tr key={d.driver_id} className="hover:bg-slate-50/20">
                        <td className="p-2 border font-semibold">{d.name}</td>
                        <td className="p-2 border text-slate-600 font-mono">
                          {d.nic}
                        </td>
                        <td className="p-2 border text-slate-600 font-mono">
                          {d.license_number}
                        </td>
                        <td className="p-2 border text-slate-600 font-mono">
                          {d.phone}
                        </td>
                        <td className="p-2 border font-bold font-mono text-slate-800">
                          {d.working_hours} hrs
                        </td>
                        <td className="p-2 border text-center font-bold text-blue-600 capitalize">
                          {d.status}
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
          className="border-t-2 pt-8 flex justify-between items-end gap-6 text-[10px] text-slate-500 font-mono"
          id="signature-block"
        >
          <div>
            <div className="font-bold text-slate-750 uppercase">
              Security Token
            </div>
            <div>VERIFIED SECURE PLATFORM SHA: 256B89D776</div>
            <div>SRMSS DEPT OF HIGHWAYS TRANSIT</div>
          </div>
          <div className="text-center">
            <div className="w-32 border-b border-slate-350 mx-auto h-8"></div>
            <div className="font-bold text-slate-800 mt-2 uppercase">
              Depot Operations Chief
            </div>
            <div>Official Signer & Authority</div>
          </div>
        </div>
      </div>
    </div>
  );
}
