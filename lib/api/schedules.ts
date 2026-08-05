import type { Schedule } from "@/type";

type ScheduleResponse = {
  success?: boolean;
  schedule?: Schedule;
  error?: string;
};

type SchedulesResponse = {
  success?: boolean;
  schedules?: Schedule[];
  error?: string;
};

export async function getSchedules(): Promise<Schedule[]> {
  const response = await fetch("/api/schedules", {
    method: "GET",
    cache: "no-store",
  });

  const data: SchedulesResponse = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to load schedules.");
  }

  return data.schedules ?? [];
}

export async function createSchedule(payload: Partial<Schedule>): Promise<Schedule> {
  const response = await fetch("/api/schedules", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      route_id: payload.route_id,
      vehicle_id: payload.vehicle_id,
      driver_id: payload.driver_id,
      departure_time: payload.departure_time,
      arrival_time: payload.arrival_time,
      schedule_date: payload.schedule_date,
      status: payload.status,
    }),
  });

  const data: ScheduleResponse = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to create schedule.");
  }

  return data.schedule!;
}

export async function updateSchedule(
  scheduleId: string,
  payload: Partial<Schedule>,
): Promise<Schedule> {
  const response = await fetch(`/api/schedules/${scheduleId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data: ScheduleResponse = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to update schedule.");
  }

  return data.schedule!;
}

export async function deleteSchedule(scheduleId: string): Promise<void> {
  const response = await fetch(`/api/schedules/${scheduleId}`, {
    method: "DELETE",
  });

  const data: { message?: string; error?: string } = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error ?? "Failed to delete schedule.");
  }
}
