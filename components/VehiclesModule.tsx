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

  const canWrite = userRole === "MAIN_ADMIN" || userRole === "DEPOT_ADMIN";

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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-[#8a96a0] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-vehicles"
            type="text"
            placeholder="Search fleet (Reg Number, Type, Fuel)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-9"
          />
        </div>
        {canWrite && (
          <button
            id="btn-add-vehicle"
            onClick={openAddModal}
            className="btn-primary w-full sm:w-auto text-xs"
          >
            <Plus className="w-4 h-4" />
            Register Vehicle
          </button>
        )}
      </div>

      {/* Grid of Vehicles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVehicles.length === 0 ? (
          <div className="md:col-span-4 text-center py-12 glass-panel rounded-2xl text-[#8a96a0] text-xs">
            No buses or fleet assets registered under these coordinates.
          </div>
        ) : (
          filteredVehicles.map((v) => {
            const serviceUrgent = v.mileage > 80000;

            return (
              <div
                key={v.vehicle_id}
                id={`vehicle-${v.vehicle_id}`}
                className="glass-card p-5 flex flex-col justify-between border-t-4"
                style={{
                  borderTopColor:
                    v.status === "Available"
                      ? "#5fa87a"
                      : v.status === "Maintenance"
                        ? "#c47a4a"
                        : "#6b8f3c",
                }}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-[#ede9e3] tracking-tight text-sm font-mono bg-[#12181d] px-2 py-0.5 rounded-md border border-[#27323a]">
                          {v.registration_number}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#8a96a0] font-mono block mt-1">
                        FLEET ID: {v.vehicle_id}
                      </span>
                    </div>

                    <span
                      className={`badge ${
                        v.status === "Available"
                          ? "badge-success"
                          : v.status === "Maintenance"
                            ? "badge-warning"
                            : "badge-primary"
                      }`}
                    >
                      {v.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs border-b border-dashed pb-3 border-[#27323a]">
                    <div className="flex justify-between text-[#8a96a0]">
                      <span>Vehicle Category</span>
                      <span className="font-semibold text-[#ede9e3]">
                        {v.vehicle_type}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#8a96a0]">
                      <span>Fuel Type</span>
                      <span className="badge badge-amber font-bold text-[9px]">
                        {v.fuel_type}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#8a96a0]">
                      <span>Seating Capacity</span>
                      <span className="font-sans font-bold text-[#ede9e3]">
                        {v.seating_capacity} Seats
                      </span>
                    </div>
                    <div className="flex justify-between text-[#8a96a0]">
                      <span>Total Mileage</span>
                      <span className="font-mono font-bold text-[#ede9e3] flex items-center gap-1">
                        <Gauge className="w-3.5 h-3.5 text-[#8a96a0]" />
                        {v.mileage.toLocaleString()} KM
                      </span>
                    </div>
                  </div>

                  {/* Health Indicator bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-[#8a96a0]">Total Run wear</span>
                      <span className="font-bold text-[#ede9e3]">
                        {Math.min(Math.round(v.mileage / 1000), 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-[#12181d] border border-[#27323a] rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${serviceUrgent ? "bg-[#c47a4a]" : "bg-[#6b8f3c]"}`}
                        style={{
                          width: `${Math.min((v.mileage / 100000) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>
                    {serviceUrgent && (
                      <span className="text-[9px] text-[#c47a4a] font-bold flex items-center gap-0.5 mt-1">
                        <AlertTriangle className="w-3 h-3 text-[#c47a4a]" />{" "}
                        Service recommended soon
                      </span>
                    )}
                  </div>
                </div>

                {canWrite && (
                  <div className="flex items-center justify-end gap-2 border-t border-[#27323a] pt-3 mt-4">
                    <button
                      id={`edit-vehicle-${v.vehicle_id}`}
                      onClick={() => openEditModal(v)}
                      className="btn-secondary py-1 px-2.5 text-xs flex items-center gap-1.5 font-sans"
                    >
                      <Edit2 className="w-3 h-3" />
                      Configure
                    </button>
                    <button
                      id={`delete-vehicle-${v.vehicle_id}`}
                      onClick={() => onDeleteVehicle(v.vehicle_id)}
                      className="p-1.5 rounded-lg border border-[#b85454]/30 bg-[#b85454]/10 text-[#b85454] hover:bg-[#b85454]/20 transition-colors"
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
          className="modal-overlay animate-fade-in"
          id="modal-container-vehicles"
        >
          <div className="modal-content space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-[#27323a]">
              <h3 className="font-bold text-[#ede9e3] text-base">
                {editingVehicle
                  ? `Configure Bus Unit: ${editingVehicle.registration_number}`
                  : "Registry New Bus Terminal Asset"}
              </h3>
              <button
                id="btn-close-vehicle-modal"
                onClick={() => setShowModal(false)}
                className="p-1 rounded-lg text-[#8a96a0] hover:text-[#ede9e3] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
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
                    className="input-field w-full font-bold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    Vehicle Classification
                  </label>
                  <select
                    id="vehicle-form-type"
                    value={vType}
                    onChange={(e) => setVType(e.target.value as any)}
                    className="input-field w-full font-semibold"
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
                  <label className="font-semibold text-[#8a96a0]">
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
                    className="input-field w-full font-semibold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    Initial Mileage (KM)
                  </label>
                  <input
                    id="vehicle-form-mileage"
                    type="number"
                    required
                    min="0"
                    value={mileage}
                    onChange={(e) => setMileage(Number(e.target.value))}
                    className="input-field w-full font-semibold font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    Fuel Infrastructure
                  </label>
                  <select
                    id="vehicle-form-fuel"
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value as any)}
                    className="input-field w-full font-semibold"
                  >
                    <option value="Diesel">Diesel Fuel Injection</option>
                    <option value="Electric">Lithium Electric Cell</option>
                    <option value="CNG">Compressed Natural Gas (CNG)</option>
                    <option value="Hybrid">Hybrid Electric/Diesel</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    Fleet Status Flag
                  </label>
                  <select
                    id="vehicle-form-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="input-field w-full font-semibold"
                  >
                    <option value="Available">Available for Dispatch</option>
                    <option value="Maintenance">
                      Checked into maintenance / Repairs
                    </option>
                    <option value="On Trip">Operating (Tied on trip)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t pt-3 border-[#27323a]">
                <button
                  id="btn-vehicle-modal-cancel"
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  id="btn-vehicle-modal-save"
                  type="submit"
                  className="btn-primary"
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
