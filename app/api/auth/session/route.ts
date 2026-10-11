import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import {
  ACCESS_TOKEN_COOKIE,
  getUserByAccessToken,
  REFRESH_TOKEN_COOKIE,
} from "@/lib/server/backend-client"

export async function GET() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value

  if (!accessToken) {
    return NextResponse.json(
      { success: false, message: "Phiên đăng nhập không tồn tại." },
      { status: 401 }
    )
  }

  try {
    const user = await getUserByAccessToken(accessToken)
    if (!user) throw new Error("Invalid access token")

    return NextResponse.json({ success: true, data: user })
  } catch {
    const response = NextResponse.json(
      { success: false, message: "Phiên đăng nhập đã hết hạn." },
      { status: 401 }
    )
    response.cookies.delete(ACCESS_TOKEN_COOKIE)
    response.cookies.delete(REFRESH_TOKEN_COOKIE)
    return response
  }
}
