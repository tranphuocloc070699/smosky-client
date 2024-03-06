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
      v-if="boilerplateItemState && boilerplateItemState?.projectStructure"
    >
      <InteractiveProjectStructure
        :data="boilerplateItemState?.projectStructure"
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
      <BoilerplateFeature
        v-if="boilerplateItemState?.features"
        :data="boilerplateItemState.features"
      />

    </template>
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
    <AppLoading v-show="loading"/>
  </div>
</template>

<script setup lang="ts">
import type { INavigation } from "~/types/components";
import { useBoilerplateItem } from "~/composables/useState";
import useApi from "~/composables/useApi";
import type { ICreateReview } from "~/types/request";
import type { IReview } from "~/types/model";
const route = useRoute();
definePageMeta({
  layout: "detail",
});
const name = route.params.name;

const boilerplateApi = useApi();
const boilerplateItemState = useBoilerplateItem();
const loading = ref(false)
const notify = useNotification(useToast)

const { $api } = useNuxtApp()
/* boilerplateApi.boilerplate
  .fetchDetail(name as string)
  .then((data) => {
    if (!data.data.value) return;
    boilerplateItemState.value = {...data.data.value.data,starAvg:Math.round(data.data.value.data.starAvg)};
  
  })
  .catch((error) => {
    console.log({ error });
  }); */


  $api.boilerplates.fetchBoilerplate(name as string).then((response) => {
 
    if (!response.data.value) return;
    boilerplateItemState.value = {...response.data.value.data,starAvg:Math.round(response.data.value.data.starAvg)};
  
  })
  .catch((error) => {
    console.log({ error });
  });


const onCreateReviewSubmit = async (dto: IReview) => {
  loading.value = true;
const {
  data,
  error,
} = await boilerplateApi.review.createReview({
  boilerplateId:dto.id,
  name:dto.name,
  email:dto.email,
  content:dto.content,
  star:dto.star
});

  if(data.value && boilerplateItemState.value){
    boilerplateItemState.value.totalReview = data.value.totalReview;
    boilerplateItemState.value.starAvg = Math.round(data.value.starAvg);
    boilerplateItemState.value.oneStar = data.value.oneStar;
    boilerplateItemState.value.twoStar = data.value.twoStar;
    boilerplateItemState.value.threeStar = data.value.threeStar;
    boilerplateItemState.value.fourStar = data.value.fourStar;
    boilerplateItemState.value.fiveStar = data.value.fiveStar;
    boilerplateItemState.value?.reviews.unshift({
      id:data.value.id,
      name:data.value.name,
      email:data.value.email,
      star:data.value.star,
      content:data.value.content,
      createdAt:data.value.createdAt,
      updatedAt:data.value.updatedAt
    })
    notify.Success({title:'Create review successfully!'})
  }else{
    notify.Danger({title:'Oops! Something wrong.'})
    console.error('[Create Review]',error)
  }
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
