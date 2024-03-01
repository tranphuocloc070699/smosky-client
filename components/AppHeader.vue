<template>
  <ClientOnly>
    <div
      class="border-b border-gray-100 py-4 fixed top-0 left-0 right-0 bg-white z-10"
    >
      <div class="max-w-7xl w-full mx-auto grid grid-cols-6 px-4 md:px-0">
        <div class="flex items-center gap-4 col-span-2 h-8">

          <UIcon v-show="props.showMenu" name="i-heroicons-bars-3-16-solid" class="w-8 h-8 cursor-pointer"  @click="isOpen = true"/>
          <NuxtLink class="font-medium text-xl cursor-pointer" to="/">Logo</NuxtLink>
        </div>
        <!-- <AppSearch class="col-span-2 h-8" />
        <AppUserControls class="col-span-2" /> -->
      </div>
    </div>
    <USlideover v-model="isOpen" side="left" class="w-[260px]">
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 ">
              Menu
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

            <AppSidebar :is-fixed="false"/>
      </UCard>
    </USlideover>

  </ClientOnly>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const props = defineProps({
  showMenu:{
    type:Boolean,
    default:false
  },
})

onMounted(() =>{
  console.log({showMenu:props.showMenu})
})
</script>
<style scoped></style>
