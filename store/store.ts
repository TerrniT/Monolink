import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ModalState {
  open: boolean
  setOpen: () => void
}

interface AuthState {
  user: null
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
  setUser: (user: any) => void
}

export const useModalStore = create(
  persist<ModalState>(
    (set) => ({
      open: false,
      setOpen: () => set((state) => ({ open: !state.open })),
    }),
    {
      name: 'new-key', // unique name for this store
      getStorage: () => localStorage, // default is localStorage
    }
  )
)

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      user: null,
      isAuth: false,
      setUser: (user) => set({ user }),
      setIsAuth: (isAuth: boolean) => set((state) => ({ isAuth })),
    }),
    {
      name: 'auth-key', // unique name for this store
      getStorage: () => localStorage, // default is localStorage
    }
  )
)
