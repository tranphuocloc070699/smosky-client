<template>
  <div v-if="data" class="p-4 rounded border border-slate-300">
    <div class="flex items-center gap-4">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="font-semibold relative text-sm">
       {{ data.name }}
        <div class="absolute left-0 top-5">
         <!--  <NuxtRating
            :read-only="true"
            :ratingValue="data.star"
            :rating-size="'16px'"
          /> -->
          <InteractiveVoting :read-only="true" :rating-value="data.star"/>
        </div>
      </div>

      <p class="text-sm text-slate-500">{{convertDateTimeToYMD(data.createdAt.toString())  }}</p>
    </div>
    <p class="pt-4">{{ data.content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IReview } from '~/types/model';
import {convertDateTimeToYMD} from '~/utils/timer'
defineProps<{
  data:IReview
}>();

</script>

<style scoped></style>
