<template>
  <div class="">
    <!-- Navigation -->
    <AppNavigation :data="navigationData" />
    <!-- Header -->
    <div class="bg-slate-50">
      <div
        class="max-w-7xl w-full mx-auto py-8 grid grid-cols-2"
      >
        <div class="flex flex-col justify-between">
          <!-- Title -->
          <div class="flex flex-col gap-2">
            <div>
              <h2 class="text-xl text-slate-800 font-semibold">
            Spring Boot Folder Structure (Best Practices)
          </h2>
          <!-- Description -->
          <h3 class="font-normal text-slate-600 text-base">
            A practical programming course for office workers, academics, and
            administrators who want to improve their productivity.
          </h3>
            </div>
          <!-- Rating -->
          <div class="flex items-center gap-1">
            <NuxtRating
              :read-only="true"
              :ratingValue="5"
              :rating-size="'20px'"
              class="mb-1"
            />
            <h5 class="text-slate-500 font-light text-sm ml-[86px]">
              (1.200 voting)
            </h5>
            <div
              class="ml-4 font-semibold text-sm flex items-center gap-2 cursor-pointer hover:underline"
            >
              Show reviews
              <UIcon name="i-heroicons-chevron-down" />
            </div>
          </div>
          <!-- Created by -->
          <h3 class="font-normal">
            Created by
            <span
              class="pl-2 underline font-medium text-green-700 cursor-pointer"
              >GoodThingTakeTime</span
            >
          </h3>
          </div>
    
          <div class="flex items-center gap-10">
            <UButton class="py-2 px-6">Let's explore</UButton>
            <UButton color="red" variant="solid" class="py-2 px-6">Ask question</UButton>
          </div>
         
        </div>
        <div  class="flex justify-end">
          <InteractiveVideo />
        </div>
        
      </div>
    </div>
    <!-- Body -->
    <!-- Project -->
    <div class="p-4">
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-document" class="w-6 h-6 mr-2" />
        Project
      </h3>
    </div>
    <div class="p-4">
      <!-- Questions -->
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-2" />
        Questions
      </h3>
      <div class="grid grid-cols-12">
        <div class="col-span-5">
          <QuestionCreator />
          <div class="pt-8">
            <CardQuestionItem v-for="item in 3" :key="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <!-- Comments -->
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-star" class="w-6 h-6 mr-2" />
        Reviews
      </h3>
      <div class="grid grid-cols-12">
        <div class="col-span-5">
          <CardReviewItem v-for="item in 3" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavigation } from "~/types/components";

const route = useRoute();
definePageMeta({
  layout: "detail",
});
const name = route.params.name;

const navigationData: INavigation[] = [
  {
    title: "Home",
    link: "/",
    isActive: false,
  },
  {
    title: "Detail",
    link: "/",
    isActive: true,
  },
];

onMounted(() => {});
</script>

<style scoped></style>
~/types/components
