<template>
  <div class="flex items-center overflow-x-auto gap-10  pt-4 pb-12 flex-nowrap">
    <div
      v-for="item in data"
      :key="item.name"
      class="border border-emerald-600 shadow-sm rounded-md min-w-[440px]"
    >
      <h4 class="text-center py-2 font-semibold border-b border-slate-200  bg-emerald-700 text-white rounded-t-md">
        {{ item.name }}
      </h4>
      <div class="py-2">
        <div class="text-sm font-normal gap-4 p-2 flex items-center" v-for="basicItem in item.basic" :key="basicItem.name">
        <UTooltip :text="basicItem.help" :popper="{ placement: 'top' }" class="w-52">
          <label class="font-medium text-sm flex items-center cursor-pointer"
            >{{ basicItem.name }}
            <UIcon
              name="i-heroicons-question-mark-circle"
              class="text-lg ml-1 mb-[1px]"
            />
          </label>
        </UTooltip>

        <UInput
          variant="outline"
          class="flex-1"
          placeholder="Enter something..."
        />
      </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    name: "Spring Data Jpa",
    basic: [
      {
        name: "Postgres Hostname",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 1",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 2",
        help: "Something about tooltip",
      },
    ],
    advanced: [
      {
        name: "Postgres Hostname 3",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 4",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 5",
        help: "Something about tooltip",
      },
    ],
  },
  {
    name: "Spring Data Jpa 1",
    basic: [
      {
        name: "Postgres Hostname",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 1",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 2",
        help: "Something about tooltip",
      },
    ],
    advanced: [
      {
        name: "Postgres Hostname 3",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 4",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 5",
        help: "Something about tooltip",
      },
    ],
  },
  {
    name: "Spring Data Jpa 2",
    basic: [
      {
        name: "Postgres Hostname",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 1",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 2",
        help: "Something about tooltip",
      },
    ],
    advanced: [
      {
        name: "Postgres Hostname 3",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 4",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 5",
        help: "Something about tooltip",
      },
    ],
  },
  {
    name: "Spring Data Jpa 3",
    basic: [
      {
        name: "Postgres Hostname",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 1",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 2",
        help: "Something about tooltip",
      },
    ],
    advanced: [
      {
        name: "Postgres Hostname 3",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 4",
        help: "Something about tooltip",
      },
      {
        name: "Postgres Hostname 5",
        help: "Something about tooltip",
      },
    ],
  },
];
</script>

<style scoped></style>
