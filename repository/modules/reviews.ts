import type { IPost } from "~/types/model";
import FetchFactory from "../factory";
import type { IResponse } from "~/types/response";
import type { IUpSavePost } from "~/types/request";
import type { ICreateReview } from "~/types/request";
import type { ICreateReviewResponse } from "~/types/response";
import Routes from "../routes";
class ReviewsModule extends FetchFactory {
    private RESOURCE = Routes.REVIEW;
    
    async createReview(dto : ICreateReview) {
      return useAsyncData(
        () => {
          return this.call<IResponse<ICreateReviewResponse>>(
            {method:'POST',url:`${this.RESOURCE}`,body:dto}
          )
        },
      ) 
    }

    async fetchPost(slug: string) {
      return useAsyncData(
        () => {
          return this.call<IResponse<IPost>>(
            {method:'GET',url:`${this.RESOURCE}/${slug}`}
          )
        },
      ) 
    }
    
    async createPost(dto: IUpSavePost) {
      return useAsyncData(
        () => {
          return this.call<IResponse<IPost>>(
            {method:'POST',url:`${this.RESOURCE}`,body:dto}
          )
        },
      ) 
    }

    async updatePost(id:number,dto: IUpSavePost) {
      return useAsyncData(
        () => {
          return this.call<IResponse<IPost[]>>(
            {method:'PUT',url:`${this.RESOURCE}/${id}`,body:dto}
          )
        },
      ) 
    }

    async deletePost(id:number) {
      return useAsyncData(
        () => {
          return this.call<IResponse<IPost[]>>(
            {method:'DELETE',url:`${this.RESOURCE}/${id}`}
          )
        },
      ) 
    }
  }
  
  export default ReviewsModule;