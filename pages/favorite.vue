<template>
    <div class="border-b-4 border-indigo-500 mt-[50px]">
        <h1 class="w-full mb-4 flex text-center justify-items-center justify-center font-bold text-3xl text-red-500">
            My Favorite Countries
        </h1>
    </div>
    <div class="container m-auto">
        <div class="w-full flex flex-wrap">
            <div v-for="(country, index) in selectedCountries" :key="index"
                class="basis-full md:basis-1/4 flex justify-center items-center">
                <CardItem :country="country" />
            </div>
            <div v-for="i in 4" v-show="loading" class="basis-full md:basis-1/4 flex justify-center items-center">
                <SkeletonItem />
            </div>
        </div>
    </div>
    <div class="border-t-4 border-indigo-500">
        <h2 class="w-full mb-4 flex text-center justify-items-center justify-center font-bold text-3xl text-red-500">
            Borders
        </h2>
        <div class="container m-auto">
            <div class="w-full flex flex-wrap">
                <div v-for="(border, index) in borderCounries" :key="index"
                    class="basis-full md:basis-1/4 flex justify-center items-center">
                    <CardItem :country="border" />
                </div>
                <div v-for="i in 16" v-show="loading" class="basis-full md:basis-1/4 flex justify-center items-center">
                    <SkeletonItem />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCountiresStore } from '../stores/favCountries'
import { difference, remove } from "lodash";
console.log(useCountiresStore())
const store = useCountiresStore();
const selectedCountries = computed(() => {
    return store.selectedCountries
})

const borders = computed(() => {
    return store.borderCodes
})

let borderCounries = ref([])
const loading = ref(false)
const updateBorderCountries = async (newVal, oldVal) => {
    const old = oldVal || []
    if (old.length > newVal.length) {//Something Removed
        const diff = difference(old, newVal)
        remove(borderCounries, (borderCountry) => {
            debugger;
            return diff.some(caa3 => borderCountry.cca3 === caa3)
        })
    } else {
        const diff = difference(newVal, old)
        const oldState = [...borderCounries.value]
        borderCounries.value.push(...diff.map((caa3) => ({
            flags: {},
            name: {},
            caa3
        })));
        loading.value = true;
        const url = `https://restcountries.com/v3.1/alpha?codes=${diff.join(',')}`
        const response = await fetch(url);
        const result = await response.json()
        loading.value = false;
        borderCounries.value = [
            ...oldState,
            ...result

        ];
    }

}
watch(borders, updateBorderCountries, { immediate: true })
</script>
