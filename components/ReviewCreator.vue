<template>
  <div class="border border-slate-500 rounded overflow-hidden">
    <div class="px-4 py-2 bg-slate-50">Leaves a review</div>
    <div class="px-4 py-2 border-t border-slate-500 flex items-start">
      <UTextarea
        padded
        autoresize
        placeholder="Ask something..."
        variant="none"
        class="w-full"
        model-value=""
      />
      <UButton color="white" variant="solid">Send Review</UButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
