<template>
    <div class=" flex space-x-10 container items-center pr-[20%]">
        <div class=" flex flex-wrap flex-col space-y-5 justify-center items-center mx-auto w-full">

            <div class="flex">
                <input
                    class="w-full bg-gray-900 rounded-bl-lg text-gray-100 rounded-tl-lg focus:bg-gray-700 focus:outline-none shadow-xl  p-2"
                    placeholder="Search in repository..." />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                    class="bi bi-search bg-gray-900 text-gray-100 rounded-br-lg rounded-tr-lg hover:cursor-pointer hover:bg-cyan-400 p-2"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </div>


            <div class="bg-gray-900 text-gray-200 ml-4 mr-4 mb-4 p-2 w-full shrink shadow rounded-lg shadow-2xl overflow-hidden flex flex-col space-y-2 h-max"
                v-for="regex in repository">
                <h1 class="">{{ regex.title }}</h1>
                <div class="bg-gray-700 p-2 rounded-md text-white">{{ regex.regex }}</div>
                <div @click="tryItOut(regex.regex, regex.text)"
                    class="flex justify-end hover:cursor-pointer hover:text-cyan-300 font-sans">Try it
                    out</div>

            </div>
        </div>


    </div>
</template>
<script setup>
const displaySearch = useState('displaySearch', () => true)
const text = useText()
const input = useInput()
const result = useResult()
const { repository } = await $fetch('/api/getrepository')

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