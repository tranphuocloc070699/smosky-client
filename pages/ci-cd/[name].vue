<template>
  <div class="">
    <!-- Navigation -->
    <div
      class="bg-slate-100 flex items-center gap-2 py-2 px-4 text-sm font-normal"
    >
      <span class="cursor-pointer hover:underline">Home</span>
      <UIcon name="i-heroicons-chevron-right" />
      <strong class="cursor-pointer hover:underline">Detail</strong>
    </div>
    <!-- Header -->
    <div class="bg-gradient-to-b from-slate-50  p-4 md:flex md:items-start gap-4">
      <img
        src="@/assets/images/images.jpeg"
        with="auto"
        height="auto"
        class="h-48 w-48 object-cover rounded-md"
      />
      <div>
        <!-- Title -->
        <h2 class="text-xl text-slate-800 font-semibold">
          Spring Boot Folder Structure (Best Practices)
        </h2>
        <!-- Price -->
        <h3 class="font-normal">
          Price: <span class="pl-2 font-medium">$5.00</span>
        </h3>
        <!-- Level -->
        <h3 class="font-normal">
          Level: <span class="pl-2 font-medium">Easy</span>
        </h3>
        <!-- Review -->
        <h3 class="font-normal flex items-center">
          Review:
          <span class="pl-2 font-medium  flex items-center gap-1"
            >4 <UIcon name="i-heroicons-star"
          />
          (1.200 voting)
        </span>
        </h3>
        <!-- Created by -->
        <h3 class="font-normal">Created by 
            <span class="pl-2 underline font-medium text-slate-700 cursor-pointer">GoodThingTakeTime</span>
        </h3>
        <!-- Download button -->
        <ModalImageDownloader class="mt-4"/>
      </div>
    </div>
    <!-- Body -->
    <!-- Project -->
    <div class="p-4">
        <h3 class="text font-semibold text-lg py-4 flex items-center ">
            <UIcon name="i-heroicons-document" class="w-6 h-6 mr-2"/>
            Project</h3>
        
    </div>
    <div class="p-4">
        <!-- Questions -->
        <h3 class="text font-semibold text-lg py-4 flex items-center ">
            <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-2"/>
            Questions</h3>
            <div class="grid grid-cols-12">
                <div class="col-span-5">
                    <QuestionCreator/>
                    <div class="pt-8">
                        <CardQuestionItem v-for="item in 3" :key="item"/>
                     
                    </div>
                </div>
            </div>
       
        
    </div>
    <div class="p-4">
        <!-- Comments -->
        <h3 class="text font-semibold text-lg py-4 flex items-center ">
            <UIcon name="i-heroicons-star" class="w-6 h-6 mr-2"/>
            Reviews</h3>
            <div class="grid grid-cols-12">
                <div class="col-span-5">
                        <CardReviewItem v-for="item in 3" :key="item"/>

                </div>
            </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const name = route.params.name;

onMounted(() => {
  console.log({ name });
});
</script>

<style scoped></style>
