import type { Route } from "@/type";

type RouteResponse = {
  route?: Route;
  error?: string;
};

type RoutesResponse = {
  routes?: Route[];
  error?: string;
};

export async function getRoutes(): Promise<Route[]> {
  const response = await fetch("/api/routes", {
    method: "GET",
    cache: "no-store",
  });

  const data: RoutesResponse = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to load routes.");
  }

  return data.routes ?? [];
}

export async function createRoute(payload: Partial<Route>): Promise<Route> {
  const response = await fetch("/api/routes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      routeName: payload.route_name,
      startLocation: payload.start_location,
      endLocation: payload.end_location,
      stops: payload.stops,
      distance: payload.distance,
      estimatedDuration: payload.estimated_duration,
      status: payload.status,
    }),
  });

  const data: RouteResponse = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to create route.");
  }

  return data.route!;
}

export async function updateRoute(
  routeId: string,
  payload: Partial<Route>,
): Promise<Route> {
  const body: any = {};
  if (payload.route_name !== undefined) body.routeName = payload.route_name;
  if (payload.start_location !== undefined) body.startLocation = payload.start_location;
  if (payload.end_location !== undefined) body.endLocation = payload.end_location;
  if (payload.stops !== undefined) body.stops = payload.stops;
  if (payload.distance !== undefined) body.distance = payload.distance;
  if (payload.estimated_duration !== undefined) body.estimatedDuration = payload.estimated_duration;
  if (payload.status !== undefined) body.status = payload.status;

  const response = await fetch(`/api/routes/${routeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data: RouteResponse = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to update route.");
  }

  return data.route!;
}

export async function deleteRoute(routeId: string): Promise<void> {
  const response = await fetch(`/api/routes/${routeId}`, {
    method: "DELETE",
  });

  const data: { message?: string; error?: string } = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to delete route.");
  }
}
