import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import {
  ACCESS_TOKEN_COOKIE,
  backendRequest,
  REFRESH_TOKEN_COOKIE,
} from "@/lib/server/backend-client"

export async function POST() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value

  if (accessToken) {
    await backendRequest<unknown>("/api/v1/auth/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
    }).catch(() => undefined)
  }

  const response = NextResponse.json({ success: true, data: null })
  response.cookies.delete(ACCESS_TOKEN_COOKIE)
  response.cookies.delete(REFRESH_TOKEN_COOKIE)
  return response
}
