<template>
    <div>
        <AppHeader/>
        <div class="mt-[65px]">
            <AppSidebar/>
            <div class="md:ml-60">
                <slot />
            </div>
        </div>
        <AppFooter/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>