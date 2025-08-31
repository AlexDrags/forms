import type { ICountry } from './tcard';

export interface IStore {
  country: ICountry[];
  searchValue: ICountry[];
  clearCountry: () => void;
  updateCountry: (newBears: ICountry) => void;
  searchCountry: (value: ICountry[]) => void;
}
