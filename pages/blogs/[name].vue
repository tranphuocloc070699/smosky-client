<template>
  <div>
    <!-- Navigation -->
    <AppNavigation :data="navigationData" />
    <!-- Toc -->
    <!--     <CardToc /> -->
    <!-- Header -->
    <BlogInfo :data="postState" />
    <!-- Body -->
    <BlogTableOfContent :is-mobile="false" :data="postState.tocs"/>

    <div class="h-[800px] w-full"></div>

    <div v-if="postState.content" class="max-w-7xl w-full mx-auto py-5">
      <div v-html="`${postState.content}`"></div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import "~/assets/css/one-dark.css";
import type { INavigation } from "~/types/components";
import { usePost } from "~/composables/useState";
import type { IPost } from "~/types/model";
const route = useRoute();
definePageMeta({
  layout: "detail",
});
const name = route.params.name;
const postState = usePost();

const {$api} = useNuxtApp();

$api.posts
  .fetchPost(name as string)
  .then((data) => {
    if (!data.data.value) return;

    console.log({data:data.data.value.data})
    postState.value = data.data.value.data as IPost;
  })
  .catch((error) => {
    console.log({ error });
  });

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
     
watch(
  postState.value,
  (value) => {
    if (document) {
      Prism.highlightAll();
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style scoped></style>
