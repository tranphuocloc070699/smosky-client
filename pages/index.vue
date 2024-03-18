<template>

    <div class="grid grid-cols-12">
  <div class="col-span-12 md:col-span-9 md:px-8">
    <TrendingImages />
  </div>
  <div class="col-span-12 md:col-span-3 md:px-8 border-l border-gray-100 hid">
    <TrendingImageTags />
  </div>
</div>
</template>

<script setup lang="ts">

import { useNotification } from '~/composables/useNotification';
import { useBoilerplateList, useTagList } from '~/composables/useState';
import { useBoilerplateStore } from '~/stores/boilerplate.store';
const boilerplateState = useBoilerplateList();
const tagListState = useTagList();
const { $api } = useNuxtApp()
const notify = useNotification(useToast)
const boilerplateStore = useBoilerplateStore();


await useAsyncData('fetchPostList', () => boilerplateStore.fetchBoilerplateList())


</script>

<style scoped>

</style>