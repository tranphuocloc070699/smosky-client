<template>
  <div class="p-4 rounded border border-slate-300">
    <div class="flex items-center gap-4">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="font-semibold relative text-sm">
        Christian Stephan
        <div class="absolute left-0 top-5">
          <NuxtRating
            :read-only="true"
            :ratingValue="3"
            :rating-size="'16px'"
          />
        </div>
      </div>
      <p class="text-sm text-slate-500">2 day agos</p>
    </div>
    <p class="pt-4">Hello! I forgot to upload here my brief for Assignment 1 ( Assignment 1: Class project 01- Create your</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
