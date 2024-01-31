<template>
    <div>
      <UButton color="blue" label="Open" @click="toggleModal"
        >Download</UButton
      >
  
      <UModal v-model="isOpen" prevent-close >
       
      </UModal>
    </div>
  </template>
  
  <script setup lang="ts">
   const props = defineProps<{
    isOpen:boolean
  }>();

  const emit = defineEmits(["update:isOpen"]);

  const toggleModal = () =>{
    emit("update:isOpen",!props.isOpen);
  }

  </script>
  
  <style scoped></style>
  