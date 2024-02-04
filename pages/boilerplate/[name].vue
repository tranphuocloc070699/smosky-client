<template>
  
  <div >
    <!-- Navigation -->
    <AppNavigation :data="navigationData" />
    <!-- Header -->
    <BoilerplateInfo type="boilerplate"/>
    <!-- Body -->
    <!-- Project -->
    <!-- <div class="p-4">
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-document" class="w-6 h-6 mr-2" />
        Project
      </h3>
    </div> -->
    <AppTitle :data="{title:'Project',iconName:'document'}">
      PlaceHolder
    </AppTitle>

    <AppTitle :data="{title:'Features',iconName:'star'}" class="bg-slate-50">
    <BoilerplateFeature/>
    </AppTitle>
    <!-- <div class="p-4">
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-2" />
        Questions
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

    <AppTitle :data="{title:'Reviews',iconName:'sparkles'}">
    <BoilerplateReview/>
    </AppTitle>
<!--     <div class="p-4">
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-star" class="w-6 h-6 mr-2" />
        Reviews
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
import type { INavigation } from "~/types/components";
import { useBoilerplateItem } from "~/composables/useState";
import useApi from "~/composables/useApi";
import type { IBoilerplateItem } from "~/types/model";
const route = useRoute();
definePageMeta({
  layout: "detail",
});

const name = route.params.name;

const boilerplateApi = useApi();
const boilerplateItemState = useBoilerplateItem();
boilerplateApi.boilerplate.fetchDetail(name as string).then((data) =>{
  
  boilerplateItemState.value = data.data.value as IBoilerplateItem

}).catch(error => {
  
  console.log({error})
})





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

onMounted(() => {});
</script>

<style scoped></style>
