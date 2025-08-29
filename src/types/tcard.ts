export type ICountryInfo = Array<unknown>;
interface IData {
  year: number | 'N/A';
  population: number | 'N/A';
  co2: number | 'N/A';
  co2_per_capita: number | 'N/A';
}

interface IDescriptionInfo {
  iso_code: string;
  data: IData[];
}

export interface ICountry {
  country: string;
  info: IDescriptionInfo[];
}
