<template>
  <div  class="bg-slate-50">
    <div v-if="boilerplateItemState" class="max-w-7xl w-full mx-auto py-8 grid grid-cols-2">
      <div class="flex flex-col justify-between">
        <!-- Title -->
        <div class="flex flex-col gap-2">
          <div>
            <h2 class="text-xl text-slate-800 font-semibold">
              {{ boilerplateItemState.name }}
            </h2>
            <!-- Description -->
            <h3 class="font-normal text-slate-600 text-base">
              {{ boilerplateItemState.description }}
            </h3>
          </div>
          <!-- Rating -->
          <div class="flex items-center gap-1" v-if="type === 'boilerplate'">
            <NuxtRating
              :read-only="true"
              :ratingValue="boilerplateItemState.starAvg"
              :rating-size="'20px'"
              class="mb-1"
            />
            <h5 class="text-slate-500 font-light text-sm ml-[86px]">
              ({{ boilerplateItemState.totalReview }} voting)
            </h5>
            <div
              class="ml-4 font-semibold text-sm flex items-center gap-2 cursor-pointer hover:underline"
            >
              Show reviews
              <UIcon name="i-heroicons-chevron-down" />
            </div>
          </div>
          <!-- Created by -->
          <h3 class="font-normal" v-if="type === 'boilerplate'">
            Created by
            <span
              class="pl-2 underline font-medium text-green-700 cursor-pointer"
              >GoodThingTakeTime</span
            >
          </h3>
        </div>

        <div class="flex items-center gap-10" v-if="type === 'boilerplate'">
          <NuxtLink to="/boilerplate/explore/something"
            ><UButton class="py-2 px-6">Let's explore</UButton></NuxtLink
          >
          <UButton color="red" variant="solid" class="py-2 px-6"
            >Ask question</UButton
          >
        </div>

        <div class="flex items-center gap-10" v-else>
          <NuxtLink to="/boilerplate/explore/something"
            ><UButton class="py-2 px-6" color="blue" variant="solid"
              >Download default template</UButton
            ></NuxtLink
          >
          <UButton color="pink" variant="solid" class="py-2 px-6"
            >Custom template</UButton
          >
        </div>
      </div>
      <div class="flex justify-end">
        <InteractiveVideo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBoilerplateItem } from "~/composables/useState";

/* 
  Input:
    - type:boilerplate || explore 
*/
defineProps<{
  type: string;
}>();
const boilerplateItemState = useBoilerplateItem();

</script>

<style scoped></style>
