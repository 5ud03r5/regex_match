<template >
    <div v-if="user">
    </div>
</template>
<script setup>
const user = useSupabaseUser()
definePageMeta({
    middleware: 'auth'
})
</script>