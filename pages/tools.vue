<template>
    <div class=" flex flex-wrap container mx-auto items-center">
        <div v-if="pending" class="flex justify-center items-center mx-auto">
            <LoadingSpinner></LoadingSpinner>
        </div>
        <div v-else
            class="itemRepo bg-gray-800 text-gray-200 ml-4 mr-4 mb-4 p-5 shadow rounded-lg shadow-2xl overflow-hidden flex flex-col space-y-2 w-[200px] h-max"
            :style="{ animationDuration: index + '99ms' }" v-for=" tool, index in tools">
            <a :href="tool.url"
                class="bg-gray-200 text-gray-800 w-max p-2 shadowCyan rounded-md font-mono hover:bg-gray-900 hover:text-cyan-300"
                target="_blank">{{
                    tool.title }}</a>
            <div>{{ tool.short_description }}</div>


        </div>

    </div>
</template>
<script setup>
const { data: tools, pending } = await useLazyAsyncData('tools', async () => await $fetch('/api/tools'))

definePageMeta({
    middleware: 'auth',
    pageTransition: false
})
</script>
<style scoped>
.itemRepo {
    animation-name: repoItem;
}

@keyframes repoItem {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.shadow {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 25px 0 rgba(0, 0, 0, 0.19);
}

a:hover {
    animation: shadow 2s infinite alternate
}

@keyframes shadow {
    from {
        box-shadow: 1px 0px 4px 0 cyan, 1px 0px 15px 1px cyan;
    }

    to {
        box-shadow: -1px 0px 10px 1px cyan, 3px 0px 20px 4px cyan;
    }
}
</style>