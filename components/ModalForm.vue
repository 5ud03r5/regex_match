<template>
    <div class="fixed top-0 left-0 z-[1900] h-full w-full bg-gray-800 bg-opacity-60">

        <dialog class=" bg-gray-900 text-gray-100 absolute top-48 z-[2000] rounded-md flex flex-col space-y-3" open>
            <div @click="closeModal" title="close"
                class="hover:cursor-pointer hover:text-gray-900 absolute left-[210px] rounded-full bg-gray-100 text-gray-400 top-[-10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </div>


        </dialog>
    </div>
</template>

<script setup>
const emit = defineEmits(['saveAndClose', 'close'])
const closeModal = () => {
    emit('close', true)
}
</script>