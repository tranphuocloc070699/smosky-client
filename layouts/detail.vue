<template>
    <div>
        <AppHeader :show-menu="true"/>
        <div class="mt-[65px]">
            <div>
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