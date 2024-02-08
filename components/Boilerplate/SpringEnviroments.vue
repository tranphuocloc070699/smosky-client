<template>
  <div class="flex items-center overflow-x-auto gap-10  py-4 flex-nowrap h-[439px]">
    <div
      v-for="item in springDependenciesSelectedState"
      :key="item.name"
      v-show="item.properties.length>0"
      class="border border-slate-200 shadow-sm rounded-md min-w-[424px] rounded-t-md"
    >
      <h4 class="text-center py-2 font-semibold border-b border-slate-[#467190]  bg-[#467190]  rounded-t-md text-white">
        {{ item.name }}
      </h4>

        <div class="text-sm font-normal gap-4 p-4 flex items-center" v-for="property in item.properties" :key="property.id">
        <UTooltip :text="property.toolTip" :popper="{ placement: 'top' }" class="">
          <label class="font-medium text-sm flex items-center cursor-pointer whitespace-nowrap"
            >{{ property.title }}
            <UIcon
              name="i-heroicons-question-mark-circle"
              class="text-lg ml-1 mb-[1px]"
            />
          </label>
        </UTooltip>

        <UInput
          variant="outline"
          class="flex-1"
          placeholder="Enter something..."
          v-if="property.options.length===0"
          :disabled="property?.isDisable"
          v-model="property.value"
        />
        <USelect
        v-else
        class="flex-1"
              v-model="property.value"
              :options="property.options"
              option-attribute="type"
            />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import { useSpringDependenciesSelected } from "~/composables/useState";
const springDependenciesSelectedState = useSpringDependenciesSelected();

</script>

<style scoped></style>
