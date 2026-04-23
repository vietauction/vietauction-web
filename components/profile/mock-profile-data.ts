import type { UserProfile, ProfileNavItem } from "./profile-types"

export const MOCK_USER: UserProfile = {
  id: "usr_sovereign_001",
  fullName: "Nguyễn Văn A",
  email: "vana.nguyen@sovereign.vn",
  phone: "+84 90 123 4567",
  preferredLanguage: "vi",
  defaultAddress: "123 Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh, Việt Nam",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJSkSNaZqSd8c23qGvzBhi5YmIZv78sR8qHZmnD12YST8V-UtHhfjd53qMSSShTA_l0xBoAClU-W9fT-RKh3urVP98tyMR7PPDNYn9iCO3XbDwmTE4zjYpdwVG_pzvLm5bTpDZCIGjPGRzkERqobQnhaXc-tGgIDjyxABXAkCcwQhPyldzzJXxXXDaFThwt9J7-LDpWC__Ezza6uWmyDErMDt-7lkt7xaeaKs6iV4JEOHIlo-DKOu4vg7UaaKO5fB9gnCSsyEkb3r-",
  membershipTier: "sovereign",
  isEmailVerified: true,
  isPhoneVerified: true,
  is2FAEnabled: false,
  stats: {
    activeAuctions: 12,
    wonAuctions: 34,
    watchlisted: 45,
  },
  wallet: {
    balance: 2_450_000_000,
    auctionLimit: 5_000_000_000,
    currency: "VND",
  },
}

export const PROFILE_NAV_ITEMS: ProfileNavItem[] = [
  { id: "personal-info", label: "Hồ sơ cá nhân", href: "/profile", iconName: "User" },
  { id: "auction-history", label: "Lịch sử đấu giá", href: "/auction-list", iconName: "Gavel" },
  { id: "wallet", label: "Ví của tôi", href: "#wallet", iconName: "Wallet" },
  { id: "notifications", label: "Cài đặt thông báo", href: "#notifications", iconName: "Bell" },
  { id: "security", label: "Bảo mật", href: "#security", iconName: "ShieldCheck" },
]

export const TIER_LABELS: Record<UserProfile["membershipTier"], string> = {
  standard: "Thành viên",
  premium: "Thành viên cao cấp",
  sovereign: "Sovereign Member",
}

export const LANGUAGE_OPTIONS = [
  { value: "vi", label: "Tiếng Việt" },
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
]
