import React, { useState } from "react";
import {
  Search,
  Plus,
  User,
  Mail,
  Shield,
  Building,
  Edit2,
  Trash2,
  X,
  UserCheck,
  UserX,
} from "lucide-react";

import { User as UserType, Depot } from "../type";

interface UserManagementProps {
  users: UserType[];
  depots: Depot[];

  onAddUser: (user: Partial<UserType>) => Promise<any>;

  onUpdateUser: (userId: number, updates: Partial<UserType>) => Promise<any>;

  onDeleteUser: (userId: number) => Promise<any>;

  userRole: string;
}

export default function UserManagement({
  users,
  depots,
  onAddUser,
  onUpdateUser,
  onDeleteUser,
  userRole,
}: UserManagementProps) {
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingUser, setEditingUser] = useState<UserType | null>(null);

  // Form states

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("STAFF");

  const [status, setStatus] = useState("ACTIVE");

  const [depotId, setDepotId] = useState<number | "">("");

  const canWrite = userRole === "MAIN_ADMIN";

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setRole("STAFF");
    setStatus("ACTIVE");
    setDepotId("");
  };

  const openAddModal = () => {
    setEditingUser(null);

    resetForm();

    setShowModal(true);
  };

  const openEditModal = (user: UserType) => {
    setEditingUser(user);

    setFullName(user.fullName);

    setEmail(user.email);

    setUsername(user.username);

    setRole(user.role);

    setStatus(user.status);

    setDepotId(user.depotId ?? "");

    setPassword("");

    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: any = {
      fullName,

      email,

      username,

      role,

      status,

      depotId: depotId === "" ? null : depotId,
    };

    if (password) {
      payload.password = password;
    }

    if (editingUser) {
      await onUpdateUser(editingUser.id, payload);
    } else {
      await onAddUser({
        ...payload,
        password,
      });
    }

    setShowModal(false);

    resetForm();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Search */}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a96a0]" />

          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-9"
          />
        </div>

        {canWrite && (
          <button
            onClick={openAddModal}
            className="btn-primary text-xs"
          >
            <Plus className="w-4 h-4" />
            Add User
          </button>
        )}
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredUsers.length === 0 ? (
          <div className="md:col-span-3 text-center glass-panel rounded-2xl p-10 text-xs text-[#8a96a0]">
            No users found
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="glass-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#6b8f3c]/20 border border-[#6b8f3c]/30 flex items-center justify-center text-[#8bb552]">
                      <User className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-sm text-[#ede9e3]">{user.fullName}</h3>

                      <p className="text-[10px] text-[#8a96a0]">
                        @{user.username}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`badge ${
                      user.status === "ACTIVE"
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>

                <div className="mt-4 border-t border-[#27323a] pt-3 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="flex gap-1 text-[#8a96a0]">
                      <Mail className="w-3 h-3" />
                      Email
                    </span>

                    <span className="truncate max-w-[150px] text-[#ede9e3]">{user.email}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="flex gap-1 text-[#8a96a0]">
                      <Shield className="w-3 h-3" />
                      Role
                    </span>

                    <span className="font-semibold text-[#c49a5c]">{user.role}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="flex gap-1 text-[#8a96a0]">
                      <Building className="w-3 h-3" />
                      Depot
                    </span>

                    <span className="text-[#ede9e3]">{user.depot?.name ?? "-"}</span>
                  </div>
                </div>
              </div>

              {canWrite && (
                <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-[#27323a]">
                  <button
                    onClick={() => openEditModal(user)}
                    className="btn-secondary py-1 px-3 text-xs"
                  >
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </button>

                  <button
                    onClick={() => onDeleteUser(user.id)}
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
                {editingUser ? "Edit User" : "Create User"}
              </h2>

              <button onClick={() => setShowModal(false)} className="p-1 text-[#8a96a0] hover:text-[#ede9e3]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <input
                required
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input-field w-full"
              />

              <input
                required
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field w-full"
              />

              <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field w-full"
              />

              <input
                placeholder={
                  editingUser ? "New Password (optional)" : "Password"
                }
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field w-full"
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="input-field w-full"
              >
                <option value="MAIN_ADMIN">Main Admin</option>

                <option value="DEPOT_ADMIN">Depot Admin</option>

                <option value="STAFF">Staff</option>

                <option value="DRIVER">Driver</option>
              </select>

              <select
                value={depotId}
                onChange={(e) =>
                  setDepotId(e.target.value ? Number(e.target.value) : "")
                }
                className="input-field w-full"
              >
                <option value="">No Depot</option>

                {depots.map((depot) => (
                  <option key={depot.id} value={depot.id}>
                    {depot.name}
                  </option>
                ))}
              </select>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="input-field w-full"
              >
                <option value="ACTIVE">Active</option>

                <option value="INACTIVE">Inactive</option>
              </select>

              <div className="flex justify-end gap-3 pt-3 border-t border-[#27323a]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>

                <button type="submit" className="btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
