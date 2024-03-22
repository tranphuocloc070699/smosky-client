import type { IPost } from "~/types/model";
import FetchFactory from "../factory";
import type { IResponse } from "~/types/response";
import type { IUpSavePost } from "~/types/request";
import Routes from "../routes";
class PostsModule extends FetchFactory {
    private RESOURCE = Routes.POST;
    private accessToken : string = ''

    setAccessToken(accessToken : string){
      this.accessToken = accessToken;
    }
    async fetchPostList() {
      return this.call<IResponse<IPost[]>>(
        {method:'GET',url:`${this.RESOURCE}`}
      )
    }

    async fetchPost(slug: string) {
      return this.call<IResponse<IPost>>(
        {method:'GET',url:`${this.RESOURCE}/${slug}`}
      )
    }
    
    async createPost(dto: IUpSavePost) {
      return this.call<IResponse<IPost>>(
        {method:'POST',url:`${this.RESOURCE}`,body:dto,fetchOptions:{
          headers:{
            ...(this.accessToken ? {
              'Authorization':`Bearer ${this.accessToken}`
            }  : {} )
          }
        }}
      )
    }

    async updatePost(id:number,dto: IUpSavePost) {
      return this.call<IResponse<IPost[]>>(
        {method:'PUT',url:`${this.RESOURCE}/${id}`,body:dto,fetchOptions:{
          headers:{
            ...(this.accessToken ? {
              'Authorization':`Bearer ${this.accessToken}`
            }  : {} )
          }
        }}
      )
    }

    async deletePost(id:number) {
      return this.call<IResponse<IPost[]>>(
        {method:'DELETE',url:`${this.RESOURCE}/${id}`,fetchOptions:{
          headers:{
            ...(this.accessToken ? {
              'Authorization':`Bearer ${this.accessToken}`
            }  : {} )
          }
        }}
      )
    }
  }
  
  export default PostsModule;