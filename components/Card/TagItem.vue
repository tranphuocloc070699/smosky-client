<template>
  <div
    :class="`px-2 py-1 rounded-md inline-block text-sm font-medium ${data?.background} ${data?.textColor} cursor-pointer transition duration-300 ease-in-out hover:brightness-95`"
  >
    {{ data.title }}
  </div>
</template>

<script setup lang="ts">
import type { ITagItem } from "~/types/model";

defineProps<{
  data?: ITagItem;
}>();
</script>

<style scoped></style>
