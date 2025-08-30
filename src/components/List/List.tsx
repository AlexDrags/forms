import './style.css';
import { use } from 'react';
import { useCountryStore } from '../../store/useCountryStrore';
import { fetchData } from '../../api/fetchData';
import ItemList from '../ItemList/ItemList';

const cachedFetchData = (async () => fetchData('/owid-co2-data.json'))();

export default function List() {
  const data = use(cachedFetchData);
  const country = useCountryStore((state) => state.country);
  const updateCountry = useCountryStore((state) => state.updateCountry);

  if (country.length === 0 && data) {
    for (const [key, value] of Object.entries(data)) {
      const countryInfo = Array.isArray(value) ? value : [value];
      const countryObject = {
        country: key,
        info: countryInfo,
      };
      updateCountry(countryObject);
    }
  }

  return (
    <ul>
      {country.map((el, index) => {
        return <ItemList key={index} description={el} />;
      })}
    </ul>
  );
}
