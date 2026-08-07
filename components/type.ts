export * from "../type";

/**
 * Extended User interface for API responses (UserManagement).
 * Extends the root User with API-specific fields returned from the DB.
 */
export interface AppUser {
  user_id: string;
  full_name: string;
  email: string;
  username: string;
  role: string;
  status: string;
  created_at: string;
  // API response extras
  id?: number;
  fullName?: string;
  depotId?: number | null;
  depot?: {
    id: number;
    name: string;
    code: string;
  } | null;
}
