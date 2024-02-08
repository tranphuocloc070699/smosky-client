<template>
  <div>

      <UButton class="py-2 px-4" @click="isOpen = true"
        >Create a review</UButton
      >
      <UModal v-model="isOpen" prevent-close>
        <UCard
          :ui="{
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Leave a review
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpen = false"
              />
            </div>
          </template>
          <div class="p-4 flex items-start gap-1 flex-col">
            <p class="text-sm font-medium">Your name</p>
          <UInput v-model="data.name" class="w-full h-auto" placeholder="Enter your name..."/>
          </div>

          <div class="p-4 flex items-start gap-1 flex-col">
            <p class="text-sm font-medium">Give a star</p>
          <NuxtRating
              :read-only="false"
              v-model="data.star"
              :rating-size="'32px'"
            />
          </div>

          <div class="p-4 flex items-start gap-1 flex-col">
            <p class="text-sm font-medium">Your comment</p>
          <UTextarea v-model="data.content" class="w-full h-auto"/>
          </div>

          <div class="flex justify-end mt-10">
    
          <UButton class="py-2 px-8" @click="onSubmit">Submit</UButton>
          </div>
        </UCard>
      </UModal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id:number;
}>()
const data = ref({
  id:props.id,
  name:'',
  email:'',
  content:'',
  star:0
})
const isOpen = ref(false);

const onSubmit = () =>{
  console.log({data})
}
</script>

<style scoped></style>
