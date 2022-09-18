import create from 'zustand'
import { produce } from 'immer'

export type UseZustandProps = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useZustand = create<UseZustandProps>((set) => ({
  count: 0,

  increment: () =>
    set((state) =>
      produce(state, (draft) => {
        draft.count += 1
      }),
    ),

  decrement: () =>
    set((state) =>
      produce(state, (draft) => {
        if (draft.count === 0) return
        draft.count -= 1
      }),
    ),

  reset: () => set({ count: 0 }),
}))
