import type { Depot } from "@/type";

export async function getDepots(): Promise<Depot[]> {
  const response = await fetch("/api/depots", {
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to load depots");
  }

  return data.depots;
}

export async function createDepot(depot: Partial<Depot>): Promise<Depot> {
  const response = await fetch("/api/depots", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(depot),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to create depot");
  }

  return data.depot;
}

export async function updateDepot(
  id: string,
  depot: Partial<Depot>,
): Promise<Depot> {
  const response = await fetch(`/api/depots/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(depot),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to update depot");
  }

  return data.depot;
}

export async function deleteDepot(id: string) {
  const response = await fetch(`/api/depots/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to delete depot");
  }

  return true;
}
