<template>
    <div class="grid grid-cols-12">
  <div class="col-span-12 md:col-span-9 px-8">
    <TrendingImages />
  </div>
  <div class="col-span-12 md:col-span-3 px-8 border-l border-gray-100">
    <TrendingImageTags />
  </div>
</div>
</template>

<script setup lang="ts">
import type { IBoilerplate, ITag } from '~/types/model';
import useApi from '~/composables/useApi';
import {useBoilerplateList,useTagList} from '~/composables/useState'
const boilerplateApi = useApi();
const boilerplateState = useBoilerplateList();
const tagListState = useTagList();

boilerplateApi.boilerplate.fetchAll().then((data) =>{
  boilerplateState.value = data.data.value?.boilerplates as IBoilerplate[];
  tagListState.value = data.data.value?.tags as ITag[]

}).catch(error => {
  console.log({error})
})






</script>

<style scoped>

</style>