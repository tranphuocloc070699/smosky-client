<template>
  <div class="relative h-[220px] w-[440px]">
    <img
      src="@/assets/images/images.jpeg"
      with="auto"
      height="auto"
      class="h-[220px] w-[440px] object-cover rounded-md"
    />
    <div
      class="absolute bg-gray-900 opacity-80 top-0 left-0 right-0 bottom-0 flex items-center flex-col justify-center rounded-md"
    >
    <UIcon name="i-heroicons-play-circle" class="w-12 h-12 bg-white text-white cursor-pointer" @click="showDemoOpen = true"/>
      <p class="text-white font-semibold text-2xl">Show demo</p>
    </div>
    <ModalShowVideo :is-open="showDemoOpen" @update:is-open="toggleShowDemo" />
  </div>
</template>

<script setup lang="ts">
const showDemoOpen = ref(false);

const toggleShowDemo = (value : boolean) =>{
    showDemoOpen.value = value
}

</script>
<style scoped></style>
