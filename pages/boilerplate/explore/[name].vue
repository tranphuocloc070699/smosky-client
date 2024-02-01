<template>
  <div>
    <AppNavigation :data="navigationData" />
    <BoilerplateInfo type="explore" />
    <AppTitle :data="{ title: 'Features', iconName: 'list-bullet' }">
      <div class="flex items-center gap-16">
        <UCheckbox
        v-for="item in featuresCheckBox"
        :key="item.label"
        :label="item.label"
        :help="item.help"
        :model-value="item.isChecked"
      />
      </div>
    </AppTitle>

    <AppTitle :data="{ title: 'Configuration', iconName: 'key' }">
      <UTabs :items="items">
        <template #item="{ item }">
          <div v-if="item.key === 'starter'" class="space-y-3">
            <BoilerplateSpringStarter />
          </div>
          <div v-if="item.key === 'enviroments'" class="space-y-3">
            <BoilerplateSpringEnviroments />
          </div>
          <div v-if="item.key === 'entities'" class="space-y-3">
            <BoilerplateSpringEntities />
          </div>
        </template>
      </UTabs>
    </AppTitle>
  </div>
</template>

<script setup lang="ts">
import type { INavigation } from "~/types/components";
definePageMeta({
  layout: "detail",
});

const navigationData: INavigation[] = [
  {
    title: "Home",
    link: "/",
    isActive: false,
  },
  {
    title: "Detail",
    link: "/boilerplate/name",
    isActive: false,
  },
  {
    title: "Explore",
    link: "/boilerplate/explore/name",
    isActive: true,
  },
];

const items = [
  {
    key: "starter",
    label: "1. Starter",
  },
  {
    key: "enviroments",
    label: "2. Enviroments",
  },
  {
    key: "entities",
    label: "3. Entities",
  },
];

const featuresCheckBox = [
  {
    label: "Test",
    help: "This is help",
    isChecked:true,
  },
  {
    label: "Docs",
    help: "Open api",
    isChecked:true
  },
];

const isCustom = ref(false);
</script>

<style scoped></style>
