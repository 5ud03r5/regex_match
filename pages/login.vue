<template>
    <div
        class="shadow-xl rounded-lg bg-gray-800 w-[400px] pt-0 p-6 pl-0 pr-0 flex flex-col justify-center mx-auto items-center space-y-10">
        <h2
            class="text-[30px] font-sans font-black text-gray-900 bg-cyan-500 w-full flex justify-center pt-4 pb-4 rounded-t-lg shadow-xl">
            Sign in</h2>

        <div @click="auth.signInWithOAuth({ provider: 'github' })"
            class="hover:shadow-xl hover:cursor-pointer rounded-md bg-gray-900 flex space-x-3 w-max mx-auto shadow-xl items-center p-4 text-gray-200 hover:bg-gray-800 hover:text-cyan-200 item">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github "
                    viewBox="0 0 16 16">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </div>

            <div>Login with GitHub</div>
        </div>


    </div>
</template>

<script setup>
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()
watchEffect(() => {
    if (user.value) {
        navigateTo('/')
    }
})





</script>

<style scoped>
.item:hover {
    animation: shadow 2s infinite alternate
}

@keyframes shadow {
    from {
        box-shadow: 1px 0px 4px 0 cyan, 1px 0px 15px 1px cyan;
    }

    to {
        box-shadow: -1px 0px 10px 1px cyan, 3px 0px 20px 4px cyan;
    }
}
</style>