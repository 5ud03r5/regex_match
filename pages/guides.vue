<template>
    <div class=" flex space-x-10 ">

        <div class="bg-gray-900 text-gray-200 p-2 rounded-lg shadow-xl overflow-hidden w-[200px] h-[200px]"
            v-for="guide in guides">
            <h2>{{ guide.title }}</h2>
            <div>{{ guide.body }}</div>
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