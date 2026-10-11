import type { User } from "@/types/user.type"
import { create } from "zustand"

interface AuthState {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  clearState: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  clearState: () => set({ user: null, loading: false }),
}))
