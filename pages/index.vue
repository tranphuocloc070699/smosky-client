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
import type { IBoilerplate, ITag } from '~/types/model';
import useApi from '~/composables/useApi';

import {useBoilerplateList,useTagList} from '~/composables/useState'
import {useNotification} from '~/composables/useNotification'
import NotifyData from '~/utils/notify-data';
import { useBoilerplateStore } from '~/stores/boilerplates.store';
const boilerplateState = useBoilerplateList();
const tagListState = useTagList();
const { $api } = useNuxtApp()
const notify = useNotification(useToast)
const {fetchBoilerplateList} = useBoilerplateStore();


// $api.boilerplates.fetchBoilerplateList().then((response) =>{
//   boilerplateState.value = response.data.value?.data?.boilerplates as IBoilerplate[];
//   tagListState.value = response.data.value?.data?.tags as ITag[]
// }).catch((error : any) => {
//   notify.Danger({title:NotifyData.INTERNAL_SERVER_ERROR})
//  console.error({error})
// })
await useAsyncData('boilerplateList', () => fetchBoilerplateList())


// const {data,error,pending,execute} = await $api.boilerplates.fetchBoilerplateList()
/* boilerplateApi.boilerplate.fetchAll().then((data) =>{
 
  boilerplateState.value = data.data.value?.data?.boilerplates as IBoilerplate[];
  tagListState.value = data.data.value?.data?.tags as ITag[]

}).catch((error : any) => {
  console.log({error})
}) */

</script>

<style scoped>

</style>