<template>
     <p class="font-semibold p-4">Project metadata</p>
      <!-- Group -->
      <div class="text-sm font-normal gap-4 p-4 pb-0">
        <UTooltip text="Tooltip example" :popper="{ placement: 'right' }">
          <label class="font-medium text-sm flex items-center cursor-pointer"
            >Group
            <UIcon
              name="i-heroicons-question-mark-circle"
              class="text-lg ml-1 mb-[1px]"
            />
          </label>
        </UTooltip>

        <UInput
          variant="outline"
          placeholder="Enter group..."
          v-model="createBoilerplateData.metadata.groupId"
          class="mt-1"
        />
      </div>
      <!-- Artifact -->
      <div class="text-sm font-normal gap-4 p-4 pb-0">
        <UTooltip text="Tooltip example" :popper="{ placement: 'right' }">
          <label class="font-medium text-sm flex items-center cursor-pointer"
            >Artifact
            <UIcon
              name="i-heroicons-question-mark-circle"
              class="text-lg ml-1 mb-[1px]"
            />
          </label>
        </UTooltip>

        <UInput
          variant="outline"
          placeholder="Enter artifact..."
          v-model="createBoilerplateData.metadata.artifactId"
          class="mt-1"
        />
      </div>
      <!-- Name -->
      <div class="text-sm font-normal gap-4 p-4 pb-0">
        <UTooltip text="Tooltip example" :popper="{ placement: 'right' }">
          <label class="font-medium text-sm flex items-center cursor-pointer"
            >Name
            <UIcon
              name="i-heroicons-question-mark-circle"
              class="text-lg ml-1 mb-[1px]"
            />
          </label>
        </UTooltip>

        <UInput
          variant="outline"
          placeholder="Enter name..."
          v-model="createBoilerplateData.metadata.name"
          class="mt-1"
        />
      </div>
      <!-- Description -->
      <div class="text-sm font-normal gap-4 p-4 pb-0">
        <UTooltip text="Tooltip example" :popper="{ placement: 'right' }">
          <label class="font-medium text-sm flex items-center cursor-pointer"
            >Description
            <UIcon
              name="i-heroicons-question-mark-circle"
              class="text-lg ml-1 mb-[1px]"
            />
          </label>
        </UTooltip>

        <UInput
          variant="outline"
          placeholder="Enter description..."
          v-model="createBoilerplateData.metadata.description"
          class="mt-1"
        />
      </div>
      <!-- Package name -->
      <div class="text-sm font-normal gap-4 p-4">
        <UTooltip text="Tooltip example" :popper="{ placement: 'right' }">
          <label class="font-medium text-sm flex items-center cursor-pointer"
            >Package name
            <UIcon
              name="i-heroicons-question-mark-circle"
              class="text-lg ml-1 mb-[1px]"
            />
          </label>
        </UTooltip>

        <UInput
          variant="outline"
          :disabled="true"
          placeholder="Enter group..."
          :model-value="packageNameInput"
          class="mt-1"
        />
      </div>
</template>

<script setup lang="ts">
import { useCreateBoilerplateData } from '~/composables/useState';

const createBoilerplateData = useCreateBoilerplateData();

const packageNameInput = ref(`${createBoilerplateData.value.metadata.groupId}.${createBoilerplateData.value.metadata.artifactId}`)

watch(createBoilerplateData,(newValue) =>{
    packageNameInput.value=`${newValue.metadata.groupId}.${newValue.metadata.artifactId}`;
},{
  deep:true
})


</script>

<style scoped>

</style>