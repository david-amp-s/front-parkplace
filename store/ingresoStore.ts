import { create } from "zustand";

interface IngresoState {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

export const useIngresoStore = create<IngresoState>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
