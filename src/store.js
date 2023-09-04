import {writable} from "svelte/store";

export const countryDataStore = writable({
    data: [],
    isLoading: false,
    error: null
})