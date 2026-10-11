import "server-only"

import { cookies } from "next/headers"

import {
  ACCESS_TOKEN_COOKIE,
  getUserByAccessToken,
} from "@/lib/server/backend-client"

export async function getSessionUser() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value
  if (!accessToken) return null

  try {
    return await getUserByAccessToken(accessToken)
  } catch {
    return null
  }
}
