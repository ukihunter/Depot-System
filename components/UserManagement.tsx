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

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border rounded-xl bg-slate-50"
          ></input>
        </div>

        {canWrite && (
          <button
            onClick={openAddModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add User
          </button>
        )}
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredUsers.length === 0 ? (
          <div className="md:col-span-3 text-center bg-white rounded-xl p-10 text-xs text-slate-500">
            No users found
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm">{user.fullName}</h3>

                    <p className="text-[10px] text-slate-400">
                      @{user.username}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                    user.status === "ACTIVE"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div className="mt-4 border-t pt-3 space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="flex gap-1 text-slate-500">
                    <Mail className="w-3 h-3" />
                    Email
                  </span>

                  <span className="truncate max-w-[150px]">{user.email}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex gap-1 text-slate-500">
                    <Shield className="w-3 h-3" />
                    Role
                  </span>

                  <span className="font-semibold">{user.role}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex gap-1 text-slate-500">
                    <Building className="w-3 h-3" />
                    Depot
                  </span>

                  <span>{user.depot?.name ?? "-"}</span>
                </div>
              </div>

              {canWrite && (
                <div className="flex justify-end gap-2 mt-4 pt-3 border-t">
                  <button
                    onClick={() => openEditModal(user)}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg flex gap-1"
                  >
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </button>

                  <button
                    onClick={() => onDeleteUser(user.id)}
                    className="text-xs bg-red-50 text-red-600 px-2 rounded-lg"
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
        <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
            <div className="flex justify-between border-b pb-3 mb-4">
              <h2 className="font-bold">
                {editingUser ? "Edit User" : "Create User"}
              </h2>

              <button onClick={() => setShowModal(false)}>
                <X />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <input
                required
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />

              <input
                required
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />

              <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />

              <input
                placeholder={
                  editingUser ? "New Password (optional)" : "Password"
                }
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border p-2 rounded-lg"
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
                className="w-full border p-2 rounded-lg"
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
                className="w-full border p-2 rounded-lg"
              >
                <option value="ACTIVE">Active</option>

                <option value="INACTIVE">Inactive</option>
              </select>

              <div className="flex justify-end gap-3 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
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
