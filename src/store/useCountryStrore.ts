import { create } from 'zustand';

export type ICountryInfo = Array<unknown>;
interface ICountry {
  country: string;
  info: ICountryInfo;
}

interface IStore {
  country: ICountry[];
  updateCountry: (newBears: ICountry) => void;
}

export const useCountryStore = create<IStore>((set) => ({
  country: [],
  updateCountry: (newBears) =>
    set((state) => ({ country: [...state.country, newBears] })),
}));
