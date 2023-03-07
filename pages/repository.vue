<template>
    <div class=" flex flex-wrap">

        <div class="bg-gray-900 text-gray-200 ml-4 mr-4 mb-4 p-2 shadow rounded-lg shadow-2xl overflow-hidden flex flex-col space-y-2 w-[200px] h-max"
            v-for="regex in repository">
            <h2>{{ regex.title }}</h2>
            <div>{{ regex.regex }}</div>
            <div>{{ regex.text }}</div>
        </div>
    </div>
</template>
<script setup>
const user = useSupabaseUser()
const { repository } = await $fetch('/api/getrepository')

definePageMeta({
    middleware: 'auth'
})
</script>