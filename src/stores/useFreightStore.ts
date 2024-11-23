import { create } from "zustand";

interface State {
  id: string;
}

interface Actions {
  setId: (id: string) => void;
}

export const useFreightStore = create<State & Actions>((set) => ({
  id: "",
  setId: (id) => set({ id }),
}));
