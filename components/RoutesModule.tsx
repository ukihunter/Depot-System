import React, { useState, useEffect, useRef } from "react";
import { Route } from "../type";
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
  Bus,
} from "lucide-react";

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
  if (LOCATION_COORDS[name]) return LOCATION_COORDS[name];
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const latOffset =
    ((Math.abs(hash) % 100) - 50) / 600 + (index / (total + 1)) * 0.04;
  const lngOffset =
    ((Math.abs(hash * 3) % 100) - 50) / 600 + (index / (total + 1)) * 0.04;
  return [6.9271 + latOffset, 79.8612 + lngOffset];
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

  // Form State
  const [routeName, setRouteName] = useState("");
  const [startLoc, setStartLoc] = useState("");
  const [endLoc, setEndLoc] = useState("");
  const [stopInput, setStopInput] = useState("");
  const [stopsList, setStopsList] = useState<string[]>([]);
  const [distance, setDistance] = useState(12.5);
  const [duration, setDuration] = useState(35);

  // Map state
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapTileStyle, setMapTileStyle] = useState<"light" | "dark">("dark");
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  const canWrite = userRole === "Admin";

  // Dynamically load Leaflet script & CSS from CDN
  useEffect(() => {
    if (window.L) {
      setLeafletLoaded(true);
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => setLeafletLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleAddStop = () => {
    if (stopInput.trim()) {
      setStopsList([...stopsList, stopInput.trim()]);
      setStopInput("");
    }
  };

  const handleRemoveStop = (idx: number) => {
    setStopsList(stopsList.filter((_, i) => i !== idx));
  };

  const openCreateModal = () => {
    setEditingRoute(null);
    setRouteName("");
    setStartLoc("");
    setEndLoc("");
    setStopsList([]);
    setDistance(10);
    setDuration(30);
    setShowModal(true);
  };

  const openEditModal = (r: Route) => {
    setEditingRoute(r);
    setRouteName(r.route_name);
    setStartLoc(r.start_location);
    setEndLoc(r.end_location);
    setStopsList(r.stops);
    setDistance(r.distance);
    setDuration(r.estimated_duration);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!routeName || !startLoc || !endLoc) return;

    if (editingRoute) {
      await onUpdateRoute(editingRoute.route_id, {
        route_name: routeName,
        start_location: startLoc,
        end_location: endLoc,
        stops: stopsList,
        distance: Number(distance),
        estimated_duration: Number(duration),
      });
    } else {
      await onCreateRoute({
        route_name: routeName,
        start_location: startLoc,
        end_location: endLoc,
        stops: stopsList,
        distance: Number(distance),
        estimated_duration: Number(duration),
        status: "Active",
      });
    }
    setShowModal(false);
  };

  const filteredRoutes = routes.filter(
    (r) =>
      r.route_name.toLowerCase().includes(search.toLowerCase()) ||
      r.start_location.toLowerCase().includes(search.toLowerCase()) ||
      r.end_location.toLowerCase().includes(search.toLowerCase()) ||
      r.stops.some((s) => s.toLowerCase().includes(search.toLowerCase())),
  );

  const activeRoute = selectedRoute || filteredRoutes[0];

  // Initialize and update Leaflet Map
  useEffect(() => {
    if (!leafletLoaded || !activeRoute || !mapRef.current) return;
    const L = window.L;

    const startCoord = getCoordsForLocation(
      activeRoute.start_location,
      0,
      activeRoute.stops.length + 2,
    );
    const stopCoords = activeRoute.stops.map((stop, i) =>
      getCoordsForLocation(stop, i + 1, activeRoute.stops.length + 2),
    );
    const endCoord = getCoordsForLocation(
      activeRoute.end_location,
      activeRoute.stops.length + 1,
      activeRoute.stops.length + 2,
    );
    const allCoords = [startCoord, ...stopCoords, endCoord];

    // Clean previous map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Map
    const map = L.map(mapRef.current, {
      zoomControl: true,
      attributionControl: false,
    });
    mapInstanceRef.current = map;

    // Tile Layer
    const tileUrl =
      mapTileStyle === "dark"
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

    L.tileLayer(tileUrl, { maxZoom: 19 }).addTo(map);

    // Custom Icon Creator
    const createMarkerIcon = (bgColor: string, text: string) =>
      L.divIcon({
        className: "custom-leaflet-marker",
        html: `<div style="background:${bgColor}; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:10px; font-family:sans-serif; box-shadow:0 4px 10px rgba(0,0,0,0.4); border:2px solid white;">${text}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

    // Add Start Marker (Green)
    L.marker(startCoord, {
      icon: createMarkerIcon("#10b981", "DEP"),
    })
      .bindPopup(
        `<div style="font-family:sans-serif; font-size:12px;"><b>Origin Depot:</b><br/>${activeRoute.start_location}</div>`,
      )
      .addTo(map);

    // Add Stops Markers (Amber)
    stopCoords.forEach((coord, i) => {
      L.marker(coord, {
        icon: createMarkerIcon("#f59e0b", `${i + 1}`),
      })
        .bindPopup(
          `<div style="font-family:sans-serif; font-size:12px;"><b>Stop ${i + 1}:</b><br/>${activeRoute.stops[i]}</div>`,
        )
        .addTo(map);
    });

    // Add End Marker (Red)
    L.marker(endCoord, {
      icon: createMarkerIcon("#ef4444", "ARR"),
    })
      .bindPopup(
        `<div style="font-family:sans-serif; font-size:12px;"><b>Destination:</b><br/>${activeRoute.end_location}</div>`,
      )
      .addTo(map);

    // Draw Route Polyline
    const polyline = L.polyline(allCoords, {
      color: "#3b82f6",
      weight: 5,
      opacity: 0.85,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);

    // Add Animated Bus Marker
    const busIcon = L.divIcon({
      className: "bus-leaflet-marker",
      html: `<div style="background:#2563eb; color:white; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; box-shadow:0 0 12px rgba(37,99,235,0.9); border:2px solid white;">🚌</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
    L.marker(startCoord, { icon: busIcon }).addTo(map);

    // Fit Map to Route Bounds
    map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
  }, [leafletLoaded, activeRoute, mapTileStyle]);

  const focusOnCoords = (coord: [number, number], label: string) => {
    if (mapInstanceRef.current && window.L) {
      mapInstanceRef.current.flyTo(coord, 14, { duration: 1.2 });
      window.L.popup()
        .setLatLng(coord)
        .setContent(
          `<div style="font-family:sans-serif; font-size:12px;"><b>${label}</b></div>`,
        )
        .openOn(mapInstanceRef.current);
    }
  };

  return (
    <div
      id="routes-module-root"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch"
    >
      {/* List Panel */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[400px]">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="input-search-routes"
              type="text"
              placeholder="Search depot routes or stops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
            />
          </div>
          {canWrite && (
            <button
              id="btn-create-route"
              onClick={openCreateModal}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl flex items-center gap-1 text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add Route
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 max-h-[520px]">
          {filteredRoutes.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              No routes found matching your query.
            </div>
          ) : (
            filteredRoutes.map((r) => (
              <div
                key={r.route_id}
                id={`route-card-${r.route_id}`}
                onClick={() => setSelectedRoute(r)}
                className={`p-4 cursor-pointer transition-all flex items-center justify-between ${
                  activeRoute?.route_id === r.route_id
                    ? "bg-blue-50/70 border-l-4 border-blue-600"
                    : "hover:bg-slate-50 border-l-4 border-transparent"
                }`}
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm">
                    {r.route_name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{r.start_location}</span>
                    <span className="text-slate-300">→</span>
                    <span>{r.end_location}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-bold font-mono">
                      {r.distance} KM
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-bold font-mono">
                      {r.estimated_duration} MINS
                    </span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                        r.status === "Active"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>
                </div>
                <div
                  className="flex gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    id={`btn-view-${r.route_id}`}
                    onClick={() => setSelectedRoute(r)}
                    className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  {canWrite && (
                    <>
                      <button
                        id={`btn-edit-${r.route_id}`}
                        onClick={() => openEditModal(r)}
                        className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        id={`btn-delete-${r.route_id}`}
                        onClick={() => onDeleteRoute(r.route_id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Map & Stops Details Panel */}
      <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
        {activeRoute && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex-1 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between border-b pb-3 border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                    Live Map Navigation
                  </span>
                  <span className="bg-blue-50 text-blue-800 border border-blue-200 text-[10px] px-2 py-0.5 rounded font-bold font-mono">
                    ID: {activeRoute.route_id}
                  </span>
                </div>
                <h3 className="font-bold text-slate-950 text-base">
                  {activeRoute.route_name}
                </h3>
                <p className="text-xs text-slate-500">
                  Connecting Terminal {activeRoute.start_location} and Hub{" "}
                  {activeRoute.end_location}
                </p>
              </div>
              <div className="text-right">
                <span className="block text-xl font-black text-blue-600 font-mono">
                  {activeRoute.distance}{" "}
                  <span className="text-xs font-semibold">KM</span>
                </span>
                <span className="block text-[10px] text-slate-400 font-mono">
                  Est. Duration: {activeRoute.estimated_duration} mins
                </span>
              </div>
            </div>

            {/* Interactive OpenStreetMap Leaflet Map Container */}
            <div
              className="bg-slate-950 rounded-xl relative overflow-hidden flex-1 min-h-[300px] border border-slate-800"
              id="map-simulation-container"
            >
              {/* Map Target */}
              <div ref={mapRef} className="w-full h-full min-h-[300px] z-0" />

              {/* Map HUD Overlay */}
              <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-xl p-2.5 text-[10px] text-slate-300 font-mono space-y-1 z-10 shadow-lg pointer-events-none">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Compass
                    className="w-3.5 h-3.5 animate-spin"
                    style={{ animationDuration: "12s" }}
                  />
                  <span>GPS TRACKING ONLINE</span>
                </div>
                <div className="text-slate-400">
                  STATIONS:{" "}
                  <span className="text-white font-bold">
                    {activeRoute.stops.length + 2} UNITS
                  </span>
                </div>
                <div className="text-slate-400">
                  DISTANCE:{" "}
                  <span className="text-cyan-400 font-bold">
                    {activeRoute.distance} KM
                  </span>
                </div>
              </div>

              {/* Map Style Switcher */}
              <div className="absolute top-3 right-3 z-10 flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setMapTileStyle(mapTileStyle === "dark" ? "light" : "dark")
                  }
                  className="bg-slate-950/85 hover:bg-slate-900 text-slate-200 backdrop-blur-md border border-slate-800 rounded-xl px-2.5 py-1.5 text-[10px] font-bold font-mono flex items-center gap-1.5 shadow-md cursor-pointer transition-transform hover:scale-105"
                >
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  {mapTileStyle === "dark" ? "Dark Theme Map" : "Street Map"}
                </button>
              </div>

              {/* Stops Quick Pill Strip */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-2 z-10 shadow-lg text-[10px] font-mono text-slate-300 flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-1 text-amber-400 font-bold shrink-0">
                  <MapPin className="w-3.5 h-3.5" /> STOPS ON PATH:
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
                    className="bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer hover:bg-emerald-800/80 shrink-0 transition-colors"
                  >
                    DEP: {activeRoute.start_location}
                  </span>
                  {activeRoute.stops.map((stop, i) => (
                    <span
                      key={i}
                      onClick={() =>
                        focusOnCoords(
                          getCoordsForLocation(
                            stop,
                            i + 1,
                            activeRoute.stops.length + 2,
                          ),
                          stop,
                        )
                      }
                      className="bg-amber-950/80 border border-amber-700/60 text-amber-300 px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer hover:bg-amber-800/80 shrink-0 transition-colors"
                    >
                      {i + 1}. {stop}
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
                    className="bg-rose-950/80 border border-rose-700/60 text-rose-300 px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer hover:bg-rose-800/80 shrink-0 transition-colors"
                  >
                    ARR: {activeRoute.end_location}
                  </span>
                </div>
              </div>
            </div>

            {/* Stops Detail Section */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-800 text-xs flex items-center gap-1 uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                Passenger Transit Terminals ({activeRoute.stops.length + 2}{" "}
                Station stops — Click to zoom map)
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
                  className="p-2 border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100/80 rounded-xl text-center cursor-pointer transition-colors shadow-xs"
                >
                  <span className="block text-[8px] text-emerald-600 font-bold font-mono">
                    DEP: 0 KM
                  </span>
                  <span className="block text-xs font-bold text-slate-800 truncate">
                    {activeRoute.start_location}
                  </span>
                </div>
                {activeRoute.stops.map((stop, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      focusOnCoords(
                        getCoordsForLocation(
                          stop,
                          idx + 1,
                          activeRoute.stops.length + 2,
                        ),
                        stop,
                      )
                    }
                    className="p-2 border border-amber-200 bg-amber-50/60 hover:bg-amber-100/80 rounded-xl text-center cursor-pointer transition-colors shadow-xs"
                  >
                    <span className="block text-[8px] text-amber-600 font-bold font-mono">
                      STOP {idx + 1}
                    </span>
                    <span className="block text-xs font-bold text-slate-700 truncate">
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
                  className="p-2 border border-rose-200 bg-rose-50/60 hover:bg-rose-100/80 rounded-xl text-center cursor-pointer transition-colors shadow-xs"
                >
                  <span className="block text-[8px] text-rose-600 font-bold font-mono">
                    ARRVAL HUB
                  </span>
                  <span className="block text-xs font-bold text-slate-800 truncate">
                    {activeRoute.end_location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add / Edit Route Overlay Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in"
          id="modal-container-routes"
        >
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg shadow-xl overflow-hidden flex flex-col p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-bold text-slate-950 text-base">
                {editingRoute
                  ? `Edit Route: ${editingRoute.route_name}`
                  : "Create New Public Transport Route"}
              </h3>
              <button
                id="btn-close-route-modal"
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-slate-150 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 md:col-span-2">
                  <label className="font-semibold text-slate-700">
                    Route Code / Name
                  </label>
                  <input
                    id="route-form-name"
                    type="text"
                    required
                    placeholder="e.g., Route 460 - Express Hub to Terminal C"
                    value={routeName}
                    onChange={(e) => setRouteName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Start Location (Origin)
                  </label>
                  <input
                    id="route-form-origin"
                    type="text"
                    required
                    placeholder="e.g. Depot Main"
                    value={startLoc}
                    onChange={(e) => setStartLoc(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    End Location (Destination)
                  </label>
                  <input
                    id="route-form-destination"
                    type="text"
                    required
                    placeholder="e.g. Central Station"
                    value={endLoc}
                    onChange={(e) => setEndLoc(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Total Distance (KM)
                  </label>
                  <input
                    id="route-form-distance"
                    type="number"
                    step="0.1"
                    required
                    min="0.1"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">
                    Estimated Duration (Mins)
                  </label>
                  <input
                    id="route-form-duration"
                    type="number"
                    required
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono font-semibold"
                  />
                </div>
              </div>

              {/* Stops management */}
              <div className="space-y-2 border-t pt-3 border-slate-100">
                <label className="font-semibold text-slate-705 block">
                  Configured Stops Point (In Sequence)
                </label>
                <div className="flex gap-2">
                  <input
                    id="input-add-stop"
                    type="text"
                    placeholder="e.g., Hospital Stop"
                    value={stopInput}
                    onChange={(e) => setStopInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                  />
                  <button
                    id="btn-add-stop-point"
                    type="button"
                    onClick={handleAddStop}
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-lg font-bold cursor-pointer"
                  >
                    Add Stop
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 max-h-[80px] overflow-y-auto py-1">
                  {stopsList.length === 0 ? (
                    <span className="text-[10px] text-slate-400 italic">
                      No intermediate stops configured yet. Express path
                      default.
                    </span>
                  ) : (
                    stopsList.map((stop, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-slate-100 border border-slate-250 text-slate-700 px-2 py-0.5 rounded-md font-medium text-[10px]"
                      >
                        {stop}
                        <button
                          type="button"
                          onClick={() => handleRemoveStop(i)}
                          className="text-red-500 hover:text-red-700 font-bold ml-0.5"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t pt-3 border-slate-100">
                <button
                  id="btn-route-modal-cancel"
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 select-none text-slate-600 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  id="btn-route-modal-save"
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg select-none shadow-sm transition-all font-semibold cursor-pointer"
                >
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
