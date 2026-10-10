// ─── Profile Domain Types ─────────────────────────────────────────────────────

export interface UserProfile {
  id: string
  fullName: string
  email: string
  phone: string
  preferredLanguage: "vi" | "en" | "fr"
  defaultAddress: string
  avatarUrl: string
  coverUrl?: string
  membershipTier: "standard" | "premium" | "sovereign"
  isEmailVerified: boolean
  isPhoneVerified: boolean
  is2FAEnabled: boolean
  stats: UserStats
  wallet: WalletInfo
}

export interface UserStats {
  activeAuctions: number
  wonAuctions: number
  watchlisted: number
}

export interface WalletInfo {
  balance: number
  auctionLimit: number
  currency: "VND"
}

export type ProfileNavItem = {
  id: string
  label: string
  href: string
  iconName: string
}

export type ProfileFormValues = Pick<
  UserProfile,
  "fullName" | "email" | "phone" | "preferredLanguage" | "defaultAddress"
>
