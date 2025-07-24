import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define your store's state and actions
interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'counter-storage', // unique name for the item in localStorage
      storage: createJSONStorage(() => localStorage), // (optional) by default, it uses localStorage
    }
  )
);

export default useCounterStore;