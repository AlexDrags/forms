import type { ICountry } from './tcard';

export interface IStore {
  country: ICountry[];
  updateCountry: (newBears: ICountry) => void;
}
