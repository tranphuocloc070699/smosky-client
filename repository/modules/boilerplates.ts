import type { IBoilerplate, IPost } from "~/types/model";
import FetchFactory from "../factory";
import type {  NitroFetchOptions } from "nitropack";
import type { AsyncDataOptions } from '#app';
import type { IFetchAllBoilerplate, IResponse } from "~/types/response";
class BlogsModule extends FetchFactory<IResponse<IBoilerplate | IFetchAllBoilerplate>> {
    private RESOURCE = '/blogs';
  
    /**
     * Return the products as array 
     * @param asyncDataOptions options for `useAsyncData`
     * @returns 
     */
    async fetchBoilerplates(
      asyncDataOptions?: AsyncDataOptions<IResponse<IBoilerplate | IFetchAllBoilerplate>>
    ) {
  
      return useAsyncData(
        () => {
          const fetchOptions: NitroFetchOptions<'json'> = {
            headers: {
              'Accept-Language': 'en-US'
            }
          };
          return this.call(
            'GET',
            `${this.RESOURCE}`,
            undefined,
            fetchOptions
          )
        },
        asyncDataOptions
      ) 
    }

    async fetchBoilerplateDetail(
      slug:string,
      asyncDataOptions?: AsyncDataOptions<IResponse<IBoilerplate | IFetchAllBoilerplate>>
    ) {
  
      return useAsyncData(
        () => {
          const fetchOptions: NitroFetchOptions<'json'> = {
            headers: {
              'Accept-Language': 'en-US'
            }
          };
          return this.call(
            'GET',
            `${this.RESOURCE}`,
            undefined,
            fetchOptions
          )
        },
        asyncDataOptions
      ) 
    }
  }
  
  export default BlogsModule;