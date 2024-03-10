<template>
  <div v-if="data" class="bg-gradient-to-b bg-slate-50 py-5">
    <div class="w-full max-w-7xl mx-auto">
      <h2 class="font-bold text-3xl">
        {{ data.title }}
      </h2>
      <div class="flex items-center gap-4 mt-2 max-w-6xl">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <h4 class="text-sm font-medium flex items-center gap-4">
          GoodThingTakeTime
          <div class="w-1 h-1 border border-gray-500 rounded-full"></div>
          <p class="text-xs text-gray-500">
            {{ convertDateTimeToYMD(data.createdAt.toString()) }}
          </p>
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPost } from "~/types/model";
import { convertDateTimeToYMD } from "~/utils/timer";

defineProps<{
  data: IPost;
}>();
</script>

<style scoped></style>
