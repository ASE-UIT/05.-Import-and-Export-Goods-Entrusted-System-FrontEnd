import { create } from "zustand";

interface FreightStore {
  id: string;
  setId: (id: string) => void;
}

export const useFreightStore = create<FreightStore>((set) => ({
  id: "",
  setId: (id) => set({ id }),
}));
