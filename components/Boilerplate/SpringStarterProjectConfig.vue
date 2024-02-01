<template>
     <!-- Project - Project item -->
     <div class="p-4 flex-col gap-2 pb-0">
        <p class="font-semibold">Project</p>
        <div class="grid grid-cols-3">
          <URadio
            v-for="option of projectOptions"
            :key="option.value"
            v-model="projectSelected"
            v-bind="option"
          />
        </div>
      </div>
      <!-- Project - Language -->
      <div class="p-4 flex-col gap-2 pb-0">
        <p class="font-semibold">Language</p>
        <div class="grid grid-cols-3">
          <URadio
            v-for="option of languageOptions"
            :key="option.value"
            v-model="languageSelected"
            v-bind="option"
          />
        </div>
      </div>
      <!-- Project - Spring Boot Version -->
      <div class="p-4 flex-col gap-2 pb-0">
        <p class="font-semibold">Spring Boot version</p>
        <div class="grid grid-cols-3">
          <URadio
            v-for="option of springBootVersionOptions"
            :key="option.value"
            v-model="springBootVersionSelected"
            v-bind="option"
          />
        </div>
      </div>
      <!-- Project Packaging -->
      <div class="p-4 flex-col gap-2 pb-0">
        <p class="font-semibold">Packaging</p>
        <div class="grid grid-cols-3">
          <URadio
            v-for="option of packagingOptions"
            :key="option.value"
            v-model="packagingSelected"
            v-bind="option"
          />
        </div>
      </div>
      <!-- Project Java Version -->
      <div class="p-4 flex-col gap-2">
        <p class="font-semibold">Java version</p>
        <div class="grid grid-cols-3">
          <URadio
            v-for="option of javaVersionOptions"
            :key="option.value"
            v-model="javaVersionSelected"
            v-bind="option"
          />
        </div>
      </div>
</template>

<script setup lang="ts">
import {projectOptions,languageOptions,springBootVersionOptions,packagingOptions,javaVersionOptions} from '~/utils/data'

const projectSelected = ref("maven");
const languageSelected = ref("java");
const springBootVersionSelected = ref("322");
const packagingSelected = ref("jar");
const javaVersionSelected = ref("17");
</script>

<style scoped>

</style>