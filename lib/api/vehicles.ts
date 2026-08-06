import type { Vehicle } from "@/type";

type VehicleResponse = {
  success: boolean;
  vehicle: Vehicle;
  message?: string;
};

type VehiclesResponse = {
  success: boolean;
  vehicles: Vehicle[];
  message?: string;
};

export async function getVehicles(depotId?: number | null): Promise<Vehicle[]> {
  const query =
    depotId === undefined || depotId === null ? "" : `?depotId=${depotId}`;

  const response = await fetch(`/api/vehicles${query}`, {
    method: "GET",
    cache: "no-store",
  });

  const data: VehiclesResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to load vehicles.");
  }

  return data.vehicles;
}

export async function createVehicle(
  payload: Partial<Vehicle>,
  depotId?: number | null,
): Promise<Vehicle> {
  const response = await fetch("/api/vehicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      depot_id: depotId,
    }),
  });

  const data: VehicleResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to create vehicle.");
  }

  return data.vehicle;
}

export async function updateVehicle(
  vehicleId: string,
  payload: Partial<Vehicle>,
): Promise<Vehicle> {
  const response = await fetch(`/api/vehicles/${vehicleId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data: VehicleResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to update vehicle.");
  }

  return data.vehicle;
}

export async function deleteVehicle(vehicleId: string): Promise<void> {
  const response = await fetch(`/api/vehicles/${vehicleId}`, {
    method: "DELETE",
  });

  const data: { success: boolean; message?: string } = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to delete vehicle.");
  }
}
