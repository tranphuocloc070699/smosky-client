<template>
    <div class="flex items-center gap-10">
        <div class="w-44 h-44 round shadow-lg flex flex-col gap-6 items-center justify-center relative">
            <p class="text-2xl text-[#173952] font-semibold">4.7</p>
            <div class="absolute left-[25%] top-[45%]"> 
                <NuxtRating
              :read-only="true"
              :ratingValue="5"
              :rating-size="'20px'"
              class="mx-auto"
            />
            </div>
            <p class="text-sm font-medium text-[#173952]">(50 Review)</p>
        </div>
        <div class="flex flex-col gap-2">
            <div v-for="item in 5" :key="item" class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                    5
                    <UIcon :name="`i-heroicons-star-solid`" class="w-4 h-4 text-amber-400"  />
                </div>
                <UProgress :value="70" color="yellow" class="w-96" />
                <p class="text-sm">50</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>