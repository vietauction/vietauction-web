import { redirect } from "next/navigation"

import { ProfileForm } from "@/components/account/profile-form"
import { getSessionUser } from "@/lib/server/auth-session"

export default async function AccountProfilePage() {
  const user = await getSessionUser()
  if (!user) redirect("/login")

  return <ProfileForm initialUser={user} />
}
