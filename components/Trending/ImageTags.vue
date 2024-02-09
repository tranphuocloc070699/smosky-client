<template>
  <div>
    <h2 class="text font-semibold text-lg py-4 flex items-center text-tear-700">
      <img
        src="@/assets/images/tag.svg"
        alt="Home"
        width="24"
        height="24"
        class="w-6 h-6 pr-2"
      />
      Tags
    </h2>
    <div class="flex items-center flex-wrap gap-4">
      <CardTagItem v-if="tagListState" v-for="item in tagListState" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useTagList} from '~/composables/useState'
const tagListState = useTagList();
/* const data = [
  {
    title: "Postgresql",
    color: "blue",
    background: "bg-blue-100",
    textColor: "text-blue-600",
    link: "/",
  },
  {
    title: "Spring boot",
    background: "bg-green-100",
    textColor: "text-green-600",
    link: "/",
  },
  {
    title: "React",
    background: "bg-sky-100",
    textColor: "text-sky-600",
    link: "/",
  },
  {
    title: "Angular",
    background: "bg-red-100",
    textColor: "text-red-600",
    link: "/",
  },
  {
    title: "Vuejs",
    background: "bg-emerald-100",
    textColor: "text-emerald-600",
    link: "/",
  },
]; */
</script>

<style scoped></style>
