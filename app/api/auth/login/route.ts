import { NextResponse } from "next/server"

import { setAuthCookies } from "@/lib/server/auth-cookies"
import {
  backendRequest,
  BackendRequestError,
  type BackendAuthPayload,
} from "@/lib/server/backend-client"

export async function POST(request: Request) {
  const credentials = (await request.json().catch(() => null)) as {
    username?: unknown
    password?: unknown
  } | null

  if (
    typeof credentials?.username !== "string" ||
    typeof credentials.password !== "string" ||
    !credentials.username.trim() ||
    credentials.password.length < 6
  ) {
    return NextResponse.json(
      { success: false, message: "Tên đăng nhập hoặc mật khẩu chưa hợp lệ." },
      { status: 400 }
    )
  }

  try {
    const auth = await backendRequest<BackendAuthPayload>(
      "/api/v1/auth/login",
      {
        method: "POST",
        body: JSON.stringify({
          username: credentials.username.trim(),
          password: credentials.password,
        }),
      }
    )
    const response = NextResponse.json({ success: true, data: auth.user })

    setAuthCookies(response, auth)

    return response
  } catch (error) {
    if (error instanceof BackendRequestError) {
      return NextResponse.json(
        {
          success: false,
          message:
            error.status === 400 || error.status === 401
              ? "Tên đăng nhập hoặc mật khẩu không đúng."
              : error.message,
        },
        { status: error.status || 502 }
      )
    }

    return NextResponse.json(
      { success: false, message: "Không thể kết nối tới dịch vụ đăng nhập." },
      { status: 502 }
    )
  }
}
