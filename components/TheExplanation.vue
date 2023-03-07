<template>
    <div class="grow p-2 bg-white w-[400px] h-[460px] overflow-auto">


        <h2 class="text-gray-800 font-mono">Regex match</h2>
        <hr>
        <div class="mb-10">{{ result !== null && result[0] }}</div>

        <div v-if="result.groups">
            <h2 class="text-gray-800 font-mono">Regex groups</h2>
            <hr>
            <div class="flex flex-wrap">
                <div class="p-2 bg-green-200 m-1 max-w-max rounded-xl " :key="key" v-for="value, key in result.groups">
                    <span class="bg-purple-200 p-1 rounded-md font-mono ">{{ key }}</span> {{
                        value
                    }}
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>
const { result } = defineProps(['result'])

</script>