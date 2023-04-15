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

interface FilterViewState {
  listView: boolean
  cardView: boolean
  setListView: () => void
  setCardView: () => void
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
      name: 'modal-key',
      getStorage: () => localStorage,
    }
  )
)


export const useFilterViewStore = create(
  persist<FilterViewState>(
    (set) => ({
      listView: false,
      cardView: true,
      setListView: () => set(() => ({ listView: true, cardView: false })),
      setCardView: () => set(() => ({ listView: false, cardView: true }))
    }),
    {
      name: 'filter-key',
      getStorage: () => localStorage
    }
  )
)
