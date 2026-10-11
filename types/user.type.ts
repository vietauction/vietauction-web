export type UserRole = "ADMIN" | "STAFF" | "MANAGER" | "MEMBER"

export type AccountState =
  | "ACTIVE"
  | "VERIFIED"
  | "INACTIVE"
  | "DISABLE"
  | "BAN_PARTICIPATING"

export type Bank = {
  id: number
  name: string
  logoUrl?: string
}

export type User = {
  id: number
  username: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  phone?: string
  address?: string
  city?: string
  district?: string
  ward?: string
  yob?: string
  avatar?: string
  cccd?: string
  cccdFirst?: string
  cccdLast?: string
  cccdFrom?: string
  registerDate?: string
  state: AccountState
  role: UserRole
  bankAccountNumber?: string
  bankAccountName?: string
  bank?: Bank
}

export type UserProfileUpdate = Pick<
  User,
  "firstName" | "lastName" | "phone" | "address" | "city" | "district" | "ward"
>
