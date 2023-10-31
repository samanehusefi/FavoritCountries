<template>
    <div>
        {{ store.selectedCountries }}
    </div>
</template>

<script setup>
import { usefavFlag } from '../stores/useFavCountries'
const store = usefavFlag()
const countries = ref([]);
const getApicountries = async (query) => {
    const url = query ? `https://restcountries.com/v3.1/alpha?codes=${query}` : `https://restcountries.com/v3.1/all`
    const response = await fetch(url);
    countries.value = await response.json();
}
getApicountries(store.selectedCountries)
</script>

