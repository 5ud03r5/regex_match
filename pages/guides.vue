<template>
    <div class="flex flex-col space-y-5 justify-center items-center mx-auto w-full">

        <SearchBar :placeholder="'Search in guides...'"></SearchBar>



        <div class="bg-gray-900 text-gray-200 p-2 rounded-lg shadow-xl overflow-hidden w-full" v-for="guide in guides">
            <h1 class=" font-black text-[22px] font-mono">{{ guide.title }}</h1>
            <a target="_blank" class="" :href="`https://github.com/${guide.owner}`">created
                by {{

                }}</a>
            <div class="p-2 bg-gray-700 rounded-lg">{{ guide.body }}</div>
        </div>
    </div>
</template>
<script setup>
const user = useSupabaseUser()
const { guides } = await $fetch('/api/guides')

definePageMeta({
    middleware: 'auth'
})
</script>