import type {
  IBoilerplatePreviewResponse,
  IFetchAllBoilerplate,
} from "~/types/response";
import type { IBoilerplate, IProjectStructure, ISpringDependencyGroup, ISpringDependencyItem } from "~/types/model";
import {
  boilerplateInit,
  fetchAllBoilerplateInit,
} from "~/utils/stores/initValue";
import NotifyData from "~/utils/notify-data";
import { useHandleError } from "~/composables/useHandleError";

export const useBoilerplateStore = defineStore("boilerplate", () => {
  const { $api } = useNuxtApp();
  const notify = useNotification(useToast);
  const handleError = useHandleError(useToast);
  const boilerplateList = ref<IFetchAllBoilerplate>(fetchAllBoilerplateInit);

  const boilerplate = ref<IBoilerplate>(boilerplateInit);
  const springDependenciesSelected = ref<ISpringDependencyItem[]>([])

  const boilerplateReviewResponse = ref<IBoilerplatePreviewResponse>();



  const onSpringDependenciesSelectedChange = (data: ISpringDependencyItem[]) =>{
    springDependenciesSelected.value = data;
  }

  const fetchBoilerplateList = async () => {
    try {
      const { data, errors } = await $api.boilerplates.fetchBoilerplateList();
      if (errors) {
        throw errors;
      }
      if (data) {
        boilerplateList.value.boilerplates = data.boilerplates;
        boilerplateList.value.tags = data.tags;
      }
    } catch (error) {
      handleError.execute({ error, name: "[stores] fetchBoilerplateList" });
    }
  };
  const fetchBoilerplate = async (name: string) => {
    try {
      const { data, errors } = await $api.boilerplates.fetchBoilerplate(name);
      if (errors) {
        throw errors;
      }
      if (data) {
        boilerplate.value = data;

        if (data.dependenciesSelected) {
          data.dependencies.forEach((dependencyGroup) => {
            dependencyGroup.dependencies.forEach((dependency) => {
              if (
                data.dependenciesSelected.findIndex((item) => item === dependency.id) !==
                -1
              ) {
                if (!isDependencyExistInArray(dependency.id)) {
                  springDependenciesSelected.value.push({
                    ...dependency,
                    required: true,
                  });
                }
              }
            });
          });
        }
      }
    } catch (error) {
      handleError.execute({ error, name: "[stores] fetchBoilerplate" });
    }
  };

  const isDependencyExistInArray = (value: string) => {
    return (
      springDependenciesSelected.value.findIndex(
        (item) => item.id === value
      ) !== -1
    );
  };

  const downloadBoilerplate = async (dto:any) => {
    try {
      const response = await $api.boilerplates.downloadBoilerplate(dto);
      if (response) {
        const blob = new Blob([response as any], {
          type: "application/zip",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `test.zip`;
        a.setAttribute("download", "file.zip");
        a.style.display = "none";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      handleError.execute({ error, name: "[stores] downloadBoilerplate" });
    }
  };

  const previewBoilerplate = async (dto: any) => {
    try {
      const { data, errors } = await $api.boilerplates.previewBoilerplate(dto);
      if (errors) {
        throw errors;
      }
      if (data) {
        console.log('have data',data)
        boilerplateReviewResponse.value = data;
      }
    } catch (error) {
      handleError.execute({ error, name: "[stores] previewBoilerplate" });
    }
  };

  const downloadBoilerplateFromPreviewUrl = async (dto: any) => {
    try {
      const response =
        await $api.boilerplates.downloadBoilerplateFromPreviewUrl(dto);
      if (response) {
        const blob = new Blob([response as any], {
          type: "application/zip",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `test.zip`;
        a.setAttribute("download", "file.zip");
        a.style.display = "none";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      handleError.execute({ error, name: "[stores] downloadBoilerplateFromPreviewUrl" });
    }
  };

  return { boilerplateList, boilerplate,boilerplateReviewResponse,springDependenciesSelected ,fetchBoilerplateList,fetchBoilerplate,downloadBoilerplate,downloadBoilerplateFromPreviewUrl,previewBoilerplate, onSpringDependenciesSelectedChange};
});
