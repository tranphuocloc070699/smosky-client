import type { IBoilerplate, IPost } from "~/types/model";
import FetchFactory from "../factory";
import type {  NitroFetchOptions } from "nitropack";
import type { AsyncDataOptions } from '#app';
import type { IFetchAllBoilerplate, IResponse } from "~/types/response";
import type { IDownloadBoilerplateFromPreview } from "~/types/request";
class BoilerplatesModule extends FetchFactory {
    private RESOURCE = 'api/spring';
    async fetchBoilerplateList() {
      return useAsyncData(
        () => {
          return this.call<IResponse<IFetchAllBoilerplate>>(
            {method:'GET',url:`${this.RESOURCE}`}
          )
        },
      ) 
    }

    async fetchBoilerplate(name:string) {
      return useAsyncData(() => this.call<IResponse<IBoilerplate>>(
        {method:'GET',url:`${this.RESOURCE}/${name}`}
      ))
    }

    async downloadBoilerplate(dto : any) {

      return useAsyncData(() => this.call<IFetchAllBoilerplate>(
        {
          method:'POST',
          url:`${this.RESOURCE}`,
          body:dto,
          fetchOptions:{
            responseType:'blob'
          }
        }
      ))
    }

    async createBoilerplatePreview(dto : any) {

      return useAsyncData(() => this.call<IFetchAllBoilerplate>(
        {
          method:'POST',
          url:`${this.RESOURCE}/preview`,
          body:dto
        }
      ))
    }

    async downloadBoilerplateFromPreviewUrl(dto : IDownloadBoilerplateFromPreview) {

      return useAsyncData(() => this.call<IFetchAllBoilerplate>(
        {
          method:'POST',
          url:`${this.RESOURCE}/preview/download`,
          body:dto,
          fetchOptions:{
            responseType:'blob'
          }
        }
      ))
    }
  }
  
  export default BoilerplatesModule;