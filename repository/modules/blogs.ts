import type { IPost } from "~/types/model";
import FetchFactory from "../factory";
import type { NitroFetchRequest, NitroFetchOptions } from "nitropack";
import type { AsyncDataOptions } from '#app';
import type { IResponse } from "~/types/response";
import type { IUpSavePost } from "~/types/request";
class BlogsModule extends FetchFactory<IResponse<IPost | IPost[]>> {
    private RESOURCE = '/blogs';
  
    /**
     * Return the products as array 
     * @param asyncDataOptions options for `useAsyncData`
     * @returns 
     */
    async fetchBlogs(
      asyncDataOptions?: AsyncDataOptions<IResponse<IPost | IPost[]>>
    ) {
  
      return useAsyncData(
        () => {
          const fetchOptions: NitroFetchOptions<'json'> = {
            headers: {
              'Content-type': 'en-US'
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

    async fetchBlogDetail(
      slug:string,
      asyncDataOptions?: AsyncDataOptions<IResponse<IPost | IPost[]>>
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
            `${this.RESOURCE}/${slug}`,
            undefined,
            fetchOptions
          )
        },
        asyncDataOptions
      ) 
    }

    async createBlog(
      dto : IUpSavePost,
      asyncDataOptions?: AsyncDataOptions<IResponse<IPost | IPost[]>>
    ) {
  
      return useAsyncData(
        () => {
          const fetchOptions: NitroFetchOptions<'json'> = {
            headers: {
              'Accept-Language': 'en-US'
            }
          };
          return this.call(
            'POST',
            `${this.RESOURCE}`,
            dto,
            fetchOptions
          )
        },
        asyncDataOptions
      ) 
    }
  }
  
  export default BlogsModule;