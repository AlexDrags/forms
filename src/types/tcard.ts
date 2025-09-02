export type ICountryInfo = Array<unknown>;
interface IData {
  year: number | 'N/A';
  population: number | 'N/A';
  co2: number | 'N/A';
  co2_per_capita: number | 'N/A';
  methane: number | 'N/A';
  oil_co2: number | 'N/A';
  temperature_change_from_co2: number | 'N/A';
}

export interface IDescriptionInfo {
  iso_code: string;
  data: IData[];
}

export interface ICountry {
  country: string;
  info: IDescriptionInfo[];
}

export interface ITable {
  isShowMethane: boolean;
  isShowOiCo2: boolean;
  isShowTempChangeCo2: boolean;
  updateShowMethane: () => void;
  updateShowOiCo2: () => void;
  updateShowTempChangeCo2: () => void;
}
