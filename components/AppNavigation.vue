<template>
  <div class="bg-slate-100">
    <div
      class="max-w-7xl w-full mx-auto flex items-center px-4 md:px-0"
    >
        <div v-for="(item,index) in data" :key="item.title" class="flex items-center py-2 text-sm font-normal">
            <NuxtLink  v-if="item.isActive" :to="item.link">
                <strong class="cursor-pointer hover:underline">{{ item.title }}</strong>
            </NuxtLink>
            <NuxtLink v-else :to="item.link">
                <span class="cursor-pointer hover:underline">{{ item.title }}</span>    
            </NuxtLink>
            <UIcon name="i-heroicons-chevron-right px-4" v-if="data && index<data?.length-1" />
      
        </div>
 
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavigation } from '~/types/components';


 defineProps({
 
  data: Array as () => INavigation[],
});

</script>

<style scoped></style>
~/types/components