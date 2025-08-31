import './style.css';
import { use } from 'react';
import { useCountryStore } from '../../store/useCountryStrore';
import { fetchData } from '../../api/fetchData';
import { searchData } from '../../api/searchData';
import type { ICountry, IDescriptionInfo } from '../../types/tcard';
import ItemList from '../ItemList/ItemList';

const cachedFetchData = (async () => fetchData('/owid-co2-data.json'))();

export default function List() {
  const data = use(cachedFetchData);
  const country = useCountryStore((state) => state.country);
  const updateCountry = useCountryStore((state) => state.updateCountry);
  const clearCountry = useCountryStore((state) => state.clearCountry);
  const searchValue = useCountryStore((state) => state.searchValue);
  const searchCountry = useCountryStore((state) => state.searchCountry);

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
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          clearCountry();
          const resultSearch = searchData(e, country) || [];
          if (resultSearch.length > 0) {
            resultSearch.forEach((result) => updateCountry(result));
          }
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter country"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {country.map((el, index) => {
          return <ItemList key={index} description={el} />;
        })}
      </ul>
    </>
  );
}
