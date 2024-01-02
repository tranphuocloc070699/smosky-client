<template>
  <div class="border border-slate-400 rounded-md overflow-hidden">
    <div class="px-4 py-2 bg-slate-50">Leaves a question</div>
    <div class="px-4 py-2 border-t border-slate-400 flex items-start">
      <UTextarea
        padded
        autoresize
        placeholder="Ask something..."
        variant="none"
        class="w-full"
        model-value=""
      />
      <UButton color="white" variant="solid">Send Question</UButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
