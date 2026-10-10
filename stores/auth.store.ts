import api from "@/configs/api.config";
import { User } from "@/types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  loading: boolean;

  setAccessToken: (accessToken: string) => void;
  clearState: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      loading: false,

      setAccessToken: (accessToken) => set({ accessToken }),
      clearState: () => set({ accessToken: null, refreshToken: null, user: null, loading: false }),
    }),

    {
      name: "auth-storage", // localStorage key
    }
  )
);