<template>
  <UModal  :model-value="isOpen" prevent-close  @update:model-value="toggleModal">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Choose table create relationship
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="toggleModal"
          />
        </div>
      </template>

      <URadioGroup
        v-model="selected" 
        :options="table"
      />
      <UAlert
        icon="i-heroicons-command-line"
        color="blue"
        variant="solid"
        title="Tip!"
        description="Create new table if you don't want to choose those above table."
        class="my-4"
      />
      <div class="flex items-center gap-6">
        <UInput placeholder="Enter table name" class="flex-1" />
        <UButton color="green">Create</UButton>
      </div>
      <div class="mt-8 text-center">
        <UButton @click="onSubmit" color="blue" class="mt-4">Make Relationship</UButton>
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">

const selected = ref("user");

const props = defineProps<{
  isOpen: boolean;
  table:Array<{value:string,label:string}>
}>();
const emit = defineEmits(["update:isOpen","submit"]);
const toggleModal = () => {

  emit("update:isOpen", !props.isOpen);
};

const onSubmit= () =>{
    emit('submit')
}

</script>

<style scoped></style>
