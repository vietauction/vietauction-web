import type { User, UserProfileUpdate } from "@/types/user.type"

type ClientResponse<T> = {
  success: boolean
  message?: string
  data?: T
}

export type RegisterPayload = {
  username: string
  password: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  district: string
  ward: string
  yob: string
  cccd: string
}

export class ApiClientError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message)
  }
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  })
  const payload = (await response
    .json()
    .catch(() => null)) as ClientResponse<T> | null

  if (!response.ok || !payload?.success || payload.data === undefined) {
    throw new ApiClientError(
      payload?.message ?? "Không thể kết nối tới hệ thống. Vui lòng thử lại.",
      response.status
    )
  }

  return payload.data
}

export function login(data: { username: string; password: string }) {
  return request<User>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export function registerAccount(data: RegisterPayload) {
  return request<User>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export async function logout() {
  const response = await fetch("/api/auth/logout", { method: "POST" })
  if (!response.ok) {
    throw new ApiClientError(
      "Không thể đăng xuất. Vui lòng thử lại.",
      response.status
    )
  }
}

export function getSession() {
  return request<User>("/api/auth/session", { cache: "no-store" })
}

export function updateProfile(data: UserProfileUpdate) {
  return request<User>("/api/account/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  })
}
