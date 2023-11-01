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
    <h1 class="w-full mb-4 flex text-center justify-items-center justify-center font-bold text-3xl text-red-500">
        My Favorite Countries
    </h1>
    <div class="container m-auto">
        <div class="w-full flex flex-wrap">
            <div v-for="(country, index) in store.selectedCountries" :key="index"
                class="basis-1/4 flex justify-center items-center bg-gray-100">
                <div class="w-full p-2">
                    <div class="bg-white shadow-lg hover:shadow-xl rounded-lg ">
                        <div class="h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover">
                            <img :src="country.flags.svg" class="w-full h-[200px]" />

                        </div>
                        <div class="flex justify-between items-start px-2 pt-2">
                            <div class="p-2 flex-grow">
                                {{ countryInfo }}
                                <h1 class="font-medium text-xl font-poppins">{{ country.name.common }}</h1>
                                <p class="text-gray-500 font-nunito">{{ country.cca2 }}</p>
                            </div>

                        </div>

                    </div>
                </div>
                <!-- {{ store.selectedCountries }} -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { usefavFlag } from '../stores/useFavCountries'
const store = usefavFlag()

</script>

