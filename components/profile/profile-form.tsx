"use client"

import { useState } from "react"
import { Lock, Save } from "lucide-react"
import { cn } from "@/lib/utils"
import type { UserProfile, ProfileFormValues } from "./profile-types"
import { LANGUAGE_OPTIONS } from "./mock-profile-data"

interface ProfileFormProps {
  readonly user: UserProfile
}

// ─── Atom: Styled Input ───────────────────────────────────────────────────────
const inputClass = cn(
  "w-full rounded-md bg-[color:var(--surface-container-highest)] px-4 py-3 text-sm text-foreground",
  "border border-transparent outline-none",
  "transition-all duration-200",
  "placeholder:text-muted-foreground/40",
  "focus:border-orange-500 focus:bg-[color:var(--surface-container-low)]"
)

export function ProfileForm({ user }: ProfileFormProps) {
  const [formValues, setFormValues] = useState<ProfileFormValues>({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    preferredLanguage: user.preferredLanguage,
    defaultAddress: user.defaultAddress,
  })
  const [is2FA, setIs2FA] = useState(user.is2FAEnabled)
  const [isSaved, setIsSaved] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  function handleChange(field: keyof ProfileFormValues, value: string) {
    setFormValues((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-card p-8 ring-1 ring-border/50 shadow-sm min-h-[600px]">
      
      {/* ─── Header Section ────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-2">
        <div className="max-w-md">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-primary mb-2">
            CÀI ĐẶT HỒ SƠ
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cập nhật thông tin cá nhân của bạn để nhận thông báo đấu giá chính xác nhất.
          </p>
        </div>
        
        <button
          onClick={handleSubmit}
          className={cn(
            "shrink-0 inline-flex items-center justify-center rounded-sm px-6 py-3 font-semibold text-[10px] tracking-widest uppercase transition-all duration-300 shadow-sm",
            isSaved 
              ? "bg-emerald-600 text-primary-foreground" 
              : "bg-orange-500 text-primary-foreground hover:bg-orange-600"
          )}
        >
          {isSaved ? "ĐÃ LƯU" : "LƯU THAY ĐỔI"}
        </button>
      </div>

      {/* ─── Form Section ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-orange-500 transition-colors">
            HỌ VÀ TÊN
          </label>
          <input
            type="text"
            value={formValues.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-orange-500 transition-colors">
            EMAIL
          </label>
          <input
            type="email"
            value={formValues.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-orange-500 transition-colors">
            SỐ ĐIỆN THOẠI
          </label>
          <input
            type="tel"
            value={formValues.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Language */}
        <div className="space-y-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-orange-500 transition-colors">
            NGÔN NGỮ ƯU TIÊN
          </label>
          <select
            value={formValues.preferredLanguage}
            onChange={(e) => handleChange("preferredLanguage", e.target.value as any)}
            className={cn(inputClass, "appearance-none")}
          >
            {LANGUAGE_OPTIONS.map((opt) => (
               <option key={opt.value} value={opt.value} className="bg-card text-foreground">
                 {opt.label}
               </option>
            ))}
          </select>
        </div>

        {/* Address */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-orange-500 transition-colors">
            ĐỊA CHỈ GIAO HÀNG MẶC ĐỊNH
          </label>
          <textarea
            rows={2}
            value={formValues.defaultAddress}
            onChange={(e) => handleChange("defaultAddress", e.target.value)}
            className={cn(inputClass, "resize-none leading-relaxed")}
          />
        </div>
      </div>

      {/* ─── Security Section (2FA) ────────────────────────────────── */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-[color:var(--surface-container-highest)] p-5 border border-border/20">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-card border border-border/50">
            <Lock size={16} className="text-orange-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Xác thực hai lớp (2FA)</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Tăng cường bảo mật cho các giao dịch giá trị cao.
            </p>
          </div>
        </div>
        
        {/* Toggle Switch */}
        <button
          type="button"
          role="switch"
          aria-checked={is2FA}
          onClick={() => setIs2FA(!is2FA)}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 outline-none",
            is2FA ? "bg-orange-500" : "bg-muted"
          )}
        >
           <span
             className={cn(
               "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-primary-foreground shadow-sm transition-transform duration-200",
               is2FA ? "translate-x-6" : "translate-x-1"
             )}
           />
        </button>
      </div>

    </div>
  )
}
