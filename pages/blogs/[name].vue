<template>
  <div>
    <!-- Navigation -->
    <AppNavigation :data="navigationData" />
    <!-- Toc -->
    <!--     <CardToc /> -->
    <!-- Header -->
    <BlogInfo :data="postState" />
    <!-- Body -->
    <div v-if="postState.content" class="max-w-7xl w-full mx-auto py-5">
      <div v-html="`${postState.content}`"></div>
    </div>

    <!-- Questions -->
    <!--  <div class="p-4">
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        Questions
        <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-2" />
      </h3>
      <div class="grid grid-cols-12">
        <div class="col-span-5">
          <QuestionCreator />
          <div class="pt-8">
            <CardQuestionItem v-for="item in 3" :key="item" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Comments -->
    <!--     <div class="p-4">
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-star" class="w-6 h-6 mr-2" />
        Comments
      </h3>
      <div class="grid grid-cols-12">
        <div class="col-span-5">
          <CardReviewItem v-for="item in 3" :key="item" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import "~/assets/css/one-dark.css";
import type { INavigation } from "~/types/components";
import { usePost } from "~/composables/useState";

import type { IApiInstance } from "~/plugins/api";
import type { IPost } from "~/types/model";
const route = useRoute();
definePageMeta({
  layout: "detail",
});
const name = route.params.name;
const postState = usePost();

const nuxtApp = useNuxtApp();
const api = nuxtApp.$api as IApiInstance;

api.blogs
  .fetchDetailBlog(name as string)
  .then((data) => {
    if (!data.data.value) return;
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
