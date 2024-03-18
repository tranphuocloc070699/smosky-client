<template>
  <div>
    <!-- Navigation -->
    <AppNavigation :data="navigationData" />
    <!-- Toc -->
    <!--     <CardToc /> -->
    <!-- Header -->
    <BlogInfo :data="post" />
    <!-- Body -->
    <BlogTableOfContent :is-mobile="false" :data="post.tocs"/>

    <div class="h-[800px] w-full"></div>

    <div v-if="post.content" class="max-w-7xl w-full mx-auto py-5">
      <div v-html="`${post.content}`"></div>
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


const postStore = usePostStore()
const {post} = storeToRefs(postStore);

await useAsyncData('fetchPost', () => postStore.fetchPost(name as string))


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
  () => postStore.post,
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
