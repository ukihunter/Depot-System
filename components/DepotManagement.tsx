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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            placeholder="Search depots..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {canWrite && (
          <button
            onClick={openAddModal}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add New Depot
          </button>
        )}
      </div>

      {/* Depot Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDepots.length === 0 ? (
          <div className="md:col-span-3 text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No depot records found.
          </div>
        ) : (
          filteredDepots.map((depot) => (
            <div
              key={depot.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                      <Building className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-sm text-slate-900">
                        {depot.name}
                      </h3>

                      <p className="text-[10px] text-slate-400 font-mono">
                        {depot.code}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                      depot.isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {depot.isActive ? "ACTIVE" : "INACTIVE"}
                  </span>
                </div>

                <div className="mt-4 border-t pt-3 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 flex gap-1 items-center">
                      <MapPin className="w-3 h-3" />
                      Address
                    </span>

                    <span className="text-slate-800 text-right max-w-[180px]">
                      {depot.address || "-"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500 flex gap-1 items-center">
                      <Phone className="w-3 h-3" />
                      Phone
                    </span>

                    <span>{depot.phone || "-"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500 flex gap-1 items-center">
                      <Mail className="w-3 h-3" />
                      Email
                    </span>

                    <span className="truncate max-w-[150px]">
                      {depot.email || "-"}
                    </span>
                  </div>
                </div>
              </div>

              {canWrite && (
                <div className="flex justify-end gap-2 border-t mt-4 pt-3">
                  <button
                    onClick={() => openEditModal(depot)}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-blue-100"
                  >
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </button>

                  <button
                    onClick={() => onDeleteDepot(depot.id)}
                    className="text-xs bg-red-50 text-red-600 px-2 py-1.5 rounded-lg hover:bg-red-100"
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
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="font-bold text-slate-900">
                {editingDepot ? "Edit Depot" : "Register New Depot"}
              </h2>

              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <input
                required
                placeholder="Depot Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                required
                placeholder="Depot Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <label className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                Active Depot
              </label>

              <div className="flex justify-end gap-3 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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
