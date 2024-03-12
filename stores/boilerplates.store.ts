
import type { IFetchAllBoilerplate } from "~/types/response";
import type { IBoilerplate, IProjectStructure } from "~/types/model";
import { boilerplateInit, fetchAllBoilerplateInit } from "~/utils/stores/initValue";
import NotifyData from "~/utils/notify-data";
import { useHandleError } from "~/composables/useHandleError";


export const useBoilerplateStore = defineStore("boilerplate", () => {
    const {$api} = useNuxtApp()
    const notify = useNotification(useToast)
    const handleError = useHandleError(useToast);
  const boilerplateList = ref<IFetchAllBoilerplate>(fetchAllBoilerplateInit)

  const boilerplate = ref<IBoilerplate>(boilerplateInit)

  const previewBoilerplate = ref<IProjectStructure>()

  const fetchBoilerplateList = async () => {
    try {
        const {data,errors} = await $api.boilerplates.fetchBoilerplateList()
        if(errors){
            throw errors;
        }
        if(data){
            boilerplateList.value.boilerplates = data.boilerplates
            boilerplateList.value.tags = data.tags
        }
    } catch (error) {
        handleError.execute({error,name:'[stores] fetchBoilerplateList'});
    }
  };
  const fetchBoilerplate = async (name:string)  => {
    try {
        const {data,errors} = await $api.boilerplates.fetchBoilerplate(name)
        if(errors){
            throw errors;
        }
        if(data){
            boilerplate.value = data
        }
    } catch (error) {
        handleError.execute({error,name:'[stores] fetchBoilerplate'});
    }
  };

  const downloadBoilerplate = async (name:string) : Promise<void> => {
    try {
        const response = await $api.boilerplates.downloadBoilerplate(name)
        if(response){
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
        handleError.execute({error,name:'[stores] fetchBoilerplate'});
    }
  };

  const previewBoilerplate = async (dto:any) => {
    try {
        const {data,errors} = await $api.boilerplates.previewBoilerplate(dto)
        if(errors){
            throw errors;
        }
        if(data){
            boilerplate.value = data
        }
    } catch (error) {
        handleError.execute({error,name:'[stores] fetchBoilerplate'});
    }
  };

  const fetchBoilerplate = async (name:string) : Promise<void> => {
    try {
        const {data,errors} = await $api.boilerplates.fetchBoilerplate(name)
        if(errors){
            throw errors;
        }
        if(data){
            boilerplate.value = data
        }
    } catch (error) {
        handleError.execute({error,name:'[stores] fetchBoilerplate'});
    }
  };

  return { boilerplateList, boilerplate, fetchBoilerplateList };
});