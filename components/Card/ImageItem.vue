<template>
  <NuxtLink
  v-if="data"
    :to="`/boilerplate/${data.name}`"
    class="p-4 border border-slate-200 rounded-md overflow-hidden cursor-pointer bg-gradient-to-b from-slate-50 flex items-start gap-4"
  >
    <img
      :src="data.thumbnail"
      width="auto"
      height="auto"
      alt="Image Thumbnail"
      class="h-20 w-20 object-cover"
    />
    <div>
      <h3 class="text-base font-medium flex-grow">
        {{ data.name }}
      </h3>
      <h4 class="text-slate-400 font-light text-base">
        {{ data.description }}
      </h4>
      <div class="flex items-center gap-2">
        <NuxtRating :read-only="true" :ratingValue="data.starAvg" :rating-size="'20px'" class="mb-1" />
        <h5 class="text-slate-400 font-light text-sm ml-[86px]">
          ({{data.totalReview}} voting)
        </h5>
      </div>
    </div>
    <!--    <div class="flex items-center justify-end gap-2 p-4">
      <CardIconItem name="i-heroicons-heart" :counting="1" />
      <CardIconItem
        name="i-heroicons-chat-bubble-bottom-center"
        :counting="4"
      />
      <CardIconItem name="i-heroicons-bookmark" />
    </div>-->
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IBoilerplate } from '~/types/model';

defineProps<
{
  data:IBoilerplate
}
>()
</script>

<style scoped></style>
