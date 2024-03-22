<template>
  <div
    class="flex items-start overflow-x-auto  gap-10 py-4 flex-nowrap h-[439px] scrollbar"
  >
    <div
      v-for="item in boilerplateStore.springDependenciesSelected"
      :key="item.name"
      v-show="item.properties && item.properties.length > 0"
      class="border border-slate-200 shadow-sm rounded-md min-w-[424px] rounded-t-md"
    >
      <h4
        class="text-center py-2 font-semibold border-b border-slate-[#467190] bg-slate-200  rounded-t-md text-gray-900"
      >
        {{ item.name }}
      </h4>

      <div
        class="text-sm font-normal gap-4 p-4 flex items-center"
        v-for="property in item.properties"
        :key="property.id"
      >
        <UTooltip :popper="{ placement: 'top' }" class="">
          <template #text>
              <p class="font-medium text-sm px-4">{{ property.id }}</p>
          </template>
          <label
            class="font-medium text-sm flex items-center cursor-pointer whitespace-nowrap"
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
          v-if="property.options.length === 0"
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

const boilerplateStore = useBoilerplateStore()


</script>

<style scoped></style>
