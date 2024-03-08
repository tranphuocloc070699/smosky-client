<template>
  <div v-if="boilerplateItemState" class="flex items-center gap-10">
    <div
      class="w-44 h-44 round shadow-lg flex flex-col gap-6 items-center justify-center relative"
    >
      <p class="text-2xl text-[#173952] font-semibold">
        {{ boilerplateItemState.starAvg}}
      </p>
      <div class="absolute left-[25%] top-[45%]">
        <AppVoting :read-only="true" :rating-value="boilerplateItemState.starAvg"/>
      </div>
      <p class="text-sm font-light text-[#173952]">
      {{ boilerplateItemState.totalReview }} Reviews
      </p>
    </div>
    <div v-show="!isMobile" class="flex flex-col gap-2">
         <!-- Five Star -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          5
          <UIcon
            :name="`i-heroicons-star-solid`"
            class="w-4 h-4 text-amber-400"
          />
        </div>
        <UProgress
          :value="convertStarToPercent(boilerplateItemState.fiveStar)"
          color="yellow"
          class="w-96"
        />
        <p class="text-sm">{{ boilerplateItemState.fiveStar }}</p>
      </div>
      <!-- Four Star -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          4
          <UIcon
            :name="`i-heroicons-star-solid`"
            class="w-4 h-4 text-amber-400"
          />
        </div>
        <UProgress
          :value="convertStarToPercent(boilerplateItemState.fourStar)"
          color="yellow"
          class="w-96"
        />
        <p class="text-sm">{{ boilerplateItemState.fourStar }}</p>
      </div>
     

      <!-- Three Star -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          3
          <UIcon
            :name="`i-heroicons-star-solid`"
            class="w-4 h-4 text-amber-400"
          />
        </div>
        <UProgress
          :value="convertStarToPercent(boilerplateItemState.threeStar)"
          color="yellow"
          class="w-96"
        />
        <p class="text-sm">{{ boilerplateItemState.threeStar }}</p>
      </div>

      <!-- Two Star -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          2
          <UIcon
            :name="`i-heroicons-star-solid`"
            class="w-4 h-4 text-amber-400"
          />
        </div>
        <UProgress
          :value="convertStarToPercent(boilerplateItemState.twoStar)"
          color="yellow"
          class="w-96"
        />
        <p class="text-sm">{{ boilerplateItemState.twoStar }}</p>
      </div>
      <!-- One Star -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          1
          <UIcon
            :name="`i-heroicons-star-solid`"
            class="w-4 h-4 text-amber-400"
          />
        </div>
        <UProgress
          :value="convertStarToPercent(boilerplateItemState.oneStar)"
          color="yellow"
          class="w-96"
        />
        <p class="text-sm">{{ boilerplateItemState.oneStar }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBoilerplateItem } from "~/composables/useState";
import { useMobileDetector } from "~/composables/useState";

const boilerplateItemState = useBoilerplateItem();
const isMobile = useMobileDetector();
const convertStarToPercent = (value: number) => {
  if (!value || !boilerplateItemState.value) return 0;

  return (value / boilerplateItemState.value.totalReview) * 100;
};
</script>

<style scoped></style>
