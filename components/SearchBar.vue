<template>
    <div>
        <form class="flex" @submit.prevent="emitSearch">
            <input v-model="search"
                class="w-full bg-gray-800 rounded-bl-lg text-gray-100 rounded-tl-lg focus:bg-gray-700 focus:outline-none shadow-xl  p-2"
                :placeholder="placeholder" />
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                    class="bi bi-search bg-gray-900 text-gray-100 rounded-br-lg rounded-tr-lg hover:cursor-pointer hover:bg-gray-200 hover:text-gray-800 p-2"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>
        </form>


    </div>
</template>

<script setup>
const search = useState('search', () => '')
const emit = defineEmits(['search'])
const { placeholder } = defineProps(['placeholder'])

const emitSearch = () => {
    emit('search', search.value)
}



</script>

<style scoped></style>