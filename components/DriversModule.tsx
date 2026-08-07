import React, { useState } from "react";
import { Driver } from "../type";
import {
  Search,
  Plus,
  UserPlus,
  Phone,
  CreditCard,
  ShieldAlert,
  BadgeCheck,
  PhoneCall,
  Trash2,
  Edit2,
  X,
} from "lucide-react";

interface DriversModuleProps {
  drivers: Driver[];
  onAddDriver: (driver: Partial<Driver>) => Promise<any>;
  onUpdateDriver: (driverId: string, updates: Partial<Driver>) => Promise<any>;
  onDeleteDriver: (driverId: string) => Promise<any>;
  userRole: string;
}

export default function DriversModule({
  drivers,
  onAddDriver,
  onUpdateDriver,
  onDeleteDriver,
  userRole,
}: DriversModuleProps) {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseExpiry, setLicenseExpiry] = useState("");
  const [workingHours, setWorkingHours] = useState(0);
  const [status, setStatus] = useState<"Active" | "Inactive" | "On Trip">(
    "Active",
  );

  const canWrite = userRole === "MAIN_ADMIN" || userRole === "DEPOT_ADMIN";

  // System Date is June 14, 2026
  const CURRENT_TIME = new Date("2026-06-14");

  const checkLicenseStatus = (expiryStr: string) => {
    const expDate = new Date(expiryStr);
    const timeDiff = expDate.getTime() - CURRENT_TIME.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff < 0) {
      return {
        status: "Expired",
        color: "text-red-600 bg-red-100 border-red-200",
        isExpired: true,
      };
    } else if (daysDiff <= 30) {
      return {
        status: "Expiring Soon",
        color: "text-amber-600 bg-amber-100 border-amber-200",
        isExpired: false,
      };
    } else {
      return {
        status: "Valid",
        color: "text-emerald-600 bg-emerald-100 border-emerald-200",
        isExpired: false,
      };
    }
  };

  const openAddModal = () => {
    setEditingDriver(null);
    setName("");
    setNic("");
    setPhone("");
    setAddress("");
    setLicenseNumber("");
    setLicenseExpiry("2027-12-31");
    setWorkingHours(32);
    setStatus("Active");
    setShowModal(true);
  };

  const openEditModal = (d: Driver) => {
    setEditingDriver(d);
    setName(d.name);
    setNic(d.nic);
    setPhone(d.phone);
    setAddress(d.address);
    setLicenseNumber(d.license_number);
    setLicenseExpiry(d.license_expiry);
    setWorkingHours(d.working_hours);
    setStatus(d.status);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !nic || !phone || !licenseNumber || !licenseExpiry) return;

    if (editingDriver) {
      await onUpdateDriver(editingDriver.driver_id, {
        name,
        nic,
        phone,
        address,
        license_number: licenseNumber,
        license_expiry: licenseExpiry,
        working_hours: Number(workingHours),
        status,
      });
    } else {
      await onAddDriver({
        name,
        nic,
        phone,
        address,
        license_number: licenseNumber,
        license_expiry: licenseExpiry,
        working_hours: Number(workingHours),
        status,
      });
    }
    setShowModal(false);
  };

  const filteredDrivers = drivers.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.nic.toLowerCase().includes(search.toLowerCase()) ||
      d.license_number.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div id="drivers-module-root" className="space-y-6">
      {/* Filtering and Actions Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-[#8a96a0] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-drivers"
            type="text"
            placeholder="Search drivers (Name, NIC, Licence)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-9"
          />
        </div>
        {canWrite && (
          <button
            id="btn-add-driver"
            onClick={openAddModal}
            className="btn-primary w-full sm:w-auto text-xs"
          >
            <Plus className="w-4 h-4" />
            Add New Driver
          </button>
        )}
      </div>

      {/* Grid Layout of Driver Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDrivers.length === 0 ? (
          <div className="md:col-span-3 text-center py-12 glass-panel rounded-2xl text-[#8a96a0] text-xs">
            No driver files found matching your parameters.
          </div>
        ) : (
          filteredDrivers.map((d) => {
            const licenseCheck = checkLicenseStatus(d.license_expiry);
            const isOverworked = d.working_hours >= 45;

            return (
              <div
                key={d.driver_id}
                id={`driver-${d.driver_id}`}
                className="glass-card p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#6b8f3c]/20 border border-[#6b8f3c]/30 flex items-center justify-center text-[#8bb552] font-bold text-sm">
                        {d.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#ede9e3] text-sm flex items-center gap-1.5">
                          {d.name}
                          {d.status === "On Trip" && (
                            <span className="w-2 h-2 rounded-full bg-[#5fa87a] animate-pulse"></span>
                          )}
                        </h4>
                        <span className="text-[10px] text-[#8a96a0] font-mono">
                          ID: {d.driver_id}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`badge ${
                        d.status === "Active"
                          ? "badge-success"
                          : d.status === "On Trip"
                            ? "badge-primary"
                            : "badge-amber"
                      }`}
                    >
                      {d.status}
                    </span>
                  </div>

                  {/* Core Details */}
                  <div className="mt-4 space-y-2 border-t pt-3 border-[#27323a] text-xs">
                    <div className="flex justify-between items-center text-[#8a96a0]">
                      <span>NIC Reference</span>
                      <span className="font-mono font-medium text-[#ede9e3]">
                        {d.nic}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#8a96a0]">
                      <span>Phone Line</span>
                      <span className="font-mono font-medium text-[#ede9e3] flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#8a96a0]" />
                        {d.phone}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#8a96a0]">
                      <span>License ID</span>
                      <span className="font-mono font-medium text-[#c49a5c] flex items-center gap-1">
                        <CreditCard className="w-3" />
                        {d.license_number}
                      </span>
                    </div>

                    {/* License Expiry Tracking */}
                    <div className="flex justify-between items-center text-[#8a96a0]">
                      <span>License Status</span>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded border font-bold ${
                          licenseCheck.isExpired
                            ? "bg-[#b85454]/15 text-[#b85454] border-[#b85454]/30"
                            : licenseCheck.status === "Expiring Soon"
                              ? "bg-[#c47a4a]/15 text-[#c47a4a] border-[#c47a4a]/30"
                              : "bg-[#5fa87a]/15 text-[#5fa87a] border-[#5fa87a]/30"
                        }`}
                      >
                        {licenseCheck.status} ({d.license_expiry})
                      </span>
                    </div>

                    {/* Weekly hours meter */}
                    <div className="space-y-1 pt-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-[#8a96a0]">
                          Weekly Accumulated Hours
                        </span>
                        <span
                          className={`font-bold ${isOverworked ? "text-[#c47a4a]" : "text-[#ede9e3]"}`}
                        >
                          {d.working_hours} / 48 hrs
                        </span>
                      </div>
                      <div className="w-full bg-[#12181d] border border-[#27323a] rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isOverworked ? "bg-[#c47a4a]" : "bg-[#6b8f3c]"
                          }`}
                          style={{
                            width: `${Math.min((d.working_hours / 48) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                      {isOverworked && (
                        <span className="text-[9px] text-[#c47a4a] font-semibold flex items-center gap-1 mt-0.5">
                          <ShieldAlert className="w-3 h-3" /> Fatigue threshold
                          near: Rest requested
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {canWrite && (
                  <div className="flex items-center justify-end gap-2 border-t border-[#27323a] pt-3 mt-4">
                    <button
                      id={`edit-${d.driver_id}`}
                      onClick={() => openEditModal(d)}
                      className="btn-secondary py-1 px-3 text-xs"
                    >
                      <Edit2 className="w-3 h-3" />
                      Configure
                    </button>
                    <button
                      id={`delete-${d.driver_id}`}
                      onClick={() => onDeleteDriver(d.driver_id)}
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

      {/* Write/Edit Driver Overlay Modal */}
      {showModal && (
        <div
          className="modal-overlay animate-fade-in"
          id="modal-container-drivers"
        >
          <div className="modal-content space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-[#27323a]">
              <h3 className="font-bold text-[#ede9e3] text-base">
                {editingDriver
                  ? `Configure Driver File: ${editingDriver.name}`
                  : "Register New Depot Driver"}
              </h3>
              <button
                id="btn-close-driver-modal"
                onClick={() => setShowModal(false)}
                className="p-1 rounded-lg text-[#8a96a0] hover:text-[#ede9e3] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 md:col-span-2">
                  <label className="font-semibold text-[#8a96a0]">
                    Driver Full Name
                  </label>
                  <input
                    id="driver-form-name"
                    type="text"
                    required
                    placeholder="e.g. Richard Hendricks"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field w-full font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    National Card ID (NIC)
                  </label>
                  <input
                    id="driver-form-nic"
                    type="text"
                    required
                    placeholder="e.g., 90123456V / 19901..."
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                    className="input-field w-full font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    Phone Connection
                  </label>
                  <input
                    id="driver-form-phone"
                    type="text"
                    required
                    placeholder="e.g. +94 77 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-field w-full font-mono"
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="font-semibold text-[#8a96a0]">
                    Resident Address
                  </label>
                  <input
                    id="driver-form-address"
                    type="text"
                    placeholder="Residential street, Ward, Zip"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input-field w-full font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    License Number (D/L)
                  </label>
                  <input
                    id="driver-form-license"
                    type="text"
                    required
                    placeholder="e.g. B-908234-X"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    License Expiry Date
                  </label>
                  <input
                    id="driver-form-expiry"
                    type="date"
                    required
                    value={licenseExpiry}
                    onChange={(e) => setLicenseExpiry(e.target.value)}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    Weekly Working Hours Initial
                  </label>
                  <input
                    id="driver-form-hours"
                    type="number"
                    min="0"
                    max="80"
                    value={workingHours}
                    onChange={(e) => setWorkingHours(Number(e.target.value))}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#8a96a0]">
                    Availability status
                  </label>
                  <select
                    id="driver-form-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="input-field w-full font-semibold"
                  >
                    <option value="Active">Active / On Duty</option>
                    <option value="Inactive">Inactive / Rest</option>
                    <option value="On Trip">Operating On Trip</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t pt-3 border-[#27323a]">
                <button
                  id="btn-driver-modal-cancel"
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  id="btn-driver-modal-save"
                  type="submit"
                  className="btn-primary"
                >
                  {editingDriver ? "Save Changes" : "Register Driver"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
