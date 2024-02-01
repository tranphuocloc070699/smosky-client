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
          model-value="com.example"
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
          placeholder="Enter group..."
          model-value="demo"
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
          placeholder="Enter group..."
          model-value="demo"
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
          placeholder="Enter group..."
          model-value="Demo project for Spring boot"
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
          placeholder="Enter group..."
          model-value="com.example.demo"
          class="mt-1"
        />
      </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>