<template>
  <div class="bg-gradient-to-b from-slate-100">
    <!-- Navigation -->
    <h2 class="text-center py-8 text-2xl font-semibold">Admin Dashboard</h2>
    <UTabs :items="items" class="w-full p-4">
      <!-- <template #ci-cd="{ item }"> </template> -->

      <template #posts="{ item }">
        <div>
          postList: {{ postList }}
        </div>
      </template>

      <template #questions="{ item }"> </template>

      <template #reviews="{ item }"> </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">

const postStore = usePostStore();
const reviewStore = useReviewStore();
const {postList} = storeToRefs(postStore);
const {} = storeToRefs(reviewStore);


const items = [
  // {
  //   slot: "boilerplates",
  //   label: "Boilerplate",
  // },
  {
    slot: "posts",
    label: "Posts",
  },
  {
    slot: "questions",
    label: "Questions",
  },
  {
    slot: "reviews",
    label: "Reviews",
  },
];
</script>

<style scoped></style>
