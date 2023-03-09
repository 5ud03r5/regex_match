<template>
    <div class="flex justify-center flex-col space-y-5 container">
        <div class="flex space-x-4 ">
            <div class="bg-gray-800 p-1 shadow rounded-xl w-full">
                <input spellcheck="false" v-model="input" placeholder="Enter regex..."
                    class="w-full hover:outline-none rounded-xl bg-gray-800 text-white focus:text-gray-800 focus:bg-gray-400 p-2 text-gray-900  focus:outline-none" />
            </div>
            <ButtonSubmit v-if="input.length > 0" @click="modalOpened = true" class="shadow" />
        </div>


        <div class="bg-gray-800 p-1 shadow rounded-xl">
            <div contenteditable="true" ref="editable" v-html="highlightedText" @input="setText($event)" spellcheck="false"
                class=" w-full hover:outline-none rounded-xl bg-gray-400 text-gray-900 focus:outline-none resize-none p-2 h-[400px]">
            </div>



        </div>


    </div>
    <TheExplanation class="shadow " :result="result" />
    <teleport to="body">
        <TitleModal v-if="modalOpened" @saveAndClose="postNewRegex" @close="modalOpened = false"></TitleModal>
    </teleport>
</template>

<script setup>

const user = useSupabaseUser()
const modalOpened = useState('modalOpened', () => false)
const input = useInput()
const text = useText()
const result = useResult()
const highlightedText = useHighlightedText()
const selection = useState('selection', () => null)
const editable = useState('editable', () => null)
const childElement = useState('childElement', () => null)
definePageMeta({
    middleware: 'auth'
})




const setText = (event) => {

    text.value = event.target.innerText
    selection.value = document.getSelection().focusOffset
    console.log(document.getSelection())
    nextTick(() => {
        if (selection.value !== null) {
            setCaretPosition()
            selection.value = null
        }
    })

}

const setCaretPosition = () => {
    const range = document.createRange();
    const sel = window.getSelection();

    childElement.value = editable.value.lastChild;
    console.log('selection beginning', selection.value)
    console.log('leng', childElement.value.length)
    if (childElement.value.length <= 1 || childElement.value === undefined) {
        console.log('second if', selection.value)
        selection.value = 1
    } else if (childElement.value.length === undefined) {
        childElement.value = childElement.value.lastChild
        console.log('third if', childElement.value.length)
        if (childElement.value.length === undefined) {
            console.log(editable.value.lastChild)
            selection.value = 1
        } else if (selection.value > childElement.value.length) {
            selection.value = 1
            console.log('last', childElement.value)
        }
    }
    if (selection.value < childElement.value.length) {
        selection.value = childElement.value.length
    }

    range.setStart(childElement.value, selection.value)
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    editable.value.focus();

};



watch([text, input], () => {
    try {
        result.value = text.value.match(input.value);

        if (result.value === null || result.value[0] === '') {
            result.value = ''
            highlightedText.value = text.value

        } else {
            console.log(result.value)
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
})

const postNewRegex = async (value) => {
    await $fetch('/api/repository', {
        method: 'POST',
        body: { input: input.value, text: text.value, title: value, owner: user.value.user_metadata.user_name }
    })
    modalOpened.value = false


}


</script>

<style scoped>
input:focus {
    box-shadow: 0 10px 10px 0 cyan 0 10px 10px 0 cyan;
}

.shadow {
    box-shadow: 0 6px 10px 0 rgb(0, 0, 0), 0 10px 25px 0 rgb(0, 0, 0);
}
</style>