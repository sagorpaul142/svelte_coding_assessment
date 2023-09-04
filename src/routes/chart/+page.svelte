<script>
    import {countryDataStore} from "../../store.js";
    import {load} from "./+page.js";
    import {onMount} from "svelte";
    import {filterCountriesName, filterCountriesPopulation, formattedCounties} from "../../utils/common.js";
    import Table from "../../components/Table.svelte";
    import PolarChart from "../../components/PolarChart.svelte";

    const {data, error, isLoading} = $countryDataStore;

    const countries = formattedCounties(data)
    const countriesName = filterCountriesName(countries)
    const countriesPopulation = filterCountriesPopulation(countries)

    onMount(() => {
        load()
    })
</script>

<div class="bg-[#f4f7ff] h-screen">
    <div class="md:container md:mx-auto bg-[#f4f7ff] pt-8">
        <div class="flex flex-wrap flex-row justify-between w-full">
            <div class="overflow-hidden md:w-8/12 w-full">
                {#if isLoading}
                    <p>Loading...</p>
                {:else if error}
                    <p>Error :{error}</p>
                {:else }
                    <Table {countries}/>
                {/if}
            </div>
            <div class="md:w-4/12 w-full mx-auto mt-12 md:mt-0">
                <PolarChart {countriesName} {countriesPopulation} />
            </div>
        </div>
    </div>
</div>