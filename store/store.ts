import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModalState {
  open: boolean;
  setOpen: () => void;
}

export const useModalStore = create(
  persist<ModalState>(
    (set, get) => ({
      open: false,
      setOpen: () => set((state) => ({ open: !state.open })),
    }),
    {
      name: "new-key", // unique name for this store
      getStorage: () => localStorage, // default is localStorage
    }
  )
);
