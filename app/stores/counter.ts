import { create } from "zustand";
interface CounterStore {
  count: number;
  increment: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useCounterStore;
