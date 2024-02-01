<template>

        <div class="p-4 flex items-center justify-between ">
        <p class="font-semibold">Dependencies</p>
        <ModalAddSpringDependency />
      </div>
     <div class="px-4 overflow-y-scroll max-h-[500px]">
      <div class="p-4 bg-slate-100 rounded-md mt-4 group" v-for="item in springStarterDependencyData" :key="item.name">
            <h4 class="font-medium flex items-start justify-between ">{{ item.name }}
              <UIcon name="i-heroicons-x-circle" class="w-5 h-5  text-red-600 cursor-pointer hidden group-hover:block"/>
            </h4>
            <p class="text-sm">{{ item.description }}</p>
            
        </div>
     </div>
</template>

<script setup lang="ts">
import {springStarterDependencyData} from "~/utils/data"
</script>

<style scoped>

</style>