import "server-only"

import type { User } from "@/types/user.type"

export const ACCESS_TOKEN_COOKIE = "va_access_token"
export const REFRESH_TOKEN_COOKIE = "va_refresh_token"

const DEFAULT_BACKEND_TIMEOUT_MS = 10_000

export type BackendEnvelope<T> = {
  success: boolean
  message?: string
  data?: T
  errors?: Array<{ field?: string; message?: string }>
}

export type BackendAuthPayload = {
  accessToken: string
  refreshToken: string
  user: User
}

export class BackendRequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly payload?: BackendEnvelope<unknown>
  ) {
    super(message)
  }
}

function getBackendUrl() {
  const configuredUrl =
    process.env.API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    "http://localhost:8080"

  return configuredUrl.replace(/\/$/, "")
}

function getBackendTimeout() {
  const configuredTimeout = Number(process.env.API_REQUEST_TIMEOUT_MS)

  return Number.isFinite(configuredTimeout) && configuredTimeout > 0
    ? configuredTimeout
    : DEFAULT_BACKEND_TIMEOUT_MS
}

function isTimeoutError(error: unknown) {
  return (
    error instanceof DOMException &&
    (error.name === "AbortError" || error.name === "TimeoutError")
  )
}

export async function backendRequest<T>(path: string, init?: RequestInit) {
  let response: Response

  try {
    response = await fetch(`${getBackendUrl()}${path}`, {
      ...init,
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
      signal: init?.signal ?? AbortSignal.timeout(getBackendTimeout()),
    })
  } catch (error) {
    if (isTimeoutError(error)) {
      throw new BackendRequestError(
        "Dịch vụ API phản hồi quá lâu. Vui lòng thử lại sau.",
        504
      )
    }

    throw new BackendRequestError(
      "Không thể kết nối tới dịch vụ API. Vui lòng thử lại sau.",
      502
    )
  }

  const payload = (await response
    .json()
    .catch(() => null)) as BackendEnvelope<T> | null

  if (!response.ok || !payload?.success || payload.data === undefined) {
    const validationMessage = payload?.errors
      ?.map((error) => error.message)
      .filter(Boolean)
      .join(" ")

    throw new BackendRequestError(
      validationMessage || payload?.message || "Dịch vụ API chưa sẵn sàng.",
      response.status,
      payload ?? undefined
    )
  }

  return payload.data
}

export function readJwtUsername(token: string) {
  try {
    const [, encodedPayload] = token.split(".")
    if (!encodedPayload) return null

    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8")
    ) as { sub?: unknown; exp?: unknown }

    if (typeof payload.sub !== "string") return null
    if (typeof payload.exp === "number" && payload.exp * 1000 <= Date.now())
      return null

    return payload.sub
  } catch {
    return null
  }
}

export function getUserByAccessToken(accessToken: string) {
  const username = readJwtUsername(accessToken)
  if (!username) return null

  return backendRequest<User>(
    `/api/v1/users/by-username/${encodeURIComponent(username)}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )
}
