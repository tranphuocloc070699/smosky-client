<template>
  <div>
    <UButton class="py-2 px-4" @click="isOpen = true" color="emerald"
      >Add dependency</UButton
    >
    <UModal v-model="isOpen" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Dependency list
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <div class="flex flex-col gap-4">
          <UInput placeholder="Enter dependency name" />
          <UAlert
            icon="i-heroicons-command-line"
            color="blue"
            variant="solid"
            title="Tip!"
            description="You can add multiple dependency by press CTRL."
          />

          <div
            class="border border-slate-200 rounded-md overflow-y-scroll h-[400px]"
          >
            <div v-for="(item, index) in addSpringDependencyData" :key="index">
              <h3 :class="['font-semibold bg-slate-100 px-4 py-2',index>0 && 'border-t border-slate-200']">
                {{ item.name }}
              </h3>
              <div
                class="border-t p-4 border-slate-200 cursor-pointer hover:bg-emerald-600 hover:text-white group"
                v-for="childItem in item.children"
                :key="childItem.name"
              >
                <h4 class="font-medium flex items-center gap-2 ">
                  {{ childItem.name }}
                  <UIcon
                    name="i-heroicons-clipboard-document-check"
                    class="text-lg cursor-pointer hidden group-hover:block"
                  />
                </h4>
                <p class="text-sm">{{ childItem.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import {addSpringDependencyData} from "~/utils/data"
const isOpen = ref(false);
</script>

<style scoped></style>
