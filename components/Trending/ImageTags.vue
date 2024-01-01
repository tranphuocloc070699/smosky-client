<template>
    <div>

        <h2 class="text font-semibold text-lg py-4 flex items-center text-tear-700">
            <img src="@/assets/images/tag.svg" alt="Home" width="24" height="24" class="w-6 h-6 pr-2"/>
            Tags</h2>
        <div class="flex items-center flex-wrap gap-4">
        <CardTagItem  v-for="item in 10" :key="item" />
    </div>
    </div>
   
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>