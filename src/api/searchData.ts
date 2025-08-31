import type { FormEvent } from "react";
import type { ICountry } from "../types/tcard";
export function searchData(evt: FormEvent, arrForSearch: ICountry[]) {
    const target = evt.target;
    if (target instanceof HTMLFormElement) {
        const data = new FormData(target);
        const result = arrForSearch.filter((obj) => data.get('search') === obj.country);
        console.log(data.get('search'), [...result], arrForSearch);
        return [...result];
    }
}