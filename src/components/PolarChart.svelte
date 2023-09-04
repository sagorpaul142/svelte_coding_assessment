<script>
    import {afterUpdate, onMount} from "svelte";
    import {Chart} from "chart.js/auto";
    export let countriesName;
    export let countriesPopulation;

    let chart;

    onMount(() => {
        const ctx = document.getElementById('polar_chart');
        chart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: countriesName,
                datasets: [{
                    data: countriesPopulation,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                legend: {
                    display: false,
                },
            }
        });
    });

    afterUpdate(() => {
        if (chart) {
            chart.update();
        }
    });
</script>


<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <div class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50">
        <div class="inline-block p-4 text-black text-xl rounded-tl-lg  border-blue-600">
            Countries
        </div>
    </div>
    <canvas id="polar_chart" width="400" height="400"></canvas>
</div>