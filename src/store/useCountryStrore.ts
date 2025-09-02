import { create } from 'zustand';
import type { IStore, IYearsStore } from '../types/tstore';

export const useCountryStore = create<IStore>((set) => ({
  country: [],
  searchValue: [],
  clearCountry: () => set({ country: [] }),
  updateCountry: (newBears) =>
    set((state) => ({ country: [...state.country, newBears] })),
  searchCountry: (value) => set({ searchValue: [...value] }),
}));

export const useYearsStore = create<IYearsStore>((set) => ({
  years: [],
  updateYears: (year) => set((state) => ({ years: [...state.years, year] })),
}));
