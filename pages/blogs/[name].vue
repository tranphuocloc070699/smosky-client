<template>
  <div>
    <!-- Navigation -->
    <div
      class="bg-slate-100 flex items-center gap-2 py-2 px-4 text-sm font-normal"
    >
      <span class="cursor-pointer hover:underline">Blog</span>
      <UIcon name="i-heroicons-chevron-right" />
      <strong class="cursor-pointer hover:underline">Detail</strong>
    </div>
    <!-- Toc -->
    <CardToc />
    <!-- Header -->
    <div class="bg-gradient-to-b from-slate-50 p-4">
      <h2 class="font-bold text-3xl max-w-6xl">
        2023: A Review of the Year in Neuroscience
      </h2>
      <div class="flex items-center gap-4 mt-2 max-w-6xl">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <h4 class="text-sm font-medium flex items-center gap-4">
          GoodThingTakeTime
          <div class="w-1 h-1 border border-gray-500 rounded-full"></div>
          <p class="text-xs text-gray-500">3 days ago</p>
        </h4>
        <div class="flex items-center justify-end gap-2 p-4">
          <CardIconItem name="i-heroicons-heart" :counting="1" />
          <CardIconItem
            name="i-heroicons-chat-bubble-bottom-center"
            :counting="4"
          />
          <CardIconItem name="i-heroicons-bookmark" />
        </div>
      </div>
      <!-- Tags -->
      <div
        class="flex items-center gap-4 py-4 mt-4 border-t border-b border-slate-100 max-w-6xl"
      >
        <CardTagItem v-for="item in 4" :key="item" />
      </div>
    </div>
    <!-- Body -->
    <div class="p-4 max-w-6xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
      architecto sed quaerat, iusto placeat autem in consequuntur incidunt et,
      magnam nam laudantium, vero praesentium tempora ab quo facilis expedita.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
      architecto sed quaerat, iusto placeat autem in consequuntur incidunt et,
      magnam nam laudantium, vero praesentium tempora ab quo facilis expedita.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
      architecto sed quaerat, iusto placeat autem in consequuntur incidunt et,
      magnam nam laudantium, vero praesentium tempora ab quo facilis expedita.
    </div>
    <div class="p-4">
      <!-- Questions -->
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        Questions
        <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 mr-2" />
      </h3>
      <div class="grid grid-cols-12">
        <div class="col-span-5">
          <QuestionCreator />
          <div class="pt-8">
            <CardQuestionItem v-for="item in 3" :key="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <!-- Comments -->
      <h3 class="text font-semibold text-lg py-4 flex items-center">
        <UIcon name="i-heroicons-star" class="w-6 h-6 mr-2" />
        Comments
      </h3>
      <div class="grid grid-cols-12">
        <div class="col-span-5">
          <CardReviewItem v-for="item in 3" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const name = route.params.name;
</script>

<style scoped></style>
