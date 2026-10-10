"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ProfileSidebar } from "@/components/profile/profile-sidebar"
import { ProfileForm } from "@/components/profile/profile-form"
import { AccountSummary } from "@/components/profile/account-summary"
import { MOCK_USER } from "@/components/profile/mock-profile-data"
import { SiteHeaderAuth } from "@/components/site-header-auth"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"

export default function ProfilePage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans w-full overflow-x-hidden">
      
      {/* ─── HEADER ĐỒNG BỘ 100% VỚI TRANG CHỦ ─── */}
      <div className="w-full shrink-0 z-50 relative">
        <SiteHeaderAuth />
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="flex items-center justify-between px-6 py-4 lg:hidden bg-card border-b border-border/50 shrink-0 w-full relative z-40">
        <h1 className="font-heading font-black text-primary truncate max-w-[200px]">THE SOVEREIGN CURATOR</h1>
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="text-primary p-2 transition-colors hover:bg-muted rounded-md"
        >
          {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ─── MAIN CONTAINER: BREATHABLE LAYOUT (Max-width & Căn giữa) ─── */}
      <div className="flex flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 py-10 lg:py-16 gap-8 relative items-start">
        
        {/* ─── SIDEBAR TRONG CONTAINER ─── */}
        <div className={cn(
          "w-[280px] shrink-0 bg-card border border-border/50 shadow-sm rounded-2xl transition-transform fixed inset-y-0 left-0 z-50 lg:sticky lg:top-[100px] lg:h-auto overflow-y-auto lg:shadow-none pt-4",
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
           <ProfileSidebar user={MOCK_USER} />
        </div>

        {/* Overlay for mobile */}
        {isMobileNavOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsMobileNavOpen(false)}
          />
        )}

        {/* ─── CỘT NỘI DUNG (Grid bên phải) ─── */}
        <div className="flex-1 w-full min-w-0">
          
          {/* Tiêu đề trang con */}
          <div className="hidden lg:flex items-center justify-between mb-10">
            <h1 className="font-heading text-2xl font-black uppercase tracking-widest text-primary">
              THE SOVEREIGN CURATOR
            </h1>
          </div>

          {/* Grid Layout Account Summary + Form */}
          <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-8 items-start">
            <div className="w-full">
               <AccountSummary user={MOCK_USER} />
            </div>
            <div className="w-full">
               <ProfileForm user={MOCK_USER} />
            </div>
          </div>
        </div>

      </div>

      {/* ─── FOOTER ĐỒNG BỘ 100% (Đặt phía dưới Bottom Component) ─── */}
      <div className="mt-auto w-full border-t border-border/50 bg-[color:var(--surface-container-low)] shrink-0">
        <SiteFooter />
      </div>

    </div>
  )
}

