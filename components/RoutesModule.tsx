import React, { useEffect, useRef, useState } from "react";
import {
  Plus,
  Search,
  MapPin,
  Eye,
  Edit2,
  Trash2,
  X,
  Navigation,
  Compass,
  Layers,
  AlertCircle,
  Loader2,
  RefreshCw,
  Route as RouteIcon,
} from "lucide-react";

import { Route } from "../type";

declare global {
  interface Window {
    L: any;
  }
}

interface RoutesModuleProps {
  routes: Route[];
  onCreateRoute: (route: Partial<Route>) => Promise<any>;
  onUpdateRoute: (routeId: string, updates: Partial<Route>) => Promise<any>;
  onDeleteRoute: (routeId: string) => Promise<any>;
  userRole: string;
}

const LOCATION_COORDS: Record<string, [number, number]> = {
  "Main Depot Hall A": [6.9344, 79.8428],
  "Fort Central Junction": [6.931, 79.845],
  "Galle Road Terminal": [6.918, 79.851],
  "Kollupitaya Cross": [6.905, 79.852],
  "Bambalapitiya Hub": [6.892, 79.855],
  "Maharagama Terminal": [6.848, 79.926],
  "Nugegoda Point": [6.872, 79.889],
  "Kirulapone Crossing": [6.878, 79.88],
  "Delkanda Corner": [6.858, 79.91],
  "Terminal B Ingress": [6.95, 79.87],
  "Highway Entry Hub": [6.96, 79.885],
  "Peliyagoda Toll": [6.975, 79.892],
  "Katunayake Junction": [7.08, 79.89],
  "BIA Departure Port": [7.18, 79.884],
  "Colombo Fort Railway Hub": [6.9344, 79.8428],
  "Homagama Transit Center": [6.841, 80.003],
  "Borella Junction": [6.914, 79.878],
  "Nugegoda Flyover": [6.872, 79.889],
  "Delkanda Point": [6.858, 79.91],
  "Maharagama Central": [6.848, 79.926],
  "Kottawa Multi-Modal Transport Hub": [6.843, 79.965],
  "Kaduwela Express Depot": [6.932, 79.983],
  "Kollupitiya Coastal Terminal": [6.905, 79.852],
  "Malabe IT Park (SLIIT)": [6.914, 79.972],
  "Battaramulla Capital Corridor": [6.898, 79.92],
  "Rajagiriya Flyover": [6.909, 79.896],
  "Borella Medical Hub": [6.914, 79.878],
  "Town Hall Square": [6.913, 79.862],
  "Pettah Central Bus Stand": [6.9344, 79.8428],
  "Horana Commercial Hub": [6.716, 80.063],
  "Pamankada Bridge": [6.875, 79.868],
  "Kohuwala Junction": [6.868, 79.878],
  "Boralesgamuwa Lake Side": [6.848, 79.898],
  "Piliyandala Town Square": [6.801, 79.923],
  "Kesbewa Junction": [6.782, 79.945],
  "Panadura Central Depot": [6.713, 79.907],
  "Moratuwa University Gate": [6.797, 79.901],
  "Ratmalana Airport Corner": [6.822, 79.886],
  "Mt. Lavinia Junction": [6.837, 79.866],
  "Dehiwala Bridge": [6.852, 79.863],
  "Wellawatte Station": [6.874, 79.86],
  "Bambalapitiya Junction": [6.892, 79.855],
  "Gampaha Railway Terminal": [7.091, 79.999],
  "Colombo Fort Express Hub": [6.9344, 79.8428],
  "Yakkala Junction": [7.094, 80.035],
  "Kadawatha Highway Entrance": [7.001, 79.953],
  "Kiribathgoda Center": [6.98, 79.929],
  "Kelaniya Temple Hub": [6.955, 79.917],
  "Peliyagoda Junction": [6.975, 79.892],
};

function getCoordsForLocation(
  name: string,
  index = 0,
  total = 1,
): [number, number] {
  const known = LOCATION_COORDS[name];

  if (known) {
    return known;
  }

  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const latOffset =
    ((Math.abs(hash) % 100) - 50) / 600 + (index / (total + 1)) * 0.04;

  const lngOffset =
    ((Math.abs(hash * 3) % 100) - 50) / 600 + (index / (total + 1)) * 0.04;

  return [6.9271 + latOffset, 79.8612 + lngOffset];
}

