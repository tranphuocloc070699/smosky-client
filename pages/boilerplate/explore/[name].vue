<template>
  <ClientOnly>
    <div>
      <AppNavigation :data="navigationData" />
      <BoilerplateInfo type="explore" />
      <AppTitle
        :data="{ title: 'Mores', iconName: 'heroicons-chevron-double-up-16-solid' }"
      >
        <div class="flex items-center gap-16">
          <UTooltip
            v-for="item in featuresCheckBox"
            :key="item.label"
            text="Create at least one entity to enable this feature"
            :popper="{ placement: 'top' }"
          >
            <UCheckbox
              :label="item.label"
              :help="item.help"
              v-model="createBoilerplateData.crud"
              :disabled="createBoilerplateData.entities.length === 0"
            />
          </UTooltip>
        </div>
      </AppTitle>
      <AppTitle :data="{ title: 'Configuration', iconName: 'heroicons-wrench' }">
        <UTabs :items="items">
          <template #item="{ item }">
            <div v-if="item.key === 'starter'" class="space-y-3">
              <BoilerplateSpringStarter
                :data="boilerplateItemState?.dependencies"
              />
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

      <!-- Submit -->
      <div
        class="flex items-center gap-8 mt-5 max-w-7xl w-full mx-auto justify-end px-4 md:px-0"
      >
        <UButton
          class="px-4 py-2 min-w-32 flex items-center justify-center"
          color="white"
          @click="executeBoilerplatePreview"
          >Preview</UButton
        >
        <UButton
          class="px-4 py-2 min-w-32 flex items-center justify-center"
          @click="onSubmit"
          >Download</UButton
        >
      </div>
    </div>
    <div v-if="boilerplatePreviewResponseData?.projectStructure">
      <ModalShowBoilerplatePreview
        @on-btn-download-click="onBtnDownloadFromPreviewClick"
        :is-open="showPreviewBoilerplate"
        @update:is-open="toggleShowPreviewBoilerplate"
        :project-structure="boilerplatePreviewResponseData.projectStructure"
      />
    </div>
    <AppLoading v-show="loading" />
  </ClientOnly>
</template>

<script setup lang="ts">
import useApi from "~/composables/useApi";
import {
  useBoilerplateItem,
  useCreateBoilerplateData,
  useSpringDependenciesSelected,
} from "~/composables/useState";
import type { INavigation } from "~/types/components";
import type { IDownloadBoilerplateFromPreview } from "~/types/request";
const route = useRoute();
definePageMeta({
  layout: "detail",
});

const name = route.params.name;

const showPreviewBoilerplate = ref(false);
const loading = ref(false);
const executeBoilerplatePreview = async () => {
  const entitiesValidation = validationEntitiesBeforeSubmit();
  if (entitiesValidation.invalid) {
    alert(entitiesValidation.message);
    return;
  }

  const metadataValidation = validationMetadataBeforeSubmit();

  if (metadataValidation.invalid) {
    alert(metadataValidation.message);
    return;
  }

  const data = {
    type: createBoilerplateData.value.type,
    bootVersion: createBoilerplateData.value.bootVersion,
    metadata: {
      groupId: createBoilerplateData.value.metadata.groupId.value,
      artifactId: createBoilerplateData.value.metadata.artifactId.value,
      name: createBoilerplateData.value.metadata.name.value,
      description: createBoilerplateData.value.metadata.description,
      packaging: createBoilerplateData.value.metadata.packaging,
      jvmVersion: createBoilerplateData.value.metadata.jvmVersion,
    },
    dependencies: springDependenciesSelectedState.value.map((item) => ({
      id: item.id,
      properties: item.properties?.map((item) => ({
        id: item.id,
        value: item.value,
      })),
    })),
    crud: createBoilerplateData.value.crud,
    entities: createBoilerplateData.value.entities.map((item) => ({
      name: item.name,
      templates: item.templates.map((item) => ({
        name: item.name,
        type: item.type,
        primary: item.primary,
        mappedBy: item.mappedBy,
        referencedColumnName: item.referencedColumnName,
      })),
    })),
  };

  requestData.value = data;
  loading.value = true;
  await createBoilerplatePreviewExecute();
  loading.value = false;
  showPreviewBoilerplate.value = true;
};

const toggleShowPreviewBoilerplate = (value: boolean) => {
  showPreviewBoilerplate.value = value;
};

const boilerplateApi = useApi();
const boilerplateItemState = useBoilerplateItem();
const createBoilerplateData = useCreateBoilerplateData();
const springDependenciesSelectedState = useSpringDependenciesSelected();
const downloadUrl = ref<IDownloadBoilerplateFromPreview>({
  downloadUrl: "",
});
const requestData = ref({});

