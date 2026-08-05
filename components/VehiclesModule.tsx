import React, { useState } from "react";
import { Vehicle } from "../type";
import {
  Search,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  AlertTriangle,
  PenTool as Tool,
  X,
  Info,
  Gauge,
} from "lucide-react";

interface VehiclesModuleProps {
  vehicles: Vehicle[];
  onAddVehicle: (v: Partial<Vehicle>) => Promise<any>;
  onUpdateVehicle: (
    vehicleId: string,
    updates: Partial<Vehicle>,
  ) => Promise<any>;
  onDeleteVehicle: (vehicleId: string) => Promise<any>;
  userRole: string;
}

export default function VehiclesModule({
  vehicles,
  onAddVehicle,
  onUpdateVehicle,
  onDeleteVehicle,
  userRole,
}: VehiclesModuleProps) {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  // Form states
  const [regNum, setRegNum] = useState("");
  const [vType, setVType] = useState<Vehicle["vehicle_type"]>("Single Decker");
  const [capacity, setCapacity] = useState(45);
  const [mileage, setMileage] = useState(54000);
  const [fuelType, setFuelType] = useState<Vehicle["fuel_type"]>("Diesel");
  const [status, setStatus] = useState<Vehicle["status"]>("Available");

  const canWrite = userRole === "Admin";

  const openAddModal = () => {
    setEditingVehicle(null);
    setRegNum("");
    setVType("Single Decker");
    setCapacity(40);
    setMileage(10000);
    setFuelType("Electric");
    setStatus("Available");
    setShowModal(true);
  };

  const openEditModal = (v: Vehicle) => {
    setEditingVehicle(v);
    setRegNum(v.registration_number);
    setVType(v.vehicle_type);
    setCapacity(v.seating_capacity);
    setMileage(v.mileage);
    setFuelType(v.fuel_type);
    setStatus(v.status);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regNum || !capacity) return;

    if (editingVehicle) {
      await onUpdateVehicle(editingVehicle.vehicle_id, {
        registration_number: regNum,
        vehicle_type: vType,
        seating_capacity: Number(capacity),
        mileage: Number(mileage),
        fuel_type: fuelType,
        status,
      });
    } else {
      await onAddVehicle({
        registration_number: regNum,
        vehicle_type: vType,
        seating_capacity: Number(capacity),
        mileage: Number(mileage),
        fuel_type: fuelType,
        status,
      });
    }
    setShowModal(false);
  };

  const filteredVehicles = vehicles.filter(
    (v) =>
      v.registration_number.toLowerCase().includes(search.toLowerCase()) ||
      v.vehicle_type.toLowerCase().includes(search.toLowerCase()) ||
      v.fuel_type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div id="vehicles-module-root" className="space-y-6">
      {/* Search and configuration block */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-vehicles"
            type="text"
            placeholder="Search fleet (Reg Number, Type, Fuel)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
          />
        </div>
        {canWrite && (
          <button
            id="btn-add-vehicle"
            onClick={openAddModal}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            Register Vehicle
          </button>
        )}
      </div>

      {/* Grid of Vehicles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVehicles.length === 0 ? (
          <div className="md:col-span-4 text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No buses or fleet assets registered under these coordinates.
          </div>
        ) : (
          filteredVehicles.map((v) => {
            // High mileage suggests service requirement (every 25k km warning)
            const serviceUrgent = v.mileage > 80000;

            return (
              <div
                key={v.vehicle_id}
                id={`vehicle-${v.vehicle_id}`}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border-t-4"
                style={{
                  borderTopColor:
                    v.status === "Available"
                      ? "#10b981"
                      : v.status === "Maintenance"
                        ? "#f59e0b"
                        : "#2563eb",
                }}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 tracking-tight text-sm font-mono bg-slate-100 px-2 py-0.5 rounded-md">
                          {v.registration_number}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block mt-1">
                        FLEET ID: {v.vehicle_id}
                      </span>
                    </div>

                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                        v.status === "Available"
                          ? "bg-emerald-50 text-emerald-700"
                          : v.status === "Maintenance"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {v.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs border-b border-dashed pb-3 border-slate-100">
                    <div className="flex justify-between text-slate-500">
                      <span>Vehicle Category</span>
                      <span className="font-semibold text-slate-800">
                        {v.vehicle_type}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Fuel Type</span>
                      <span
                        className={`font-bold text-[9px] px-1.5 rounded-md ${
                          v.fuel_type === "Electric"
                            ? "bg-emerald-100 text-emerald-800"
                            : v.fuel_type === "Hybrid"
                              ? "bg-teal-100 text-teal-800"
                              : "bg-orange-100 text-slate-800"
                        }`}
                      >
                        {v.fuel_type}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Seating Capacity</span>
                      <span className="font-sans font-bold text-slate-800">
                        {v.seating_capacity} Seats
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Total Mileage</span>
                      <span className="font-mono font-bold text-slate-800 flex items-center gap-1">
                        <Gauge className="w-3.5 h-3.5 text-slate-400" />
                        {v.mileage.toLocaleString()} KM
                      </span>
                    </div>
                  </div>

                  {/* Health Indicator bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-400">Total Run wear</span>
                      <span className="font-bold text-slate-500">
                        {Math.min(Math.round(v.mileage / 1000), 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-50 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${serviceUrgent ? "bg-amber-500" : "bg-blue-500"}`}
                        style={{
                          width: `${Math.min((v.mileage / 100000) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>
                    {serviceUrgent && (
                      <span className="text-[9px] text-amber-600 font-bold flex items-center gap-0.5 mt-1">
                        <AlertTriangle className="w-3 h-3 text-amber-500" />{" "}
                        Service recommended soon
                      </span>
                    )}
                  </div>
                </div>

                {canWrite && (
                  <div className="flex items-center justify-end gap-2 border-t pt-3 mt-4">
                    <button
                      id={`edit-vehicle-${v.vehicle_id}`}
                      onClick={() => openEditModal(v)}
                      className="text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg py-1 px-2.5 flex items-center gap-1.5 font-sans"
                    >
                      <Edit2 className="w-3 h-3" />
                      Configure
                    </button>
                    <button
                      id={`delete-vehicle-${v.vehicle_id}`}
                      onClick={() => onDeleteVehicle(v.vehicle_id)}
                      className="text-slate-400 hover:text-red-600 p-1.5 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Add/Edit Vehicle Modal overlay */}
      {showModal && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in"
          id="modal-container-vehicles"
        >
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg shadow-xl overflow-hidden flex flex-col p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-bold text-slate-950 text-base">
                {editingVehicle
                  ? `Configure Bus Unit: ${editingVehicle.registration_number}`
                  : "Registry New Bus Terminal Asset"}
              </h3>
              <button
                id="btn-close-vehicle-modal"
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-slate-150 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Registration Number
                  </label>
                  <input
                    id="vehicle-form-reg"
                    type="text"
                    required
                    maxLength={15}
                    placeholder="e.g. WP ND-4004 / LP-40"
                    value={regNum}
                    onChange={(e) => setRegNum(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Vehicle Classification
                  </label>
                  <select
                    id="vehicle-form-type"
                    value={vType}
                    onChange={(e) => setVType(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold"
                  >
                    <option value="Single Decker">
                      Single Decker Bus (Standard)
                    </option>
                    <option value="Double Decker">
                      Double Decker Bus (City Transit)
                    </option>
                    <option value="Electric Bus">
                      Electric Bus (Eco-Transit)
                    </option>
                    <option value="Articulated Bus">
                      Articulated Bus (High Capacity)
                    </option>
                    <option value="Coach">Private Coach Bus (Intercity)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Total Seating Capacity
                  </label>
                  <input
                    id="vehicle-form-capacity"
                    type="number"
                    required
                    min="1"
                    max="150"
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Initial Mileage (KM)
                  </label>
                  <input
                    id="vehicle-form-mileage"
                    type="number"
                    required
                    min="0"
                    value={mileage}
                    onChange={(e) => setMileage(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Fuel Infrastructure
                  </label>
                  <select
                    id="vehicle-form-fuel"
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold"
                  >
                    <option value="Diesel">Diesel Fuel Injection</option>
                    <option value="Electric">Lithium Electric Cell</option>
                    <option value="CNG">Compressed Natural Gas (CNG)</option>
                    <option value="Hybrid">Hybrid Electric/Diesel</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Fleet Status Flag
                  </label>
                  <select
                    id="vehicle-form-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold"
                  >
                    <option value="Available">Available for Dispatch</option>
                    <option value="Maintenance">
                      Checked into maintenance / Repairs
                    </option>
                    <option value="On Trip">Operating (Tied on trip)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t pt-3 border-slate-100">
                <button
                  id="btn-vehicle-modal-cancel"
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 select-none text-slate-600 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  id="btn-vehicle-modal-save"
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg select-none shadow-sm transition-all font-semibold"
                >
                  {editingVehicle ? "Save Configuration" : "Register Unit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
