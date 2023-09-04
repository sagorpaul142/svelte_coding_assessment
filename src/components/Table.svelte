<script>
    export let countries
</script>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Flag
            </th>
            <th scope="col" class="px-6 py-3">
                Name
            </th>
            <th scope="col" class="px-6 py-3">
                Population
            </th>
            <th scope="col" class="px-6 py-3">
                CIOC
            </th>
            <th scope="col" class="px-6 py-3">
                UN Member Status
            </th>
            <th scope="col" class="px-6 py-3">
                Currencies
            </th>
            <th scope="col" class="px-6 py-3">
                Languages
            </th>
        </tr>
        </thead>
        <tbody>
        {#each countries as country}
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img width="30" height="30" src={country?.flags?.png}
                         alt={country?.flags?.alt}/>
                </th>
                <th scope="row">
                    {country.name}
                </th>
                <td class="px-6 py-4">
                    {country.population}
                </td>
                <td class="px-6 py-4">
                    {country?.cioc ? country?.cioc : 'NULL'}
                </td>
                <td class="px-6 py-4 uppercase">
                    <span class={country?.unMember ?`p-2 bg-gray-400 text-white rounded`:`p-2 bg-black text-white rounded`}>{country?.unMember === true ? 'Yes' : 'No'}</span>
                </td>
                <td class="px-6 py-4 uppercase ">
                    {#each Object.entries(country.languages) as [languageCode, languageName]}
                        {languageCode}
                    {/each}
                </td>
                <td class="px-6 py-4">
                    {#each Object.entries(country.currencies) as [currencyCode, currencyInfo]}
                        {currencyCode}
                    {/each}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>