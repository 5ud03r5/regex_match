<template>
    <div class="min-w-min rounded-xl bg-gray-800  shrink p-1 overflow-auto">
        <div class="p-2 bg-gray-400 h-full rounded-xl">
            <h2 class="text-gray-200 mb-2 bg-gray-800 w-max p-1 rounded-lg font-mono">Regex match</h2>

            <div class="bg-gray-300 rounded-lg mb-10 p-2">{{ result !== null && result[0] }}</div>

            <div v-if="result.groups">
                <h2 class="text-gray-200 mb-2 bg-gray-800 w-max p-1 rounded-lg font-mono">Regex groups</h2>

                <div class="flex flex-wrap bg-gray-300 p-1 rounded-lg">
                    <div class="p-2 bg-gray-900 text-white 200 mr-1 mt-1 max-w-max rounded-xl " :key="key"
                        v-for="value, key in result.groups">
                        <span class="bg-gray-700 text-cyan-300 p-1 rounded-md font-mono ">{{ key }}</span> {{
                            value
                        }}
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script setup>
const { result } = defineProps(['result'])

</script>