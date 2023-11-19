<template>
    <div class="mt-[50px] w-full m-auto  pt-5 bg-gray-100">
        <h1
            class="font-serif w-full mb-4 flex text-center justify-items-center justify-center font-bold text-3xl text-purple-900">
            FLAG COUNTRIES LIST
        </h1>

        <div class="container m-auto  pt-5">
            <div class="w-full flex flex-wrap">
                <FlagCard :countries="countries" />
            </div>
        </div>
    </div>
</template>

<script setup>

const countries = ref([]);

const getApicountries = async (query) => {
    const url = query ? `https://restcountries.com/v3.1/name/${query}` : `https://restcountries.com/v3.1/all`
    const response = await fetch(url);
    countries.value = await response.json();
}
getApicountries()


// import { useCountiresStore } from '../stores/favCountries'
// const store = useCountiresStore()
</script>

