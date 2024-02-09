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
      :data="{ title: 'Example project', iconName: 'document' }"
      v-if="boilerplateItemState && boilerplateItemState?.projectStructure"
    >
      <InteractiveProjectStructure
        :data="boilerplateItemState?.projectStructure"
      />
    </AppTitle>

    <AppTitle
      :data="{ title: 'Features', iconName: 'star' }"
      class="bg-slate-50"
    >
      <BoilerplateFeature
        v-if="boilerplateItemState?.features"
        :data="boilerplateItemState.features"
      />
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

    <AppTitle :data="{ title: 'Reviews', iconName: 'sparkles' }">
      <BoilerplateReview
        id="boilerplate-review"
        @on-submit="onCreateReviewSubmit"
      />
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
import type { ICreateReview } from "~/types/request";
import type { IReview } from "~/types/model";
const route = useRoute();
definePageMeta({
  layout: "detail",
});
const name = route.params.name;

const boilerplateApi = useApi();
const boilerplateItemState = useBoilerplateItem();

boilerplateApi.boilerplate
  .fetchDetail(name as string)
  .then((data) => {
    if (!data.data.value) return;
    boilerplateItemState.value = data.data.value;
  })
  .catch((error) => {
    console.log({ error });
  });


const onCreateReviewSubmit = async (dto: IReview) => {
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
    boilerplateItemState.value!.totalReview = data.value.totalReview;
    boilerplateItemState.value!.starAvg = data.value.starAvg;
    boilerplateItemState.value!.oneStar = data.value.oneStar;
    boilerplateItemState.value!.twoStar = data.value.twoStar;
    boilerplateItemState.value!.threeStar = data.value.threeStar;
    boilerplateItemState.value!.fourStar = data.value.fourStar;
    boilerplateItemState.value!.fiveStar = data.value.fiveStar;


    boilerplateItemState.value?.reviews.unshift({
      id:data.value.id,
      name:data.value.name,
      email:data.value.email,
      star:data.value.star,
      content:data.value.content,
      createdAt:data.value.createdAt,
      updatedAt:data.value.updatedAt
    })
  }
};

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
