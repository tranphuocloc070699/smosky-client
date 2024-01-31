<template>
  <NuxtLink
    to="/blogs/Spring Boot Folder Structure (Best Practices)"
    class="border border-gray-200 rounded-md overflow-hidden cursor-pointer"
  >
    <img
      src="@/assets/images/bg-placeholder.png"
      width="auto"
      height="auto"
      alt="Image Thumbnail"
      class="h-48 w-full object-cover"
    />
    <div class="px-4 pt-4">
      <h3 class="text-base font-medium flex-grow">
        Spring Boot Folder Structure (Best Practices)
      </h3>
    </div>
    <div class="px-4 pt-4">
      <h4 class="text-gray-500 text-sm line-clamp-3">
        What is Spring Boot — If you don’t know what spring boot is, I’m happy
        to share my previous article which is related to spring boot setup.
        https://medium.com/@malshani-wijekoon/setup-spring-boot-5-x-x-application-using-java-11-0-bb1ebc836996
      </h4>
    </div>
    <div class="px-4 text-xs text-gray-400 font-normal py-2">
      By
      <span
        class="text-sky-800 pl-1 underline cursor-pointer opacity-80 hover:opacity-100"
      >
        GoodThingTakeTime</span
      >
    </div>
    <div class="flex items-center justify-end gap-2 p-4">
      <CardIconItem name="i-heroicons-heart" :counting="1" />
      <CardIconItem
        name="i-heroicons-chat-bubble-bottom-center"
        :counting="4"
      />
      <CardIconItem name="i-heroicons-bookmark" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts"></script>

<style scoped></style>