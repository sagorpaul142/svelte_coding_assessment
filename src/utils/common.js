export function formattedCounties(countriesData) {
    let filterData = countriesData.slice(0, 10);
    filterData.map(country => {
        return {
            name: country.name.common,
            flag: country.flag,
            flags: country.flags,
            cioc: country.cioc,
            unMember: country.unMember,
            status: country.status,
            currencies: country.currencies,
            population: country.population,
            languages: country.languages
        }
    })

    return filterData
}

export function filterCountriesName(countries) {
    return countries.map(country => country.name)
}
export function filterCountriesPopulation(countries) {
    return countries.map(country => country.population)
}