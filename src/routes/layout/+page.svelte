<div class="container mx-auto ">
    <div class="grid md:grid-rows-6 md:grid-cols-12 grid-rows-6 grid-cols-4">
        <div class="bg-blue-400 py-5 md:col-span-2 md:row-span-3 hidden md:block ">
        </div>
        <div class="bg-rose-100 py-5 md:col-span-4 md:row-span-5  row-span-3 col-span-4">
        </div>
        <div class="bg-blue-400 py-5 md:col-span-6 row-span-2 hidden md:block">
        </div>
        <div class="bg-teal-100 py-5 md:col-start-1 md:col-span-2 md:row-span-2 hidden md:block ">
        </div>
        <div class="flex justify-center items-center bg-yellow-100 py-5 md:col-start-7 md:col-end-11 md:row-start-3 md:row-end-7 row-span-3 col-span-4">
            <div class="w-[300px] h-[300px] flex justify-center items-center outer_div">
                <div class="circle w-[200px] h-[200px] relative overflow-hidden rounded-full bg-yellow-100">
                    <div class="left_mountain absolute w-0 h-0"></div>
                    <div class="right_mountain absolute w-0 h-0"></div>
                </div>
            </div>
        </div>
        <div class="bg-emerald-400 py-5 md:col-start-11 md:col-end-13 md:row-start-3 md:row-end-7 md:col-span-2 hidden md:block ">
        </div>

        <div class="bg-fuchsia-500 py-5 md:col-span-6 hidden md:block">
        </div>
    </div>
</div>

<style>
    .outer_div {
        background: #293462;
    }

    .left_mountain {
        border-bottom: 100px solid #fe5f55;
        border-right: 100px solid transparent;
        border-left: 100px solid transparent;
        top: 129px;
        left: -71px;
    }

    .right_mountain {
        border-bottom: 200px solid #fe5f55;
        border-right: 200px solid transparent;
        border-left: 200px solid transparent;
        top: 59px;
        left: -59px;
    }
</style>