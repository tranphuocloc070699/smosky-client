<template>
  <div class="border border-slate-200 rounded-md grid grid-cols-3">
    <!-- Table List -->
    <div class="border-r border-slate-200 col-span-1">
      <h4
        class="px-4 py-2 text-center font-semibold border-b border-slate-200 bg-slate-100"
      >
        Table
      </h4>
      <div class="p-4 flex items-center gap-6">
        <UInput placeholder="Enter table name" class="flex-1" />
        <UButton color="green">Create</UButton>
      </div>
      <div class="p-4 gap-4">
        <div
          v-for="item in entitiesData"
          :key="item.name"
          :class="[
            'py-2 text-center rounded-md mb-4 font-semibold flex items-center justify-between px-4 group',
            item.isActive ? 'bg-[#EAB974] text-white' : 'bg-[#EAD7BB]',
          ]"
        >
          <div></div>
          {{ item.name }}
          <UIcon
            name="i-heroicons-x-circle"
            class="w-5 h-5 text-white bg-red-600 cursor-pointer opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
    <!-- Current Table -->
    <div class="col-span-2">
      <h4
        class="px-4 py-2 flex items-center gap-2 font-semibold text-lg border-b border-slate-200 bg-slate-100"
      >
        User
        <UIcon
          name="i-heroicons-plus-circle-20-solid"
          class="w-6 h-6 text-emerald-700 cursor-pointer"
          @click="addRow()"
        />
      </h4>
      <UTable :columns="springEntitiesColumns" :rows="springEntitiesData">
        <!-- Header -->
        <template #required-header="{ column }">
          <div class="flex justify-center">
            {{ column.label }}
          </div>
        </template>
        <template #validation-header="{ column }">
          <div class="flex justify-center">
            {{ column.label }}
          </div>
        </template>
        <template #primary-header="{ column }">
          <div class="flex justify-center">
            {{ column.label }}
          </div>
        </template>
        <!-- Row -->
        <template #type-data="{ row }">
          <div class="relative py-2">
            <USelect
            :model-value="row.type"
              :options="originalTypes"
              option-attribute="type"
              @input="(e : any) => onTypeSelectChanging(e,row)"
            />
            <div
              v-show="checkIsRelation(row.type)"
              class="text-xs absolute top-[90%] left-[2%]"
            >
              Relation to
              <span
                class="underline ml-1 font-medium text-green-800 cursor-pointer"
                >Post</span
              >
            </div>
          </div>
        </template>
        <template #fieldName-data="{ row }">
          <UInput v-model="row.fieldName" />
        </template>
        <template #required-data="{ row }">
          <div class="flex justify-center">
            <UCheckbox v-model="row.required" name="required" class="mx-auto" />
          </div>
        </template>

        <template #validation-data="{ row }">
          <div class="flex justify-center">
            <div
              v-if="row.validation.length > 0"
              class="flex items-center justify-center w-5 h-5 p-3 rounded-full bg-green-100 text-green-700 font-semibold"
            >
              {{ row.validation.length }}
            </div>
            <div v-else class="flex items-center justify-center">
              <ModalAddSpringValidation />
            </div>
          </div>
        </template>
        <template #primary-data="{ row }">
          <div class="flex justify-center">
            <UCheckbox v-model="row.primary" name="primary" />
          </div>
        </template>

        <template #actions-data="{ row }">
          <div class="flex justify-center">
            <UIcon
              name="i-heroicons-x-circle"
              class="w-5 h-5 text-white bg-red-600 cursor-pointer"
              @Click="onDeleteRow"
            />
          </div>
        </template>
      </UTable>
    </div>
    <ModalCreateSpringRelation
      :table="entitiesOptions"
      :is-open="createSpringRelationModalOpen"
      @submit="onCreateRelationModalSubmit"
      @update:is-open="toggleCreateSpringRelationModalOpen"
    />
  </div>
</template>

<script setup lang="ts">
interface RowTemp {
  id:number;
  type: string;
  fieldName: string;
  required: boolean;
  validation: number[];
  primary: boolean;
}

interface CallbackTemp{
  value:string,
  row?:RowTemp
}

import { entitiesData, entitiesOptions } from "~/utils/data";

const relationType = ["OneToOne", "OneToMany", "ManyToOne", "ManyToMany"];
const createSpringRelationModalOpen = ref(false);
const waitForCreateSpringRelationModalCallbackValue = ref<CallbackTemp>({
  value:''
});

const onDeleteRow = () =>{
  const isAccept = window.confirm("Do you really want to delete this row?")
  if(!isAccept) return;
   alert('deleted')

}

const toggleCreateSpringRelationModalOpen = (value: boolean) => {

  if(value===false && waitForCreateSpringRelationModalCallbackValue.value.value.length>0){
   
    const temp = springEntitiesData.value.map(item  => {
    if(waitForCreateSpringRelationModalCallbackValue.value.row && item.id===waitForCreateSpringRelationModalCallbackValue.value.row.id){
      item.type=waitForCreateSpringRelationModalCallbackValue.value.row.type;
    }
    return item;
  })
  
    springEntitiesData.value = temp;
  }
  createSpringRelationModalOpen.value = value;
};




const onTypeSelectChanging = (e: any,row : RowTemp) => {
  
  
  if(checkIsRelation(e.target.value)){
    createSpringRelationModalOpen.value = true;
    waitForCreateSpringRelationModalCallbackValue.value ={
      value:e.target.value,
      row
    }
    return;
  }
  const temp = JSON.parse(JSON.stringify(springEntitiesData.value)).map((item : RowTemp)  => {
    if(item.id===row.id){
      item.type=e.target.value;
    }
    return item;
  })
  springEntitiesData.value = temp

};

const onCreateRelationModalSubmit = () =>{
  createSpringRelationModalOpen.value = false;
  springEntitiesData.value = springEntitiesData.value.map(item  => {
    if(waitForCreateSpringRelationModalCallbackValue.value.row && item.id===waitForCreateSpringRelationModalCallbackValue.value.row.id){
      item.type=waitForCreateSpringRelationModalCallbackValue.value.value;
    }
    return item;
  })
}
const checkIsRelation = (value: string) => {
  return relationType.includes(value) ? true : false;
};



const addRow = () => {
  springEntitiesData.value.push({
    id:springEntitiesData.value.length,
    type: "String",
    fieldName: "firstName",
    required: false,
    validation: [1, 2],
    primary: true,
  });
};

const springEntitiesColumns = [
  {
    key: "type",
    label: "Type",
  },
  {
    key: "fieldName",
    label: "Field name",
  },
  {
    key: "required",
    label: "Required",
  },
  {
    key: "validation",
    label: "Validation",
  },
  {
    key: "primary",
    label: "Primary",
  },
  {
    key: "actions",
    label: "",
  },
];

const springEntitiesData = ref<RowTemp[]>([
  {
    id:0,
    type: "String",
    fieldName: "id",
    required: true,
    validation: [],
    primary: true,
  },
]);

const originalTypes = [
  {
    name: "String",
    value: "String",
  },
  {
    name: "Integer",
    value: "Integer",
  },
  {
    name: "Boolean",
    value: "Boolean",
  },
  {
    name: "OneToMany",
    value: "OneToMany",
  },
  {
    name: "ManyToOne",
    value: "ManyToOne",
  },
  {
    name: "OneToOne",
    value: "OneToOne",
  },
  {
    name: "ManyToMany",
    value: "ManyToMany",
  },
];
</script>

<style scoped></style>
