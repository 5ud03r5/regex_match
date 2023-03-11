<template>
    <div class="container items-center ">
        <div class=" flex flex-col space-y-5 justify-center items-center mx-auto w-full">
            <SearchBar @search="searchRepository" :placeholder="'Search in repository...'"
                :class="scrollPosition === 0 ? 'itemSearchBot' : 'itemSearch'">
            </SearchBar>


            <div v-if="pending">
                <LoadingSpinner></LoadingSpinner>
            </div>
            <div v-else
                class="itemRepo bg-gray-800 text-gray-200 ml-4 mr-4 mb-4 p-5 w-full shadow rounded-lg shadow-2xl overflow-hidden flex flex-col space-y-4 h-max"
                :style="{ animationDuration: index + '000ms' }" v-for="regex, index in repository">
                <h1 class="font-black text-[22px] font-mono">{{ regex.title }}</h1>
                <div><a target="_blank" :href="`https://github.com/${regex.owner}`" class="">created
                        by {{
                            regex.owner
                        }}</a></div>

                <div class="bg-gray-700 p-2 rounded-md text-white shadow">{{ regex.regex }}</div>

                <div @click="tryItOut(regex.regex, regex.text)"
                    class="flex justify-end ml-auto shadow item  hover:cursor-pointer hover:text-cyan-300 font-sans bg-gray-600 hover:bg-gray-900 p-2 rounded-md">
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
const highlightedText = useHighlightedText()
const uri = useState('uri', () => '/api/getrepository')
const scrollPosition = useState('scrollPosition', () => 0)
const { data: repository, pending, refresh } = await useLazyAsyncData('repository', async () => await $fetch(uri.value))

const searchRepository = async (value) => {
    uri.value = `/api/getrepository?search=${value}`
    refresh('repository')
}

const handleScroll = () => {
    scrollPosition.value = window.scrollY
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

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
            highlightedText.value = text.value

        } else {

            highlightedText.value = text.value.replace(result.value[0], `<span class="bg-yellow-200">${result.value[0]}</span>`)

            if (result.value.groups !== undefined) {

                for (const key in result.value.groups) {
                    highlightedText.value = highlightedText.value.replace(result.value.groups[key], `<span class="bg-green-200">${result.value.groups[key]}</span>`)
                }

            }

        }
    } catch {
        result.value = ''
    }
    navigateTo('/')
}
definePageMeta({
    pageTransition: { name: 'repo', mode: "out-in" }

})
</script>

<style scoped>
.repo-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

.shadow {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 25px 0 rgba(0, 0, 0, 0.19);
}

.shadowcyan {
    box-shadow: 0 1px 5px 0 cyan, 0 1px 20px 0 cyan;
    animation: shadowcyan 1s infinite alternate forwards
}

.item:hover {
    animation: shadow 2s infinite alternate
}

@keyframes shadowcyan {
    from {
        box-shadow: 0 1px 5px 0 cyan, 0 1px 20px 0 cyan;
    }

    to {
        box-shadow: 1px 3px 5px 1px cyan, 1px 3px 20px 1px cyan;
    }
}

@keyframes shadow {
    from {
        box-shadow: 1px 0px 4px 0 cyan, 1px 0px 15px 1px cyan;
    }

    to {
        box-shadow: -1px 0px 10px 1px cyan, 3px 0px 20px 4px cyan;
    }
}

.itemSearch {

    position: fixed;
    top: 10px;
    z-index: 2600;

    animation: searchbar 300ms ease-in
}

.itemSearchBot {
    position: fixed;
    top: 90px;
    z-index: 2600;

    animation: searchBot 300ms ease-out
}

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

@keyframes searchbar {
    from {
        top: 90px
    }

    to {
        top: 10px
    }

}

@keyframes searchBot {
    from {
        top: 10px;
        box-shadow: none
    }

    to {

        top: 90px
    }

}
</style>