<template>
    <div>
        <div class="bg-black font-sans  w-full  flex justify-start fixed top-0 ">
            <NuxtLink to="/favorite" class="text-white flex w-[50]">
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
            <NuxtLink to="/" class="text-white font-serif flex w-[50] p-3 mx-5 font-bold">
                Home
            </NuxtLink>
        </div>
        <slot />
    </div>
</template>
<script setup>
import { useCountiresStore } from '@/stores/favCountries'
const store = useCountiresStore()
</script>