function normalizeStops(stops: unknown): string[] {
  if (!Array.isArray(stops)) {
    return [];
  }

  return stops
    .filter((stop): stop is string => typeof stop === "string")
    .map((stop) => stop.trim())
    .filter(Boolean);
}

function normalizeStatus(status: unknown): "Active" | "Inactive" {
  return status === "Inactive" ? "Inactive" : "Active";
}

export default function RoutesModule({
  routes,
  onCreateRoute,
  onUpdateRoute,
  onDeleteRoute,
  userRole,
}: RoutesModuleProps) {
  const [search, setSearch] = useState("");

  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

  const [showModal, setShowModal] = useState(false);

  const [editingRoute, setEditingRoute] = useState<Route | null>(null);

  const [isSaving, setIsSaving] = useState(false);

  const [deletingRouteId, setDeletingRouteId] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // ============================================================
  // FORM STATE
  // ============================================================

  const [routeName, setRouteName] = useState("");
  const [startLoc, setStartLoc] = useState("");
  const [endLoc, setEndLoc] = useState("");
  const [stopInput, setStopInput] = useState("");
  const [stopsList, setStopsList] = useState<string[]>([]);
  const [distance, setDistance] = useState(10);
  const [duration, setDuration] = useState(30);
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");

  // ============================================================
  // MAP
  // ============================================================

  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  const [mapTileStyle, setMapTileStyle] = useState<"light" | "dark">("dark");

  const [leafletLoaded, setLeafletLoaded] = useState(false);

  const canWrite = userRole === "MAIN_ADMIN" || userRole === "DEPOT_ADMIN";

  // ============================================================
  // LOAD LEAFLET
  // ============================================================

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.L) {
      setLeafletLoaded(true);
      return;
    }

    const existingLink = document.querySelector(
      'link[href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]',
    );

    if (!existingLink) {
      const link = document.createElement("link");

      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";

      document.head.appendChild(link);
    }

    const existingScript = document.querySelector(
      'script[src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => setLeafletLoaded(true));

      return;
    }

    const script = document.createElement("script");

    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

    script.async = true;

    script.onload = () => {
      setLeafletLoaded(true);
    };

    script.onerror = () => {
      setError("Failed to load the map library.");
    };

    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  // ============================================================
  // CLEAN MAP ON UNMOUNT
  // ============================================================

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // ============================================================
  // FILTER ROUTES
  // ============================================================

  const filteredRoutes = routes.filter((route) => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return true;
    }

    const stops = normalizeStops(route.stops);

    return (
      route.route_name?.toLowerCase().includes(query) ||
      route.start_location?.toLowerCase().includes(query) ||
      route.end_location?.toLowerCase().includes(query) ||
      stops.some((stop) => stop.toLowerCase().includes(query))
    );
  });

  // ============================================================
  // ACTIVE ROUTE
  // ============================================================

  const activeRoute =
    selectedRoute &&
    filteredRoutes.some((route) => route.route_id === selectedRoute.route_id)
      ? selectedRoute
      : (filteredRoutes[0] ?? null);

  // ============================================================
  // KEEP SELECTED ROUTE IN SYNC WITH DB
  // ============================================================

  useEffect(() => {
    if (!selectedRoute) {
      return;
    }

    const updated = routes.find(
      (route) => route.route_id === selectedRoute.route_id,
    );

    if (updated) {
      setSelectedRoute(updated);
    } else {
      setSelectedRoute(null);
    }
  }, [routes]);

  // ============================================================
  // CLEAR NOTIFICATIONS
  // ============================================================

  useEffect(() => {
    if (!successMessage) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [successMessage]);

  // ============================================================
  // ADD STOP
  // ============================================================

  const handleAddStop = () => {
    const value = stopInput.trim();

    if (!value) {
      return;
    }

    setStopsList((current) => [...current, value]);
    setStopInput("");
  };

  // ============================================================
  // REMOVE STOP
  // ============================================================

  const handleRemoveStop = (index: number) => {
    setStopsList((current) => current.filter((_, i) => i !== index));
  };

  // ============================================================
  // OPEN CREATE MODAL
  // ============================================================

  const openCreateModal = () => {
    setEditingRoute(null);

    setRouteName("");
    setStartLoc("");
    setEndLoc("");
    setStopInput("");
    setStopsList([]);
    setDistance(10);
    setDuration(30);
    setStatus("Active");

    setError(null);
    setShowModal(true);
  };

  // ============================================================
  // OPEN EDIT MODAL
  // ============================================================

  const openEditModal = (route: Route) => {
    setEditingRoute(route);

    setRouteName(route.route_name ?? "");
    setStartLoc(route.start_location ?? "");
    setEndLoc(route.end_location ?? "");
    setStopInput("");
    setStopsList(normalizeStops(route.stops));
    setDistance(Number(route.distance ?? 0));
    setDuration(Number(route.estimated_duration ?? 0));
    setStatus(normalizeStatus(route.status));

    setError(null);
    setShowModal(true);
  };

  // ============================================================
  // CLOSE MODAL
  // ============================================================

  const closeModal = () => {
    if (isSaving) {
      return;
    }

    setShowModal(false);
    setEditingRoute(null);
    setError(null);
  };

  // ============================================================
  // SAVE ROUTE
  // ============================================================

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSaving) {
      return;
    }

    setError(null);

    const cleanName = routeName.trim();
    const cleanStart = startLoc.trim();
    const cleanEnd = endLoc.trim();

    if (!cleanName) {
      setError("Route name is required.");
      return;
    }

    if (!cleanStart) {
      setError("Start location is required.");
      return;
    }

    if (!cleanEnd) {
      setError("End location is required.");
      return;
    }

    if (cleanStart.toLowerCase() === cleanEnd.toLowerCase()) {
      setError("Start and destination locations cannot be the same.");
      return;
    }

    const numericDistance = Number(distance);
    const numericDuration = Number(duration);

    if (!Number.isFinite(numericDistance) || numericDistance <= 0) {
      setError("Distance must be greater than 0.");
      return;
    }

    if (!Number.isFinite(numericDuration) || numericDuration <= 0) {
      setError("Estimated duration must be greater than 0.");
      return;
    }

    const payload: Partial<Route> = {
      route_name: cleanName,
      start_location: cleanStart,
      end_location: cleanEnd,
      stops: [...stopsList],
      distance: numericDistance,
      estimated_duration: numericDuration,
      status,
    };

    try {
      setIsSaving(true);

      if (editingRoute) {
        await onUpdateRoute(editingRoute.route_id, payload);

        setSuccessMessage("Route updated successfully.");
      } else {
        await onCreateRoute(payload);

        setSuccessMessage("Route created successfully.");
      }

      setShowModal(false);
      setEditingRoute(null);
    } catch (err) {
      console.error("Failed to save route:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to save route. Please try again.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  // ============================================================
  // DELETE ROUTE
  // ============================================================

  const handleDelete = async (route: Route) => {
    if (deletingRouteId) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${route.route_name}"?\n\nThis action cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingRouteId(route.route_id);
      setError(null);

      await onDeleteRoute(route.route_id);

      if (selectedRoute?.route_id === route.route_id) {
        setSelectedRoute(null);
      }

      setSuccessMessage("Route deleted successfully.");
    } catch (err) {
      console.error("Failed to delete route:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to delete route. Please try again.",
      );
    } finally {
      setDeletingRouteId(null);
    }
  };

  // ============================================================
  // MAP INITIALIZATION
  // ============================================================

  useEffect(() => {
    if (
      !leafletLoaded ||
      !activeRoute ||
      !mapRef.current ||
      typeof window === "undefined"
    ) {
      return;
    }

    const L = window.L;

    if (!L) {
      return;
    }

    const startCoord = getCoordsForLocation(
      activeRoute.start_location,
      0,
      activeRoute.stops.length + 2,
    );

    const stopCoords = activeRoute.stops.map((stop, index) =>
      getCoordsForLocation(stop, index + 1, activeRoute.stops.length + 2),
    );

    const endCoord = getCoordsForLocation(
      activeRoute.end_location,
      activeRoute.stops.length + 1,
      activeRoute.stops.length + 2,
    );

    const allCoords = [startCoord, ...stopCoords, endCoord];

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapRef.current, {
      zoomControl: true,
      attributionControl: false,
    });

    mapInstanceRef.current = map;

    const tileUrl =
      mapTileStyle === "dark"
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

    L.tileLayer(tileUrl, {
      maxZoom: 19,
    }).addTo(map);

    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const createMarkerIcon = (background: string, text: string) =>
      L.divIcon({
        className: "custom-leaflet-marker",
        html: `
          <div
            style="
              background:${background};
              color:white;
              width:28px;
              height:28px;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-weight:bold;
              font-size:10px;
              font-family:sans-serif;
              box-shadow:0 4px 10px rgba(0,0,0,0.4);
              border:2px solid white;
            "
          >
            ${escapeHtml(text)}
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

    // Start
    L.marker(startCoord, {
      icon: createMarkerIcon("#10b981", "DEP"),
    })
      .bindPopup(
        `
        <div style="font-family:sans-serif;font-size:12px;">
          <b>Origin Depot:</b><br/>
          ${escapeHtml(activeRoute.start_location)}
        </div>
        `,
      )
      .addTo(map);

    // Stops
    stopCoords.forEach((coord, index) => {
      L.marker(coord, {
        icon: createMarkerIcon("#f59e0b", String(index + 1)),
      })
        .bindPopup(
          `
          <div style="font-family:sans-serif;font-size:12px;">
            <b>Stop ${index + 1}:</b><br/>
            ${escapeHtml(activeRoute.stops[index])}
          </div>
          `,
        )
        .addTo(map);
    });

    // End
    L.marker(endCoord, {
      icon: createMarkerIcon("#ef4444", "ARR"),
    })
      .bindPopup(
        `
        <div style="font-family:sans-serif;font-size:12px;">
          <b>Destination:</b><br/>
          ${escapeHtml(activeRoute.end_location)}
        </div>
        `,
      )
      .addTo(map);

    // Route line
    const polyline = L.polyline(allCoords, {
      color: "#3b82f6",
      weight: 5,
      opacity: 0.85,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);

    // Bus marker
    const busIcon = L.divIcon({
      className: "bus-leaflet-marker",
      html: `
        <div
          style="
            background:#2563eb;
            color:white;
            width:30px;
            height:30px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:13px;
            box-shadow:0 0 12px rgba(37,99,235,0.9);
            border:2px solid white;
          "
        >
          🚌
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    L.marker(startCoord, {
      icon: busIcon,
    }).addTo(map);

    map.fitBounds(polyline.getBounds(), {
      padding: [40, 40],
    });

    // Leaflet sometimes calculates dimensions before the container
    // is fully rendered.
    window.setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      if (mapInstanceRef.current === map) {
        map.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [leafletLoaded, activeRoute, mapTileStyle]);

  // ============================================================
  // FOCUS MAP
  // ============================================================

  const focusOnCoords = (coord: [number, number], label: string) => {
    if (!mapInstanceRef.current || !window.L) {
      return;
    }

    mapInstanceRef.current.flyTo(coord, 14, {
      duration: 1.2,
    });

    window.L.popup()
      .setLatLng(coord)
      .setContent(
        `<div style="font-family:sans-serif;font-size:12px;"><b>${label}</b></div>`,
      )
      .openOn(mapInstanceRef.current);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div
      id="routes-module-root"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch"
    >
      {/* ====================================================== */}
      {/* GLOBAL ERROR / SUCCESS */}
      {/* ====================================================== */}

      {(error || successMessage) && (
        <div className="lg:col-span-12">
          {error && (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-[#b85454]/40 bg-[#b85454]/10 px-4 py-3 text-sm text-[#b85454]">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>

              <button
                type="button"
                onClick={() => setError(null)}
                className="text-[#b85454] hover:opacity-80"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {successMessage && (
            <div className="rounded-xl border border-[#5fa87a]/40 bg-[#5fa87a]/10 px-4 py-3 text-sm text-[#5fa87a]">
              {successMessage}
            </div>
          )}
        </div>
      )}

      {/* ====================================================== */}
      {/* ROUTE LIST */}
      {/* ====================================================== */}

      <div className="lg:col-span-5 glass-panel rounded-2xl overflow-hidden flex flex-col min-h-[400px]">
        <div className="p-4 border-b border-[#27323a] flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8a96a0] absolute left-3 top-1/2 -translate-y-1/2" />

            <input
              id="input-search-routes"
              type="text"
              placeholder="Search depot routes or stops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field w-full pl-9"
            />
          </div>

          {canWrite && (
            <button
              id="btn-create-route"
              type="button"
              onClick={openCreateModal}
              className="btn-primary text-xs whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              Add Route
            </button>
          )}
        </div>

        <div className="px-4 py-2 border-b border-[#27323a] bg-[#141a1f] text-[10px] text-[#8a96a0] font-mono">
          {filteredRoutes.length} route
          {filteredRoutes.length === 1 ? "" : "s"} found
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-[#27323a] max-h-[520px]">
          {filteredRoutes.length === 0 ? (
            <div className="p-10 text-center text-[#8a96a0] text-xs">
              <RouteIcon className="w-8 h-8 mx-auto mb-3 text-[#56636d]" />

              {routes.length === 0 ? (
                <>
                  <p className="font-semibold text-[#ede9e3]">
                    No routes available
                  </p>
                  <p className="mt-1">
                    Create your first route to get started.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-[#ede9e3]">
                    No routes found
                  </p>
                  <p className="mt-1">Try changing your search query.</p>
                </>
              )}
            </div>
          ) : (
            filteredRoutes.map((route) => {
              const routeStops = normalizeStops(route.stops);

              const isSelected = activeRoute?.route_id === route.route_id;

              const isDeleting = deletingRouteId === route.route_id;

              const routeStatus = normalizeStatus(route.status);

              return (
                <div
                  key={route.route_id}
                  id={`route-card-${route.route_id}`}
                  onClick={() => setSelectedRoute(route)}
                  className={`p-4 cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-[#6b8f3c]/15 border-l-4 border-[#6b8f3c]"
                      : "hover:bg-[#1a2228] border-l-4 border-transparent"
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <h4 className="font-bold text-[#ede9e3] text-sm truncate">
                      {route.route_name}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-[#8a96a0] font-mono min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-[#6b8f3c] shrink-0" />

                      <span className="truncate">{route.start_location}</span>

                      <span className="text-[#56636d]">→</span>

                      <span className="truncate">{route.end_location}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="bg-[#12181d] border border-[#27323a] text-[#ede9e3] text-[10px] px-2 py-0.5 rounded font-bold font-mono">
                        {route.distance} KM
                      </span>

                      <span className="bg-[#12181d] border border-[#27323a] text-[#ede9e3] text-[10px] px-2 py-0.5 rounded font-bold font-mono">
                        {route.estimated_duration} MINS
                      </span>

                      <span className="bg-[#12181d] border border-[#27323a] text-[#c49a5c] text-[10px] px-2 py-0.5 rounded font-bold">
                        {routeStops.length} STOPS
                      </span>

                      <span
                        className={`badge ${
                          routeStatus === "Active"
                            ? "badge-success"
                            : "badge-danger"
                        }`}
                      >
                        {routeStatus}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex gap-1.5 ml-3 shrink-0"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      id={`btn-view-${route.route_id}`}
                      type="button"
                      onClick={() => setSelectedRoute(route)}
                      className="p-1.5 text-[#8a96a0] hover:text-[#ede9e3] hover:bg-[#1a2228] rounded"
                      title="View route"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {canWrite && (
                      <>
                        <button
                          id={`btn-edit-${route.route_id}`}
                          type="button"
                          disabled={isDeleting}
                          onClick={() => openEditModal(route)}
                          className="p-1.5 text-[#8a96a0] hover:text-[#6b8f3c] hover:bg-[#6b8f3c]/10 rounded disabled:opacity-50"
                          title="Edit route"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          id={`btn-delete-${route.route_id}`}
                          type="button"
                          disabled={isDeleting}
                          onClick={() => handleDelete(route)}
                          className="p-1.5 text-[#8a96a0] hover:text-[#b85454] hover:bg-[#b85454]/10 rounded disabled:opacity-50"
                          title="Delete route"
                        >
                          {isDeleting ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Trash2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ====================================================== */}
      {/* MAP + DETAILS */}
      {/* ====================================================== */}

      <div className="lg:col-span-7 space-y-6 flex flex-col">
        {!activeRoute ? (
          <div className="glass-panel rounded-2xl min-h-[500px] flex items-center justify-center">
            <div className="text-center text-[#8a96a0]">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-[#56636d]" />

              <p className="font-semibold text-[#ede9e3]">Select a route</p>

              <p className="text-xs mt-1">
                Route details and map navigation will appear here.
              </p>
            </div>
          </div>
        ) : (
          <div className="glass-panel rounded-2xl p-5 flex-1 flex flex-col gap-4">
            {/* Route Header */}
            <div className="flex items-start justify-between border-b pb-3 border-[#27323a] gap-4">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`badge ${
                      normalizeStatus(activeRoute.status) === "Active"
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        normalizeStatus(activeRoute.status) === "Active"
                          ? "bg-[#5fa87a] animate-pulse"
                          : "bg-[#b85454]"
                      }`}
                    />

                    {normalizeStatus(activeRoute.status)}
                  </span>

                  <span className="badge badge-amber font-mono">
                    ID: {activeRoute.route_id}
                  </span>
                </div>

                <h3 className="font-bold text-[#ede9e3] text-base">
                  {activeRoute.route_name}
                </h3>

                <p className="text-xs text-[#8a96a0]">
                  Connecting Terminal {activeRoute.start_location} and Hub{" "}
                  {activeRoute.end_location}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="block text-xl font-black text-[#6b8f3c] font-mono">
                  {activeRoute.distance}{" "}
                  <span className="text-xs font-semibold">KM</span>
                </span>

                <span className="block text-[10px] text-[#8a96a0] font-mono">
                  Est. Duration: {activeRoute.estimated_duration} mins
                </span>
              </div>
            </div>

            {/* Map */}
            <div
              className="bg-[#0b0f12] rounded-xl relative overflow-hidden flex-1 min-h-[300px] border border-[#27323a]"
              id="map-simulation-container"
            >
              <div ref={mapRef} className="w-full h-full min-h-[300px] z-0" />

              {!leafletLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0b0f12]/90 z-20">
                  <div className="text-center text-[#8a96a0]">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                    <span className="text-xs">Loading map...</span>
                  </div>
                </div>
              )}

              {/* HUD */}
              <div className="absolute top-3 left-3 bg-[#0b0f12]/90 backdrop-blur-md border border-[#27323a] rounded-xl p-2.5 text-[10px] text-[#ede9e3] font-mono space-y-1 z-10 shadow-lg pointer-events-none">
                <div className="flex items-center gap-1.5 text-[#5fa87a] font-bold">
                  <Compass
                    className="w-3.5 h-3.5 animate-spin"
                    style={{
                      animationDuration: "12s",
                    }}
                  />
                  <span>GPS TRACKING ONLINE</span>
                </div>

                <div className="text-[#8a96a0]">
                  STATIONS:{" "}
                  <span className="text-[#ede9e3] font-bold">
                    {activeRoute.stops.length + 2} UNITS
                  </span>
                </div>

                <div className="text-[#8a96a0]">
                  DISTANCE:{" "}
                  <span className="text-[#c49a5c] font-bold">
                    {activeRoute.distance} KM
                  </span>
                </div>
              </div>

              {/* Map Style */}
              <div className="absolute top-3 right-3 z-10">
                <button
                  type="button"
                  onClick={() =>
                    setMapTileStyle(mapTileStyle === "dark" ? "light" : "dark")
                  }
                  className="bg-[#0b0f12]/90 hover:bg-[#141a1f] text-[#ede9e3] backdrop-blur-md border border-[#27323a] rounded-xl px-2.5 py-1.5 text-[10px] font-bold font-mono flex items-center gap-1.5 shadow-md cursor-pointer transition-transform hover:scale-105"
                >
                  <Layers className="w-3.5 h-3.5 text-[#6b8f3c]" />

                  {mapTileStyle === "dark" ? "Dark Theme Map" : "Street Map"}
                </button>
              </div>

              {/* Stop Strip */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#0b0f12]/90 backdrop-blur-md border border-[#27323a] rounded-xl p-2 z-10 shadow-lg text-[10px] font-mono text-[#ede9e3] flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-1 text-[#c49a5c] font-bold shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                  STOPS ON PATH:
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                  <span
                    onClick={() =>
                      focusOnCoords(
                        getCoordsForLocation(
                          activeRoute.start_location,
                          0,
                          activeRoute.stops.length + 2,
                        ),
                        activeRoute.start_location,
                      )
                    }
                    className="bg-[#5fa87a]/20 border border-[#5fa87a]/40 text-[#5fa87a] px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer hover:bg-[#5fa87a]/30 shrink-0"
                  >
                    DEP: {activeRoute.start_location}
                  </span>

                  {activeRoute.stops.map((stop, index) => (
                    <span
                      key={`${stop}-${index}`}
                      onClick={() =>
                        focusOnCoords(
                          getCoordsForLocation(
                            stop,
                            index + 1,
                            activeRoute.stops.length + 2,
                          ),
                          stop,
                        )
                      }
                      className="bg-[#c49a5c]/20 border border-[#c49a5c]/40 text-[#c49a5c] px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer hover:bg-[#c49a5c]/30 shrink-0"
                    >
                      {index + 1}. {stop}
                    </span>
                  ))}

                  <span
                    onClick={() =>
                      focusOnCoords(
                        getCoordsForLocation(
                          activeRoute.end_location,
                          activeRoute.stops.length + 1,
                          activeRoute.stops.length + 2,
                        ),
                        activeRoute.end_location,
                      )
                    }
                    className="bg-[#b85454]/20 border border-[#b85454]/40 text-[#b85454] px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer hover:bg-[#b85454]/30 shrink-0"
                  >
                    ARR: {activeRoute.end_location}
                  </span>
                </div>
              </div>
            </div>

            {/* Stops */}
            <div className="space-y-2">
              <h4 className="font-bold text-[#ede9e3] text-xs flex items-center gap-1 uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-[#6b8f3c]" />
                Passenger Transit Terminals ({activeRoute.stops.length + 2}{" "}
                stations)
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div
                  onClick={() =>
                    focusOnCoords(
                      getCoordsForLocation(
                        activeRoute.start_location,
                        0,
                        activeRoute.stops.length + 2,
                      ),
                      activeRoute.start_location,
                    )
                  }
                  className="p-2 border border-[#5fa87a]/40 bg-[#5fa87a]/10 hover:bg-[#5fa87a]/20 rounded-xl text-center cursor-pointer transition-colors"
                >
                  <span className="block text-[8px] text-[#5fa87a] font-bold font-mono">
                    DEP: 0 KM
                  </span>

                  <span className="block text-xs font-bold text-[#ede9e3] truncate">
                    {activeRoute.start_location}
                  </span>
                </div>

                {activeRoute.stops.map((stop, index) => (
                  <div
                    key={`${stop}-${index}`}
                    onClick={() =>
                      focusOnCoords(
                        getCoordsForLocation(
                          stop,
                          index + 1,
                          activeRoute.stops.length + 2,
                        ),
                        stop,
                      )
                    }
                    className="p-2 border border-[#c49a5c]/40 bg-[#c49a5c]/10 hover:bg-[#c49a5c]/20 rounded-xl text-center cursor-pointer transition-colors"
                  >
                    <span className="block text-[8px] text-[#c49a5c] font-bold font-mono">
                      STOP {index + 1}
                    </span>

                    <span className="block text-xs font-bold text-[#ede9e3] truncate">
                      {stop}
                    </span>
                  </div>
                ))}

                <div
                  onClick={() =>
                    focusOnCoords(
                      getCoordsForLocation(
                        activeRoute.end_location,
                        activeRoute.stops.length + 1,
                        activeRoute.stops.length + 2,
                      ),
                      activeRoute.end_location,
                    )
                  }
                  className="p-2 border border-[#b85454]/40 bg-[#b85454]/10 hover:bg-[#b85454]/20 rounded-xl text-center cursor-pointer transition-colors"
                >
                  <span className="block text-[8px] text-[#b85454] font-bold font-mono">
                    ARRIVAL HUB
                  </span>

                  <span className="block text-xs font-bold text-[#ede9e3] truncate">
                    {activeRoute.end_location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ====================================================== */}
      {/* CREATE / EDIT MODAL */}
      {/* ====================================================== */}

      {showModal && (
        <div
          className="modal-overlay animate-fade-in"
          id="modal-container-routes"
        >
          <div className="modal-content space-y-4">
            <div className="flex items-center justify-between border-b border-[#27323a] pb-3">
              <h3 className="font-bold text-[#ede9e3] text-base">
                {editingRoute
                  ? `Configure Route: ${editingRoute.route_name}`
                  : "Create New Transit Route"}
              </h3>

              <button
                id="btn-close-route-modal"
                type="button"
                onClick={closeModal}
                disabled={isSaving}
                className="p-1 rounded-lg text-[#8a96a0] hover:text-[#ede9e3]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {error && (
              <div className="flex gap-2 items-start rounded-lg bg-[#b85454]/10 border border-[#b85454]/30 text-[#b85454] px-3 py-2 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />

                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1 md:col-span-2">
                  <label
                    htmlFor="route-form-name"
                    className="font-semibold text-[#8a96a0]"
                  >
                    Route Code / Name
                  </label>

                  <input
                    id="route-form-name"
                    type="text"
                    required
                    disabled={isSaving}
                    placeholder="e.g. Route 460 - Express Hub to Terminal C"
                    value={routeName}
                    onChange={(e) => setRouteName(e.target.value)}
                    className="input-field w-full font-medium"
                  />
                </div>

                {/* Start */}
                <div className="space-y-1">
                  <label
                    htmlFor="route-form-origin"
                    className="font-semibold text-[#8a96a0]"
                  >
                    Start Location
                  </label>

                  <input
                    id="route-form-origin"
                    type="text"
                    required
                    disabled={isSaving}
                    placeholder="e.g. Main Depot"
                    value={startLoc}
                    onChange={(e) => setStartLoc(e.target.value)}
                    className="input-field w-full font-medium"
                  />
                </div>

                {/* End */}
                <div className="space-y-1">
                  <label
                    htmlFor="route-form-destination"
                    className="font-semibold text-[#8a96a0]"
                  >
                    End Location
                  </label>

                  <input
                    id="route-form-destination"
                    type="text"
                    required
                    disabled={isSaving}
                    placeholder="e.g. Central Station"
                    value={endLoc}
                    onChange={(e) => setEndLoc(e.target.value)}
                    className="input-field w-full font-medium"
                  />
                </div>

                {/* Distance */}
                <div className="space-y-1">
                  <label
                    htmlFor="route-form-distance"
                    className="font-semibold text-[#8a96a0]"
                  >
                    Total Distance (KM)
                  </label>

                  <input
                    id="route-form-distance"
                    type="number"
                    step="0.1"
                    required
                    min="0.1"
                    disabled={isSaving}
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>

                {/* Duration */}
                <div className="space-y-1">
                  <label
                    htmlFor="route-form-duration"
                    className="font-semibold text-[#8a96a0]"
                  >
                    Estimated Duration (Minutes)
                  </label>

                  <input
                    id="route-form-duration"
                    type="number"
                    required
                    min="1"
                    disabled={isSaving}
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="input-field w-full font-mono font-semibold"
                  />
                </div>

                {/* Status */}
                <div className="space-y-1 md:col-span-2">
                  <label
                    htmlFor="route-form-status"
                    className="font-semibold text-[#8a96a0]"
                  >
                    Route Status
                  </label>

                  <select
                    id="route-form-status"
                    value={status}
                    disabled={isSaving}
                    onChange={(e) =>
                      setStatus(e.target.value as "Active" | "Inactive")
                    }
                    className="input-field w-full font-semibold"
                  >
                    <option value="Active">Active</option>

                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* ================================================= */}
              {/* STOPS */}
              {/* ================================================= */}

              <div className="space-y-2 border-t pt-3 border-[#27323a]">
                <label className="font-semibold text-[#8a96a0] block">
                  Configured Stops
                </label>

                <div className="flex gap-2">
                  <input
                    id="input-add-stop"
                    type="text"
                    disabled={isSaving}
                    placeholder="e.g. Hospital Stop"
                    value={stopInput}
                    onChange={(e) => setStopInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddStop();
                      }
                    }}
                    className="input-field flex-1 font-medium"
                  />

                  <button
                    id="btn-add-stop-point"
                    type="button"
                    disabled={isSaving}
                    onClick={handleAddStop}
                    className="btn-secondary px-3 py-1.5"
                  >
                    Add Stop
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto py-1">
                  {stopsList.length === 0 ? (
                    <span className="text-[10px] text-[#8a96a0] italic">
                      No intermediate stops configured.
                    </span>
                  ) : (
                    stopsList.map((stop, index) => (
                      <span
                        key={`${stop}-${index}`}
                        className="flex items-center gap-1 bg-[#12181d] border border-[#27323a] text-[#ede9e3] px-2 py-0.5 rounded-md font-medium text-[10px]"
                      >
                        <span className="text-[#8a96a0]">{index + 1}.</span>

                        {stop}

                        <button
                          type="button"
                          disabled={isSaving}
                          onClick={() => handleRemoveStop(index)}
                          className="text-[#b85454] hover:opacity-80 font-bold ml-0.5"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* ================================================= */}
              {/* ACTIONS */}
              {/* ================================================= */}

              <div className="flex items-center justify-end gap-3 border-t pt-3 border-[#27323a]">
                <button
                  id="btn-route-modal-cancel"
                  type="button"
                  onClick={closeModal}
                  disabled={isSaving}
                  className="btn-secondary"
                >
                  Cancel
                </button>

                <button
                  id="btn-route-modal-save"
                  type="submit"
                  disabled={isSaving}
                  className="btn-primary"
                >
                  {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}

                  {editingRoute ? "Save Changes" : "Create Route"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
