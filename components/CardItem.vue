<template>
    <div class="w-full p-2">
        <div class="bg-white shadow-lg hover:shadow-xl rounded-lg ">
            <div class="h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover">
                <img :src="country.flags.svg" class="w-full h-[200px] border border-2 object-cover" />
                <div class="text-right ">
                    <button style="background: rgba(0,0,0,0.3)"
                        :class="['w-[40px] hover:text-pink-600 p-2 rounded-full my-1 mx-5', !!isSelected ? 'text-pink-500' : 'text-gray-500']"
                        @click="onCardClick">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- class="text-pink-500 hover:text-pink-600 p-2 rounded-full" -->
            <div class="flex justify-between items-start px-2 pt-2">
                <div class="p-2 flex-grow">
                    <h1 class="font-medium text-xl font-poppins">{{ country.name.common }} </h1>
                    <p class="text-gray-500 font-nunito">{{ country.cca3 }}</p>
                </div>

            </div>

        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    country: Object,
})
import { useCountiresStore } from '../stores/favCountries'
const { addToFav, isInFav, removeFromFav, fetchBorders } = useCountiresStore()
const isSelected = computed(() => {
    return isInFav(props.country)
})

const onCardClick = () => {
    if (isSelected.value) {
        removeFromFav(props.country)
    } else {
        addToFav(props.country)
        fetchBorders(props.country)
    }
}
</script>