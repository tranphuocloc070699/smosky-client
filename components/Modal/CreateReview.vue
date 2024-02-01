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
            <p class="text-sm font-medium">Give a star</p>
          <NuxtRating
              :read-only="false"
              :ratingValue="0"
              :rating-size="'32px'"
            />
          </div>

          <div class="p-4 flex items-start gap-1 flex-col">
            <p class="text-sm font-medium">Leave a comment</p>
          <UTextarea v-model="value" />
          </div>

          <div class="flex justify-end mt-10">
    
          <UButton class="py-2 px-8">Submit</UButton>
          </div>
        </UCard>
      </UModal>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
const isOpen = ref(false);
</script>

<style scoped></style>
