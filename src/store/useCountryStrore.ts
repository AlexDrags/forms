import { create } from 'zustand';
import type { IStore } from '../types/tstore';

export const useCountryStore = create<IStore>((set) => ({
  country: [],
  searchValue: [],
  clearCountry: () => set({ country: [] }),
  updateCountry: (newBears) =>
    set((state) => ({ country: [...state.country, newBears] })),
  searchCountry: (value) => set({ searchValue: [...value] }),
}));
