import { create } from 'zustand'
import { persist, devtools } from "zustand/middleware";

interface ModalState {
  open: boolean
  setOpen: () => void
}

interface CmdState {
  open: boolean
  setOpen: () => void
}


export const useCmdStore = create<CmdState>()(
  devtools(
    persist<CmdState>((set) => ({
      open: false,
      setOpen: () => set((state) => ({ open: !state.open })),
    }),
      {
        name: 'cmd-key',
        getStorage: () => localStorage
      })
  )
);


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

