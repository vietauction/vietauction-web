import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import {
  ACCESS_TOKEN_COOKIE,
  backendRequest,
  getUserByAccessToken,
} from "@/lib/server/backend-client"
import { normalizeUserText } from "@/lib/server/user-text"
import type { User, UserProfileUpdate } from "@/types/user.type"

export async function PUT(request: Request) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value
  if (!accessToken) {
    return NextResponse.json(
      { success: false, message: "Vui lòng đăng nhập để cập nhật hồ sơ." },
      { status: 401 }
    )
  }

  const profile = (await request
    .json()
    .catch(() => null)) as UserProfileUpdate | null
  if (!profile?.firstName?.trim() || !profile.lastName?.trim()) {
    return NextResponse.json(
      { success: false, message: "Họ và tên không được để trống." },
      { status: 400 }
    )
  }

  try {
    const currentUser = await getUserByAccessToken(accessToken)
    if (!currentUser) throw new Error("Invalid session")

    const user = await backendRequest<User>(`/api/v1/users/${currentUser.id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify(profile),
    })

    return NextResponse.json({ success: true, data: normalizeUserText(user) })
  } catch {
    return NextResponse.json(
      { success: false, message: "Không thể cập nhật hồ sơ lúc này." },
      { status: 502 }
    )
  }
}
