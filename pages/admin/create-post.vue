<template>
  <!-- Navigation -->
  <div
    class="bg-slate-100 flex items-center gap-2 py-2 px-4 text-sm font-normal"
  >
    <span class="cursor-pointer hover:underline">Admin</span>
    <UIcon name="i-heroicons-chevron-right" />
    <strong class="cursor-pointer hover:underline">Create Post</strong>
  </div>
  <div class="grid grid-cols-12 p-8 bg-gradient-to-b from-slate-100">
    <div class="col-span-3"></div>
    <div class="col-span-6">
      <h2 class="text-2xl font-medium text-center">Create Post</h2>
      <div class="py-4">
        <label for="title" class="text-sm font-medium">Title</label>
        <UInput type="text" id="title" />
      </div>
      <div class="py-4">
        <label for="title" class="text-sm font-medium">Tag</label>
        <UButton class="ml-4" color="white" label="Open" @click="isOpen = true" />
        <UModal v-model="isOpen">
            <UCommandPalette
          v-model="selected"
          multiple
          nullable
          :autoselect="false"
          :groups="[{ key: 'tag', commands: tag }]"
          :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
        />
        </UModal>
       
      </div>
      <div class="py-4">
        <label for="title" class="text-sm font-medium">Content</label>
        <UTextarea type="text" id="title" />
      </div>
      <div class="py-8 text-end">
        <UButton class="ml-4" color="emerald" label="Create New Post" @click="handleSubmit" />
      </div>
    </div>
    <div class="col-span-3"></div>
  </div>
</template>

<script setup lang="ts">
const tag = [
  { id: 1, label: "Frontend" },
  { id: 2, label: "Backend" },
  { id: 3, label: "Devops" },
  { id: 4, label: "Hacking" },
];
const selected = ref([tag[3]])
const isOpen = ref(false)

const handleSubmit = () =>{
    console.log({selected:selected.value})
}
</script>

<style scoped></style>
