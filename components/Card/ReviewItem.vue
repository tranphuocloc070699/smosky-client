<template>
  <div class="pb-4 mb-4 border-b border-slate-100">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div>
        <h4 class="text-sm font-medium flex items-center gap-3">
          GoodThingTakeTime
          <div class="w-1 h-1 border border-gray-500 rounded-full"></div>
            <p class="text-xs text-gray-500 ">3 days ago</p>
        </h4>
        <div class="text-sm flex items-center gap-1">
            <UIcon name="i-heroicons-star" class="text-amber-800"
          />
          <UIcon name="i-heroicons-star" class="text-amber-800"
          />
          <UIcon name="i-heroicons-star" class="text-amber-800"
          />
        </div>
      </div>
    </div>
    <!-- Body -->
    <div class="mt-2">
        <h5 class="text-sm py-1 px-2 font-normal bg-slate-50 rounded-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, placeat veniam aspernatur quisquam hic corrupti ipsam doloremque officiis, maxime vitae quibusdam, fugit error reprehenderit ipsum. Unde nemo accusantium dolore quibusdam?
        </h5>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { IReview } from '~/types/model';

defineProps<{
  data:IReview
}>();

</script>

<style scoped></style>
