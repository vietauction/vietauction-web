import "server-only"

import type { NextResponse } from "next/server"

import {
  ACCESS_TOKEN_COOKIE,
  type BackendAuthPayload,
  REFRESH_TOKEN_COOKIE,
} from "@/lib/server/backend-client"

export function setAuthCookies(
  response: NextResponse,
  auth: BackendAuthPayload
) {
  const secure = process.env.NODE_ENV === "production"

  response.cookies.set(ACCESS_TOKEN_COOKIE, auth.accessToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  })
  response.cookies.set(REFRESH_TOKEN_COOKIE, auth.refreshToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  })
}
