<template>
    <div v-for="(country,index) in countries" :key="index" class="basis-1/4 flex justify-center items-center bg-gray-100">
        <CardItem :country="country"/>
</div>
</template>

<script setup>
const props = defineProps({
    countries: Array
})
</script>