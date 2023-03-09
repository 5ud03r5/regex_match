<template>
    <div class="h-max p-2 rounded-lg z-[1] fixed bg-gay-800 w-[62px] flex flex-col shadow space-y-2 bg-gray-700 ">


        <NuxtLink to='/' title="regex"
            class="bg-gray-100 p-2 rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-regex"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 1 1 .707.707Zm9.9-.707a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707ZM6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-6.5a.5.5 0 0 0-1 0v2.117L8.257 5.57a.5.5 0 0 0-.514.858L9.528 7.5 7.743 8.571a.5.5 0 1 0 .514.858L10 8.383V10.5a.5.5 0 1 0 1 0V8.383l1.743 1.046a.5.5 0 0 0 .514-.858L11.472 7.5l1.785-1.071a.5.5 0 1 0-.514-.858L11 6.617V4.5Z" />
            </svg>
        </NuxtLink>
        <NuxtLink to='/tools' title="tools"
            class="bg-gray-100 p-2 rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-400"><svg
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-tools"
                viewBox="0 0 16 16">
                <path
                    d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
            </svg></NuxtLink>
        <NuxtLink to='/repository' title="repository"
            class="bg-gray-100 p-2 rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-400"><svg
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-fill"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
            </svg></NuxtLink>



    </div>
</template>

<script setup>


definePageMeta({
    middleware: 'auth'
})
</script>
<style scoped>
.router-link-active {
    color: cyan;
    background-color: rgb(6, 0, 29);
}

.shadow {
    box-shadow: 0 6px 10px 0 rgb(0, 0, 0), 0 10px 25px 0 rgb(0, 0, 0);
}
</style>