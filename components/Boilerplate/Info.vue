<template>
  <div  class="bg-slate-50">
    <div v-if="boilerplateItemState" class="max-w-7xl w-full mx-auto py-8 md:grid md:grid-cols-2 px-4 md:px-0">
      <div class="flex flex-col justify-between">
        <!-- Title -->
        <div class="flex flex-col gap-2 min-h-44">
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
            <InteractiveVoting :read-only="true" :rating-value="boilerplateItemState.starAvg"/>
            <h5 class="text-slate-500 font-light text-sm">
              ({{ boilerplateItemState.totalReview }} voting)
            </h5>
            <a
              class="ml-4 font-semibold text-sm flex items-center gap-2 cursor-pointer hover:underline text-black"
              href="#boilerplate-review"
            >
              Show reviews
              <UIcon name="i-heroicons-chevron-down" />
            </a>

          </div>
          <!-- Created by -->
      <!--     <h3 class="font-normal" v-if="type === 'boilerplate'">
            Created by
            <span
              class="pl-2 underline font-medium text-green-700 cursor-pointer"
              >GoodThingTakeTime</span
            >
          </h3> -->
        </div>

        <div class="flex items-center gap-10" v-if="type === 'boilerplate'">
          <NuxtLink :to="`/boilerplate/explore/${boilerplateItemState.name}`"
            ><UButton class="py-2 px-6">Let's explore</UButton></NuxtLink
          >
          <!-- <UButton color="white" class="py-2 px-6" v-show="isMobile" @click="showDemoOpen=true">Show demo</UButton> -->
        </div>

      </div>
      <!-- <div v-show="!isMobile" class="flex justify-end">
        <InteractiveVideo :preview-link="boilerplateItemState.previewLink" :thumbnail="boilerplateItemState.thumbnail" />
      </div> -->
    </div>
    <ModalShowVideo :is-open="showDemoOpen" @update:is-open="toggleShowDemo" :preview-link="boilerplateItemState?.previewLink" />
  </div>
</template>

<script setup lang="ts">
import { useBoilerplateItem } from "~/composables/useState";
const boilerplateItemState = useBoilerplateItem();
import {useMobileDetector}from '@/composables/useState'

const isMobile = useMobileDetector();
/* 
  Input:
    - type:boilerplate || explore 
*/
defineProps<{
  type: string;
}>();

const showDemoOpen = ref(false);

const toggleShowDemo = (value : boolean) =>{
    showDemoOpen.value = value
}


</script>

<style scoped></style>
