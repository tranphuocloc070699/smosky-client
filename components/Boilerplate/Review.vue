<template>
  <div>
    <div class="flex justify-between">
      <InteractiveReviewInfo />
      <ModalCreateReview />
    </div>
    <div class="max-w-[708px] py-4 mt-10">
      <div class="py-4" v-for="item in 5" :key="item">
        <InteractiveReviewItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
