import type { Driver } from "@/type";

type DriverResponse = {
  success: boolean;
  driver: Driver;
  message?: string;
};

type DriversResponse = {
  success: boolean;
  drivers: Driver[];
  message?: string;
};

export async function getDrivers(depotId?: number | null): Promise<Driver[]> {
  const query = depotId === undefined || depotId === null ? "" : `?depotId=${depotId}`;

  const response = await fetch(`/api/drivers${query}`, {
    method: "GET",
    cache: "no-store",
  });

  const data: DriversResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to load drivers.");
  }

  return data.drivers;
}

export async function createDriver(
  payload: Partial<Driver>,
  depotId?: number | null,
): Promise<Driver> {
  const response = await fetch("/api/drivers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      depot_id: depotId,
    }),
  });

  const data: DriverResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to create driver.");
  }

  return data.driver;
}

export async function updateDriver(
  driverId: string,
  payload: Partial<Driver>,
): Promise<Driver> {
  const response = await fetch(`/api/drivers/${driverId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data: DriverResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to update driver.");
  }

  return data.driver;
}

export async function deleteDriver(driverId: string): Promise<void> {
  const response = await fetch(`/api/drivers/${driverId}`, {
    method: "DELETE",
  });

  const data: { success: boolean; message?: string } = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to delete driver.");
  }
}
