<template>
    <div class="max-w-60 w-full top-[65px] border border-gray-100 h-screen fixed">
        <NuxtLink to="/" class="flex items-center p-2 mx-2 mt-2 rounded-md hover:bg-gray-100 font-light">
            <img src="@/assets/images/home.svg" alt="Home" width="20" height="20" class="w-5 h-5"/>
            <p class="text-base px-4">Home</p>
        </NuxtLink>
        <NuxtLink to="/blog" class="flex items-center p-2 mx-2 mt-2  rounded-md hover:bg-gray-100 font-light">
            <img src="@/assets/images/blog.svg" alt="Home" width="20" height="20" class="w-5 h-5"/>
            <p class="text-base px-4">Blog</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>