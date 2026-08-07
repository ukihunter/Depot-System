import React, { useState } from "react";
import {
  Search,
  Plus,
  Building,
  Phone,
  Mail,
  MapPin,
  Edit2,
  Trash2,
  X,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { Depot } from "../type";

interface DepotManagementProps {
  depots: Depot[];
  onAddDepot: (depot: Partial<Depot>) => Promise<any>;
  onUpdateDepot: (depotId: number, updates: Partial<Depot>) => Promise<any>;
  onDeleteDepot: (depotId: number) => Promise<any>;
  userRole: string;
}

export default function DepotManagement({
  depots,
  onAddDepot,
  onUpdateDepot,
  onDeleteDepot,
  userRole,
}: DepotManagementProps) {
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingDepot, setEditingDepot] = useState<Depot | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(true);

  const canWrite = userRole === "MAIN_ADMIN" || userRole === "DEPOT_ADMIN";

  const resetForm = () => {
    setName("");
    setCode("");
    setAddress("");
    setPhone("");
    setEmail("");
    setIsActive(true);
  };

  const openAddModal = () => {
    setEditingDepot(null);
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (depot: Depot) => {
    setEditingDepot(depot);

    setName(depot.name);
    setCode(depot.code);
    setAddress(depot.address ?? "");
    setPhone(depot.phone ?? "");
    setEmail(depot.email ?? "");
    setIsActive(depot.isActive);

    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !code) {
      return;
    }

    const payload = {
      name,
      code,
      address,
      phone,
      email,
      isActive,
    };

    if (editingDepot) {
      await onUpdateDepot(editingDepot.id, payload);
    } else {
      await onAddDepot(payload);
    }

    setShowModal(false);
    resetForm();
  };

  const filteredDepots = depots.filter(
    (depot) =>
      depot.name.toLowerCase().includes(search.toLowerCase()) ||
      depot.code.toLowerCase().includes(search.toLowerCase()) ||
      (depot.address ?? "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div id="depot-management-root" className="space-y-6">
      {/* Search + Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-[#8a96a0] absolute left-3 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            placeholder="Search depots..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-9"
          />
        </div>

        {canWrite && (
          <button
            onClick={openAddModal}
            className="btn-primary w-full sm:w-auto text-xs"
          >
            <Plus className="w-4 h-4" />
            Add New Depot
          </button>
        )}
      </div>

      {/* Depot Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDepots.length === 0 ? (
          <div className="md:col-span-3 text-center py-12 glass-panel rounded-2xl text-[#8a96a0] text-xs">
            No depot records found.
          </div>
        ) : (
          filteredDepots.map((depot) => (
            <div
              key={depot.id}
              className="glass-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#6b8f3c]/20 border border-[#6b8f3c]/30 flex items-center justify-center text-[#8bb552]">
                      <Building className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-sm text-[#ede9e3]">
                        {depot.name}
                      </h3>

                      <p className="text-[10px] text-[#8a96a0] font-mono">
                        {depot.code}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`badge ${
                      depot.isActive
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    {depot.isActive ? "ACTIVE" : "INACTIVE"}
                  </span>
                </div>

                <div className="mt-4 border-t border-[#27323a] pt-3 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#8a96a0] flex gap-1 items-center">
                      <MapPin className="w-3 h-3" />
                      Address
                    </span>

                    <span className="text-[#ede9e3] text-right max-w-[180px]">
                      {depot.address || "-"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#8a96a0] flex gap-1 items-center">
                      <Phone className="w-3 h-3" />
                      Phone
                    </span>

                    <span className="text-[#ede9e3]">{depot.phone || "-"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#8a96a0] flex gap-1 items-center">
                      <Mail className="w-3 h-3" />
                      Email
                    </span>

                    <span className="truncate max-w-[150px] text-[#ede9e3]">
                      {depot.email || "-"}
                    </span>
                  </div>
                </div>
              </div>

              {canWrite && (
                <div className="flex justify-end gap-2 border-t border-[#27323a] mt-4 pt-3">
                  <button
                    onClick={() => openEditModal(depot)}
                    className="btn-secondary py-1 px-3 text-xs"
                  >
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </button>

                  <button
                    onClick={() => onDeleteDepot(depot.id)}
                    className="p-1.5 rounded-lg border border-[#b85454]/30 bg-[#b85454]/10 text-[#b85454] hover:bg-[#b85454]/20 transition-colors text-xs"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Modal */}

      {showModal && (
        <div className="modal-overlay animate-fade-in">
          <div className="modal-content space-y-4">
            <div className="flex justify-between items-center border-b border-[#27323a] pb-3">
              <h2 className="font-bold text-[#ede9e3]">
                {editingDepot ? "Edit Depot" : "Register New Depot"}
              </h2>

              <button onClick={() => setShowModal(false)} className="p-1 text-[#8a96a0] hover:text-[#ede9e3]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <input
                required
                placeholder="Depot Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field w-full"
              />

              <input
                required
                placeholder="Depot Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="input-field w-full"
              />

              <input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input-field w-full"
              />

              <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field w-full"
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field w-full"
              />

              <label className="flex gap-2 items-center text-[#ede9e3] font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="rounded border-[#27323a] bg-[#0b0f12] text-[#6b8f3c] accent-[#6b8f3c]"
                />
                Active Depot
              </label>

              <div className="flex justify-end gap-3 pt-3 border-t border-[#27323a]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn-primary"
                >
                  {editingDepot ? "Save Changes" : "Create Depot"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
