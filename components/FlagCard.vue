<template>
    <div v-for="(country, index) in countries" :key="index"
        class="basis-full h md:basis-1/4 flex justify-center items-center">
        <CardItem :country="country" />
    </div>

    <div v-for="i in 16" v-show="!countries.length" class="basis-full md:basis-1/4 flex justify-center items-center">
        <SkeletonItem />
    </div>
</template>

<script setup>
const props = defineProps({
    countries: Array
})
</script>