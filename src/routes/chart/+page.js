import {countryDataStore} from "../../store.js";

export const load = async () => {
    countryDataStore.update((store) => {
        store.isLoading = true;
        store.error = null
    })
    try {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json()
        countryDataStore.set({
            data,
            isLoading: false,
            error: null
        })
    } catch (error) {
        countryDataStore.update((store) => {
            store.isLoading = false
            store.error = error.message
        })
    }
}