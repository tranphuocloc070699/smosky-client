<template>
  <NuxtLink
    :to="`/boilerplate/Today's Cryptocurrency Prices by Market Cap`"
    class="p-4 border border-slate-200 rounded-md overflow-hidden cursor-pointer bg-gradient-to-b from-slate-50 flex items-start gap-4"
  >
    <img
      src="@/assets/images/bg-placeholder.png"
      width="auto"
      height="auto"
      alt="Image Thumbnail"
      class="h-20 w-20 object-cover"
    />
    <div>
      <h3 class="text-base font-medium flex-grow">
        Today's Cryptocurrency Prices by Market Cap
      </h3>
      <h4 class="text-slate-400 font-light text-base">
        Build something simple.
      </h4>
      <div class="flex items-center gap-2">
        <NuxtRating :read-only="true" :ratingValue="5" :rating-size="'20px'" class="mb-1" />
        <h5 class="text-slate-400 font-light text-sm ml-[86px]">
          (1.200 voting)
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

<script setup lang="ts"></script>

<style scoped></style>
