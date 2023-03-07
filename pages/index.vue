<template>
    <div class="flex justify-center flex-col space-y-5">
        <div class="flex space-x-4"><input spellcheck='false' v-model="input" placeholder="Enter regex..."
                class="shadow-xl hover:outline-none rounded-xl p-2 focus:outline-none w-[700px]"
                :style="{ width: input.length > 0 ? 645 + 'px' : 700 + 'px' }" />
            <ButtonSubmit v-if="input.length > 0" />

        </div>

        <div>
            <textarea v-model="text" spellcheck="false" placeholder="Enter text to parse..."
                class=" shadow-xl hover:outline-none rounded-xl focus:outline-none w-[700px] resize-none p-2 h-[400px]"></textarea>
        </div>

    </div>
    <TheExplanation class="shadow-xl grow" :result="result" />
</template>

<script setup>
const user = useSupabaseUser()
const input = useState('input', () => '')
const text = useState('text', () => '')
const result = useState('result', () => '')
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
</script>