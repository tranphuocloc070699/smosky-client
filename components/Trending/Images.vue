<template>
  <div>
  <!--   <h2 class="text font-semibold text-lg py-4 flex items-center">
      <img
        src="@/assets/images/ci-cd.svg"
        alt="Home"
        width="24"
        height="24"
        class="w-6 h-6 pr-2"
      />
      Boilerplate
    </h2> -->
    <AppTitle :data="{title:'Boilerplates',iconName:'clarity-block-line'}">
      <div class="pb-4">
        <div class="grid grid-cols-1 gap-4">
      <CardImageItem v-for="item of boilerplateState" :key="item.id" :data="item" />
    </div>
      </div>
    </AppTitle>
    
  </div>
</template>

<script setup lang="ts">
import { useBoilerplateList } from '~/composables/useState';

const boilerplateState = useBoilerplateList();


</script>


<style scoped></style>
