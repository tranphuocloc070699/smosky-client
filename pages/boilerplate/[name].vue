<template>
  <div>
    <!-- Navigation -->
    <AppNavigation :data="navigationData" />
    <!-- Header -->
    <BoilerplateInfo type="boilerplate" />
    <!-- Body -->
    <!-- Project -->
    <!-- <div class="p-4">
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-document" class="w-6 h-6 mr-2" />
        Project
      </h3>
    </div> -->
    <AppTitle
      :data="{ title: 'Example project', iconName: 'heroicons-document' }"
      v-if="boilerplate && boilerplate?.projectStructure"
    >
      <InteractiveProjectStructure
        :data="boilerplate?.projectStructure"
      />
    </AppTitle>

    <AppTitle
      :data="{ title: 'Features', iconName: '' }"
      class="bg-slate-50 py-5"
    >
    <template #image>
      <img
        src="@/assets/images/sparkles.svg"
        alt="Home"
        width="24"
        height="24"
        class="w-7 h-7 pr-2"
      />
    </template>
    <template #default>
      <ClientOnly>

        <BoilerplateFeature
          v-show="boilerplate?.features"
          :data="boilerplate.features"
        />
      </ClientOnly>

    </template>
    </AppTitle>


    <AppTitle :data="{ title: 'Reviews', iconName: '' }">
    

      <template #image>
      <img
        src="@/assets/images/chat.svg"
        alt="Home"
        width="24"
        height="24"
        class="w-7 h-7 pr-2"
      />
    </template>
    <template #default>
      <BoilerplateReview
        id="boilerplate-review"
        @on-submit="onCreateReviewSubmit"
      />

    </template>
    </AppTitle>

    <AppLoading v-show="loading"/>
  </div>
</template>

<script setup lang="ts">
import type { INavigation } from "~/types/components";
import { useBoilerplateItem } from "~/composables/useState";
import useApi from "~/composables/useApi";
import type { ICreateReview } from "~/types/request";
import type { IReview } from "~/types/model";
import NotifyData from "~/utils/notify-data";
const route = useRoute();
definePageMeta({
  layout: "detail",
});
const name = route.params.name;

const loading = ref(false)
const notify = useNotification(useToast)
const {boilerplate,fetchBoilerplate} = useBoilerplateStore()

await useAsyncData('boilerplateList', () => fetchBoilerplate(name as string))
// const { $api } = useNuxtApp()
/* boilerplateApi.boilerplate
  .fetchDetail(name as string)
  .then((data) => {
    if (!data.data.value) return;
    boilerplateItemState.value = {...data.data.value.data,starAvg:Math.round(data.data.value.data.starAvg)};
  
  })
  .catch((error) => {
    console.log({ error });
  }); */


  /* $api.boilerplates.fetchBoilerplate(name as string).then((response) => {
 
    if (!response.data.value) return;
    boilerplateItemState.value = {...response.data.value.data,starAvg:Math.round(response.data.value.data.starAvg)};
  
  })
  .catch((error) => {
    console.log({ error });
  }); */


const onCreateReviewSubmit = async (dto: IReview) => {
  loading.value = true;
/* const {
  data,
  error,
} = await $api.reviews.createReview({
  boilerplateId:dto.id,
  name:dto.name,
  email:dto.email,
  content:dto.content,
  star:dto.star
});

  
  if(data.value?.data && boilerplateItemState.value){
    boilerplateItemState.value.totalReview = data.value?.data.totalReview;
    boilerplateItemState.value.starAvg = Math.round(data.value?.data.starAvg);
    boilerplateItemState.value.oneStar = data.value?.data.oneStar;
    boilerplateItemState.value.twoStar = data.value?.data.twoStar;
    boilerplateItemState.value.threeStar = data.value?.data.threeStar;
    boilerplateItemState.value.fourStar = data.value?.data.fourStar;
    boilerplateItemState.value.fiveStar = data.value?.data.fiveStar;
    boilerplateItemState.value?.reviews.unshift({
      id:data.value?.data.id,
      name:data.value?.data.name,
      email:data.value?.data.email,
      star:data.value?.data.star,
      content:data.value?.data.content,
      createdAt:data.value?.data.createdAt,
      updatedAt:data.value?.data.updatedAt
    })
    notify.Success({title:NotifyData.REVIEW.SUCCESS})
  }else{
    notify.Danger({title:NotifyData.INTERNAL_SERVER_ERROR})
    console.error('[Create Review]',error)
  } */
  loading.value = false;
};

const navigationData: INavigation[] = [
  {
    title: "Home",
    link: "/",
    isActive: false,
  },
  {
    title: "Detail",
    link: `/boilerplate/${name}`,
    isActive: true,
  },
];

</script>

<style scoped></style>
