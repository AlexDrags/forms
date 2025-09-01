import type { FormEvent } from 'react';
import type { ICountry } from '../types/tcard';
export function searchData(evt: FormEvent, arrForSearch: ICountry[]) {
  const target = evt.currentTarget;

  if (target instanceof HTMLFormElement) {
    const data = new FormData(target);

    if (data.get('search') !== null) {
      const result = arrForSearch.filter(
        (obj) =>
          `${data.get('search')}`.toLocaleLowerCase() ===
          obj.country.trim().toLocaleLowerCase().split(' ')[0]
      );
      return result;
    }

    return [];
  }
}

export function sortByYear(
  choiceYear: number | null,
  arrForSearch: ICountry[]
) {
  console.log(arrForSearch);
  arrForSearch.forEach((el, index) => {
    el.info[0].data.find((obj) => {
      if (choiceYear === obj.year) {
        arrForSearch[index].info[0].data = [obj];
      }
    });
  });
  console.log(arrForSearch);
  return arrForSearch;
}
