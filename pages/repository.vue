<template>
    <div class="container items-center ">
        <div class=" flex flex-col space-y-5 justify-center items-center mx-auto w-full">
            <SearchBar @search="searchRepository" :placeholder="'Search in repository...'"></SearchBar>

            <div v-if="pending">
                Loading repository...
            </div>
            <div v-else
                class="bg-gray-900 text-gray-200 ml-4 mr-4 mb-4 p-2 w-full shadow rounded-lg shadow-2xl overflow-hidden flex flex-col space-y-2 h-max"
                v-for="regex in repository">
                <h1 class="font-black text-[22px] font-mono">{{ regex.title }}</h1>
                <div><a target="_blank" :href="`https://github.com/${regex.owner}`" class="">created
                        by {{
                            regex.owner
                        }}</a></div>

                <div class="bg-gray-700 p-2 rounded-md text-white">{{ regex.regex }}</div>

                <div @click="tryItOut(regex.regex, regex.text)"
                    class="flex justify-end ml-auto hover:cursor-pointer hover:text-cyan-300 font-sans bg-gray-500 p-1 rounded-md">
                    Try it
                    out</div>

            </div>

        </div>


    </div>
</template>
<script setup>
const text = useText()
const input = useInput()
const result = useResult()
const uri = useState('uri', () => '/api/getrepository')
const { data: repository, pending, refresh } = await useLazyAsyncData('repository', async () => await $fetch(uri.value))

const searchRepository = async (value) => {
    uri.value = `/api/getrepository?search=${value}`
    refresh('repository')
}

definePageMeta({
    middleware: 'auth'
})

const tryItOut = (inputValue, textValue) => {
    text.value = textValue
    input.value = inputValue
    try {
        result.value = text.value.match(input.value);
        if (result.value === null) {
            result.value = ''
        }
    } catch {
        result.value = ''
    }
    navigateTo('/')
}
</script>