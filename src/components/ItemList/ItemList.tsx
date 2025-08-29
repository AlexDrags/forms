import './style.css';
import type { ICountry } from '../../types/tcard';
export default function ItemList({ description }: { description: ICountry }) {
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
          </tr>
        </tbody>
      </table>
    </li>
  );
}
