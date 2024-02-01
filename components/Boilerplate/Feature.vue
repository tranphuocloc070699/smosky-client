<template>
    <div>
        <div v-for="item in 4" :key="item" class="flex items-center gap-4">
                <img src="@/assets/images/Star.svg" />
                <p class="font-medium">Feature {{ item }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>