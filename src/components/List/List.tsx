import './style.css';
import { use, useEffect, useState } from 'react';
import { useCountryStore, useYearsStore } from '../../store/useCountryStrore';
import { fetchData } from '../../api/fetchData';
import { searchData } from '../../api/searchData';
import ItemList from '../ItemList/ItemList';

const cachedFetchData = (async () => fetchData('/owid-co2-data.json'))();

export default function List() {
  const data = use(cachedFetchData);
  const country = useCountryStore((state) => state.country);
  const updateCountry = useCountryStore((state) => state.updateCountry);
  const clearCountry = useCountryStore((state) => state.clearCountry);
  const [choiceYear, setChoiceYear] = useState<number | null>(null);
  const years = useYearsStore((state) => state.years);

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

  if (years.length === 0 && country.length > 0) {
    country[0].info[0].data.forEach(({ year }: { year: number | 'N/A' }) => {
      if (typeof year === 'number') years.push(year);
    });
  }

  useEffect(() => {}, [choiceYear, setChoiceYear]);

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

      <form
        id="search"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(choiceYear);
        }}
      >
        <select
          name="yearSelect"
          form="search"
          id="years"
          defaultValue={years[years.length - 1]}
          onChange={(e) => {
            if (choiceYear === null) setChoiceYear(years[years.length - 1]);
            setChoiceYear(Number(e.target.value));
          }}
        >
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <button type="submit">Sort by year</button>
      </form>

      <ul>
        {country.map((el, index) => {
          return (
            <ItemList key={index} description={el} yearChoice={choiceYear} />
          );
        })}
      </ul>
    </>
  );
}
