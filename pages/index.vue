<template>
    <div class="flex justify-center flex-col space-y-5 container enter">
        <div class="flex space-x-5">
            <div class="grow space-y-2">
                <div class="flex space-x-4 ">
                    <input spellcheck="false" v-model="input" placeholder="Enter regex..."
                        class="w-1/5 hover:bg-gray-600 rounded-xl bg-gray-800 text-white focus:text-gray-800 focus:bg-gray-400 p-2 text-gray-900  focus:outline-none"
                        :style="input.length > 0 && { width: '40%' }" :class="input.length === 0 && 'input'" />

                    <ButtonSubmit v-if="input.length > 0" @click="modalOpened = true" class="shadow" />
                </div>
                <div class="bg-gray-800 p-1 shadow rounded-xl">
                    <div contenteditable="true" ref="editable" v-html="highlightedText" @input="setText($event)"
                        spellcheck="false"
                        class=" w-full hover:outline-none rounded-xl bg-gray-400 text-gray-900 focus:outline-none resize-none p-2 h-[400px]">
                    </div>
                </div>
            </div>

            <TheExplanation class="shadow " :result="result" />
        </div>

        <teleport to="body">

            <TitleModal :modalOpened="modalOpened" @saveAndClose="postNewRegex" @close="modalOpened = false">
            </TitleModal>

        </teleport>
    </div>
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

    if (childElement.value.length <= 1 || childElement.value === undefined) {
        selection.value = 1
    } else if (childElement.value.length === undefined) {
        childElement.value = childElement.value.lastChild
        if (childElement.value.length === undefined) {
            selection.value = 1
        } else if (selection.value > childElement.value.length) {
            selection.value = 1
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
.input:focus {
    animation-name: inputExtend;
    animation-fill-mode: forwards;
    animation-duration: 300ms;


}

.enter {
    animation: enter 500ms forwards
}

@keyframes enter {
    from {
        filter: blur(0.5rem);
        opacity: 0
    }

    to {
        opacity: 1;
        filter: blur(0)
    }
}

.input:hover {
    box-shadow: 0 2px 10px 0 rgb(0, 0, 0), 0 5px 25px 0 rgb(0, 0, 0);
}

.shadow {
    box-shadow: 0 6px 10px 0 rgb(0, 0, 0), 0 10px 25px 0 rgb(0, 0, 0);
}

@keyframes inputExtend {
    from {

        width: 20%
    }

    to {
        width: 40%;

    }
}
</style>