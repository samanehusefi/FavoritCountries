<template>
    <div class="bg-black h-[50px] w-full mb-4">
        <NuxtLink to="/favorite" class="text-white flex w-full">
            <div class=" w-[40px] text-pink-500 hover:text-pink-600 p-2 rounded-full my-1 mx-5"
                style="background: rgba(255,255,255,0.9)">
                <svg class="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
            </div>
            <p class="flex items-center">
                {{ store.selectedCountries.length }}
            </p>
        </NuxtLink>

    </div>
    <div class="border-b-4 border-indigo-500">
        <h1 class="w-full mb-4 flex text-center justify-items-center justify-center font-bold text-3xl text-red-500">
            My Favorite Countries
        </h1>
    </div>
    <div class="container m-auto">
        <div class="w-full flex flex-wrap">
            <div v-for="(country, index) in store.selectedCountries" :key="index"
                class="basis-1/4 flex justify-center items-center bg-gray-100">
                <CardItem :country="country" />
            </div>
        </div>
    </div>
    <div class="border-t-4 border-indigo-500">
        <h2 class="w-full mb-4 flex text-center justify-items-center justify-center font-bold text-3xl text-red-500">
            borders
        </h2>
        <div class="container m-auto">
            <div class="w-full flex flex-wrap">
                <div v-for="(border, index) in borders" :key="index"
                    class="basis-1/4 flex justify-center items-center bg-gray-100">
                    <CardItem :country="border" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usefavFlag } from '../stores/useFavCountries'
const store = usefavFlag()

</script>

