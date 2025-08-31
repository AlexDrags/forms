import type { ICountry } from './tcard';

export interface IStore {
  country: ICountry[];
  searchValue: ICountry[];
  updateCountry: (newBears: ICountry) => void;
  searchCountry: (value: ICountry[]) => void;
}
