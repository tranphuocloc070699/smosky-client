<template>
    <ClientOnly>
        <div class="border-b border-gray-100 p-4 fixed top-0 left-0 right-0 bg-white z-10">
        <div class="max-w-7xl w-full mx-auto grid grid-cols-6">
            <div class="flex items-end col-span-2 h-8">
                <img src="/assets/images/logo.jpg" width="auto" heigth="32" class="w-10 h-10"/>
                <h1 class="font-medium text-xl">
                    Smosky
                </h1>
            </div>
            <AppSearch class="col-span-2 h-8"/>
            <AppUserControls class="col-span-2"/>
        </div>
    </div>
    </ClientOnly>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>