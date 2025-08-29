import { create } from 'zustand';
import type { IStore } from '../types/tstore';

export const useCountryStore = create<IStore>((set) => ({
  country: [],
  updateCountry: (newBears) =>
    set((state) => ({ country: [...state.country, newBears] })),
}));
