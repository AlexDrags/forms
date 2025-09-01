import type { ICountry } from './tcard';

export interface IStore {
  country: ICountry[];
  searchValue: ICountry[];
  clearCountry: () => void;
  updateCountry: (newBears: ICountry) => void;
  searchCountry: (value: ICountry[]) => void;
}

export interface IYearsStore {
  years: number[];
  updateYears: (year: number) => void;
}
