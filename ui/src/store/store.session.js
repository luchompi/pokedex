import { create } from 'zustand'

export const useSessionStore = create((set) => ({
    user: null,
    PAT: null,
    RAT: null,
    isAuth: false,
    setTokens:(data) => set({ PAT: data.access, RAT: data.refresh, isAuth: true }),
    setUser: (user) => set({ user }),
    logout: () => set({ user: null, PAT: null, RAT: null, isAuth: false })
}))