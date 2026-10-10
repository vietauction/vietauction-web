import { NextResponse } from "next/server"

export function proxy() {
  // Frontend-only phase: account and participation screens use deterministic
  // mock state and must remain reachable without a backend session cookie.
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets/|favicon.ico).*)"],
}