const onBtnDownloadFromPreviewClick = async () => {
  if (boilerplatePreviewResponseData.value?.downloadUrl) {
    downloadUrl.value.downloadUrl =
      boilerplatePreviewResponseData.value.downloadUrl;
    loading.value = true;
    await downloadBoilerplateFromUrlExecute();
    loading.value = false;
    console.log({ downloadUrl: downloadUrl.value.downloadUrl });
    const blob = new Blob(
      [boilerplateFromDownloadUrlResponseData.value as any],
      {
        type: "application/zip",
      }
    );
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${createBoilerplateData.value.metadata.name.value}.zip`;
    a.setAttribute("download", "file.zip");
    a.style.display = "none";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);

    toggleShowPreviewBoilerplate(false);
  }
};

boilerplateApi.boilerplate
  .fetchDetail(name as string)
  .then((data) => {
    if (!data.data.value) return;
    boilerplateItemState.value = data.data.value.data;
    /* Check have dependenciesSelected => add to list dependenciesSelected */

    const dependenciesSelected = data.data.value.data.dependenciesSelected;
    if (dependenciesSelected) {
      data.data.value.data.dependencies.forEach((dependencyGroup) => {
        dependencyGroup.dependencies.forEach((dependency) => {
          if (
            dependenciesSelected.findIndex((item) => item === dependency.id) !==
            -1
          ) {
            if (!isDependencyExistInArray(dependency.id)) {
              springDependenciesSelectedState.value.push({
                ...dependency,
                required: true,
              });
            }
          }
        });
      });
    }
  })
  .catch((error) => {
    console.error({ error });
  });

const {
  execute: createBoilerplateExecute,
  data: responseData,
  error,
} = boilerplateApi.boilerplate.createBoilerplate(requestData);

const {
  execute: createBoilerplatePreviewExecute,
  data: boilerplatePreviewResponseData,
} = boilerplateApi.boilerplate.createPreviewBoilerplate(requestData);

const {
  execute: downloadBoilerplateFromUrlExecute,
  data: boilerplateFromDownloadUrlResponseData,
} = boilerplateApi.boilerplate.downloadBoilerplateFromPreview(
  downloadUrl.value
);

const isDependencyExistInArray = (value: string) => {
  return (
    springDependenciesSelectedState.value.findIndex(
      (item) => item.id === value
    ) !== -1
  );
};

const validationMetadataBeforeSubmit = () => {
  let validation = {
    invalid: false,
    message: "",
  };
  if (createBoilerplateData.value.metadata.groupId.error.invalid) {
    validation = {
      invalid: true,
      message: "Group value invalid",
    };
  }
  if (createBoilerplateData.value.metadata.artifactId.error.invalid) {
    validation = {
      invalid: true,
      message: "artifact value invalid",
    };
  }
  if (createBoilerplateData.value.metadata.name.error.invalid) {
    validation = {
      invalid: true,
      message: "name value invalid",
    };
  }

  return validation;
};

const validationEntitiesBeforeSubmit = () => {
  let validation = {
    invalid: false,
    message: "",
  };
  createBoilerplateData.value.entities.forEach((entity) => {
    entity.templates.forEach((item) => {
      if (item.error.invalid || !item.name) {
        validation = {
          invalid: true,
          message: `Contain invalid field on table ${entity.name}`,
        };
      }
    });
  });
  return validation;
};

const onSubmit = async () => {
  const entitiesValidation = validationEntitiesBeforeSubmit();
  if (entitiesValidation.invalid) {
    alert(entitiesValidation.message);
    return;
  }

  const metadataValidation = validationMetadataBeforeSubmit();

  if (metadataValidation.invalid) {
    alert(metadataValidation.message);
    return;
  }
  console.log({
    springDependenciesSelectedState: springDependenciesSelectedState.value,
  });
  console.log({ createBoilerplateData: createBoilerplateData.value });
  const data = {
    type: createBoilerplateData.value.type,
    bootVersion: createBoilerplateData.value.bootVersion,
    metadata: {
      groupId: createBoilerplateData.value.metadata.groupId.value,
      artifactId: createBoilerplateData.value.metadata.artifactId.value,
      name: createBoilerplateData.value.metadata.name.value,
      description: createBoilerplateData.value.metadata.description,
      packaging: createBoilerplateData.value.metadata.packaging,
      jvmVersion: createBoilerplateData.value.metadata.jvmVersion,
    },
    crud: createBoilerplateData.value.crud,
    dependencies: springDependenciesSelectedState.value.map((item) => ({
      id: item.id,
      properties: item.properties?.map((item) => ({
        id: item.id,
        value: item.value,
      })),
    })),
    entities: createBoilerplateData.value.entities.map((item) => ({
      name: item.name,
      templates: item.templates.map((item) => ({
        name: item.name,
        type: item.type,
        primary: item.primary,
        mappedBy: item.mappedBy,
        referencedColumnName: item.referencedColumnName,
      })),
    })),
  };

  requestData.value = data;
  loading.value = true;
  await createBoilerplateExecute();
  loading.value = false;
  const blob = new Blob([responseData.value as any], {
    type: "application/zip",
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.metadata.name}.zip`;
  a.setAttribute("download", "file.zip");
  a.style.display = "none";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
};

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
    link: `/boilerplate/${name}`,
    isActive: false,
  },
  {
    title: "Explore",
    link: `/boilerplate/explore/${name}`,
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

const featuresCheckBox = ref([
  {
    label: "CRUD",
    help: "Create simple CRUD template (Beta version)",
    isChecked: true,
  },
]);
</script>

<style scoped></style>
