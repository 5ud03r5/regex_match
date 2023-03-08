<template>
    <div class="flex justify-center flex-col space-y-5 container">
        <div class="flex space-x-4"><input spellcheck='false' v-model="input" placeholder="Enter regex..."
                class="shadow-xl  w-full hover:outline-none rounded-xl p-2 focus:outline-none " />
            <ButtonSubmit v-if="input.length > 0" @click="modalOpened = true" />

        </div>

        <div>
            <textarea v-model="text" spellcheck="false" placeholder="Enter text to parse..."
                class=" shadow-xl w-full hover:outline-none rounded-xl focus:outline-none  resize-none p-2 h-[400px]"></textarea>
        </div>

    </div>
    <TheExplanation class="shadow-xl" :result="result" />
    <teleport to="body">
        <TitleModal v-if="modalOpened" @saveAndClose="postNewRegex" @close="modalOpened = false"></TitleModal>
    </teleport>
</template>

<script setup>
const modalOpened = useState('modalOpened', () => false)
const input = useInput()
const text = useText()
const result = useResult()
definePageMeta({
    middleware: 'auth'
})
watch([input, text], () => {
    try {
        result.value = text.value.match(input.value);
        if (result.value === null) {
            result.value = ''
        }
    } catch {
        result.value = ''
    }

})

const postNewRegex = async (value) => {
    console.log(value)
    await $fetch('/api/repository', {
        method: 'POST',
        body: { input: input.value, text: text.value, title: value }
    })
    modalOpened.value = false


}
</script>

<style scoped>
input:focus {
    box-shadow: 0 10px 10px 0 cyan 0 10px 10px 0 cyan;
}
</style>