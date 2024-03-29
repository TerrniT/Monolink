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

interface SpinnerState {
  isLoading: boolean
  setIsLoading: (payload: boolean) => void
}

interface FilterViewState {
  listView: boolean
  cardView: boolean
  setListView: () => void
  setCardView: () => void
}

interface LinkCounterState {
  counter: number | undefined
  setCounter: (payload: number | undefined) => void
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

export const useSpinnerStore = create<SpinnerState>()(
  devtools(
    persist<SpinnerState>((set) => ({
      isLoading: false,
      setIsLoading: (payload) => set((state) => ({ isLoading: payload }))
    }),
      {
        name: 'spinner-key',
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


export const useCounterStore = create(
  devtools(
    persist<LinkCounterState>((set) => ({
      counter: 0,
      setCounter: (payload) => set((state) => ({ counter: payload }))
    }),
      {
        name: 'counter-key',
        getStorage: () => localStorage
      })
  )
);
