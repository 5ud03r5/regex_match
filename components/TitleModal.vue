<template>
    <div v-if="modalOpened" class="fixed top-0 left-0 z-[1900] h-full w-full bg-gray-800 bg-opacity-60"></div>
    <Transition name="modal" type="animation">
        <dialog class="bg-gray-900 text-gray-100 w-max h-max top-[200px] z-[2000] rounded-md shadow-xl p-0" open
            v-if="modalOpened">
            <div @click="closeModal" title="close"
                class="hover:cursor-pointer hover:text-gray-900 absolute right-[-10px] rounded-full bg-gray-100 text-gray-400 top-[-10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </div>
            <h1
                class="flex mb-4 p-2 justify-center text-[30px] p-0  bg-gradient-to-r rounded-t-md from-cyan-300 to-cyan-500 text-gray-800 font-sans  mx-auto">
                Rule
                title</h1>
            <div class="p-4"><input placeholder="Enter title..."
                    class="text-gray-900  p-2 w-[400px] focus:outline-none p-1 rounded-md focus:rounded-lg"
                    spellcheck="false" v-model="title" />
            </div>
            <div class="pr-4 pb-4">
                <button class="bg-gray-500 p-2 rounded-md ml-auto flex justify-end hover:bg-cyan-400 hover:text-gray-900"
                    @click="saveAndClose">Save</button>
            </div>

        </dialog>
    </Transition>
</template>

<script setup>
const { modalOpened } = defineProps(['modalOpened'])
const title = useState('title', () => '')
const emit = defineEmits(['saveAndClose', 'close'])
const saveAndClose = () => {
    emit('saveAndClose', title.value)
    title.value = ''
}
const closeModal = () => {
    emit('close', true)
}

</script>

<style scoped>
.modal-enter-active {
    animation: modal 700ms forwards
}

.modal-leave-active {
    animation: modalClose 700ms forwards
}

@keyframes modalClose {
    from {
        opacity: 1;
        top: 200px;
        transform: translateY(0) scale(1);
    }

    to {
        opacity: 0;
        top: 0px;
        transform: translateY(-50px) scale(0.2);
    }
}

@keyframes modal {
    from {
        opacity: 0;
        top: 300px;
        transform: translateY(-50px) scale(0.9);
    }

    to {
        opacity: 1;
        top: 200px;
        transform: translateY(0) scale(1);
    }
}
</style>