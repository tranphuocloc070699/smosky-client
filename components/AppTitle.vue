<template>
  <div>
 
  <div class="max-w-7xl w-full mx-auto py-4 px-4 md:px-0">
    <h3 class="text font-medium text-lg flex items-center pb-2">
      <UIcon   :name="`i-${data.iconName}`" class="w-6 h-6 mr-2" />
      {{ data.title }}
    </h3>
    <slot/>
  </div>
     
</div>
</template>

<script setup lang="ts">
import type { IAppTitle } from '~/types/components';


defineProps<{
    data:IAppTitle;

}>()

</script>

<style scoped></style>
