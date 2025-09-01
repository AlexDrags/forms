import './style.css';
import type { ICountry } from '../../types/tcard';
import { useTableStore } from '../../store/useTableStore';
import { useCountryStore } from '../../store/useCountryStrore';
import { useEffect } from 'react';
export default function ItemList({
  description,
  yearChoice,
}: {
  description: ICountry;
  yearChoice: number;
}) {
  const showMethane = useTableStore((state) => state.isShowMethane);
  const showOiCo2 = useTableStore((state) => state.isShowOiCo2);
  const showTempChangeCo2 = useTableStore((state) => state.isShowTempChangeCo2);
  const country = useCountryStore((state) => state.country);
  useEffect(() => {}, [country]);
  return (
    <li>
      <table border={1} width={500}>
        <caption>
          Yearly data for {description.country}
          {description.info[0].iso_code
            ? ',ISO code:' + description.info[0].iso_code
            : null}
        </caption>
        <thead>
          <tr>
            <th>Year</th>
            <th>Population</th>
            <th>CO2</th>
            <th>CO2 per capita</th>
            {showMethane && <th>Methane</th>}
            {showOiCo2 && <th>Oil CO2</th>}
            {showTempChangeCo2 && <th>Temperature change from CO2</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {yearChoice === null
                ? description.info[0].data[description.info[0].data.length - 1][
                    'year'
                  ] || 'N/A'
                : (yearChoice &&
                    description.info[0].data
                      .filter((obj) => obj.year === yearChoice)
                      .map((year) => year.year)) ||
                  'N/A'}
            </td>
            <td>
              {yearChoice === null
                ? description.info[0].data[description.info[0].data.length - 1][
                    'population'
                  ] || 'N/A'
                : yearChoice &&
                  description.info[0].data
                    .filter((obj) => obj.year === yearChoice)
                    .map((year) => (year.population ? year.population : 'N/A'))}
            </td>
            <td>
              {yearChoice === null
                ? description.info[0].data[description.info[0].data.length - 1][
                    'co2'
                  ] || 'N/A'
                : yearChoice &&
                  description.info[0].data
                    .filter((obj) => obj.year === yearChoice)
                    .map((year) => (year.co2 ? year.co2 : 'N/A'))}
            </td>
            <td>
              {yearChoice === null
                ? description.info[0].data[description.info[0].data.length - 1][
                    'co2_per_capita'
                  ] || 'N/A'
                : yearChoice &&
                  description.info[0].data
                    .filter((obj) => obj.year === yearChoice)
                    .map((year) =>
                      year.co2_per_capita ? year.co2_per_capita : 'N/A'
                    )}
            </td>
            {showMethane && (
              <td>
                {yearChoice === null
                  ? description.info[0].data[
                      description.info[0].data.length - 1
                    ]['methane'] || 'N/A'
                  : yearChoice &&
                    description.info[0].data
                      .filter((obj) => obj.year === yearChoice)
                      .map((year) => (year.methane ? year.methane : 'N/A'))}
              </td>
            )}
            {showOiCo2 && (
              <td>
                {yearChoice === null
                  ? description.info[0].data[
                      description.info[0].data.length - 1
                    ]['oil_co2'] || 'N/A'
                  : yearChoice &&
                    description.info[0].data
                      .filter((obj) => obj.year === yearChoice)
                      .map((year) => (year.oil_co2 ? year.oil_co2 : 'N/A'))}
              </td>
            )}
            {showTempChangeCo2 && (
              <td>
                {yearChoice === null
                  ? description.info[0].data[
                      description.info[0].data.length - 1
                    ]['temperature_change_from_co2'] || 'N/A'
                  : yearChoice &&
                    description.info[0].data
                      .filter((obj) => obj.year === yearChoice)
                      .map((year) =>
                        year.temperature_change_from_co2
                          ? year.temperature_change_from_co2
                          : 'N/A'
                      )}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </li>
  );
}
