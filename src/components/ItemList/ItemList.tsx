import './style.css';
import type { ICountry } from '../../types/tcard';
import { useTableStore } from '../../store/useTableStore';
export default function ItemList({ description }: { description: ICountry }) {
  const showMethane = useTableStore((state) => state.isShowMethane);
  const showOiCo2 = useTableStore((state) => state.isShowOiCo2);
  const showTempChangeCo2 = useTableStore((state) => state.isShowTempChangeCo2);
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
              {description.info[0].data[description.info[0].data.length - 1][
                'year'
              ]
                ? description.info[0].data[description.info[0].data.length - 1][
                    'year'
                  ]
                : 'N/A'}
            </td>
            <td>
              {description.info[0].data[description.info[0].data.length - 1][
                'population'
              ]
                ? description.info[0].data[description.info[0].data.length - 1][
                    'population'
                  ]
                : 'N/A'}
            </td>
            <td>
              {description.info[0].data[description.info[0].data.length - 1][
                'co2'
              ]
                ? description.info[0].data[description.info[0].data.length - 1][
                    'co2'
                  ]
                : 'N/A'}
            </td>
            <td>
              {description.info[0].data[description.info[0].data.length - 1][
                'co2_per_capita'
              ]
                ? description.info[0].data[description.info[0].data.length - 1][
                    'co2_per_capita'
                  ]
                : 'N/A'}
            </td>
            {showMethane && (
              <td>
                {description.info[0].data[description.info[0].data.length - 1][
                  'methane'
                ]
                  ? description.info[0].data[
                      description.info[0].data.length - 1
                    ]['methane']
                  : 'N/A'}
              </td>
            )}
            {showOiCo2 && (
              <td>
                {description.info[0].data[description.info[0].data.length - 1][
                  'oil_co2'
                ]
                  ? description.info[0].data[
                      description.info[0].data.length - 1
                    ]['oil_co2']
                  : 'N/A'}
              </td>
            )}
            {showTempChangeCo2 && (
              <td>
                {description.info[0].data[description.info[0].data.length - 1][
                  'temperature_change_from_co2'
                ]
                  ? description.info[0].data[
                      description.info[0].data.length - 1
                    ]['temperature_change_from_co2']
                  : 'N/A'}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </li>
  );
}
