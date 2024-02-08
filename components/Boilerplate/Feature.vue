<template>
    <div >
        <div v-for="item in data" :key="item.toString()" class="flex items-center gap-4">
                <img src="@/assets/images/Star.svg" />
                <p class="font-medium">{{ item }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(
    {
        data: Array as () => String[],
    }
)
</script>

<style scoped>

</style>