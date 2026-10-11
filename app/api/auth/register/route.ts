import { NextResponse } from "next/server"

import { setAuthCookies } from "@/lib/server/auth-cookies"
import {
  backendRequest,
  BackendRequestError,
  type BackendAuthPayload,
} from "@/lib/server/backend-client"

export async function POST(request: Request) {
  const registration = await request.json().catch(() => null)
  if (!registration || typeof registration !== "object") {
    return NextResponse.json(
      { success: false, message: "Thông tin đăng ký chưa hợp lệ." },
      { status: 400 }
    )
  }

  try {
    const auth = await backendRequest<BackendAuthPayload>(
      "/api/v1/auth/register",
      {
        method: "POST",
        body: JSON.stringify(registration),
      }
    )
    const response = NextResponse.json({ success: true, data: auth.user })
    setAuthCookies(response, auth)
    return response
  } catch (error) {
    if (error instanceof BackendRequestError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: error.status || 502 }
      )
    }

    return NextResponse.json(
      { success: false, message: "Không thể kết nối tới dịch vụ đăng ký." },
      { status: 502 }
    )
  }
}
