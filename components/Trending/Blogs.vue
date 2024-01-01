
<template>
    <div >
    
        <h2 class="text font-semibold text-lg py-4 flex items-center ">
            <UIcon name="i-heroicons-newspaper"  class="w-6 h-6 mr-2"/>
            Blog</h2>
        <div class="grid grid-cols-4 gap-4" >
        <CardBlogItem v-for="item in 10" :key="item" />
    </div>
    </div>
  
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>