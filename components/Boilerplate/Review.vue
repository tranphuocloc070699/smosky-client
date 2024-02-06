<template>
  <div>
    <div class="flex justify-between">
      <InteractiveReviewInfo />
      <ModalCreateReview />
    </div>
    <div v-if="boilerplateItemState" class="max-w-[708px] py-4 mt-10">
      <div class="py-4" v-for="item of boilerplateItemState.reviews" :key="item.id" >
        <InteractiveReviewItem :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBoilerplateItem } from "~/composables/useState";
const boilerplateItemState = useBoilerplateItem();

</script>

<style scoped></style>
