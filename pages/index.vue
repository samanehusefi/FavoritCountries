<template>

    <div class="bg-black h-[30px] w-full mb-4">
        <NuxtLink to="/favorite" class="text-white">
            favorite
        </NuxtLink>
    </div>
    <div class="container m-auto">
        <div class="w-full flex flex-wrap">
            <FlagCard :countries="countries" />
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
</script>

