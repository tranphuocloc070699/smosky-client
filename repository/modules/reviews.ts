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
      return  this.call<IResponse<ICreateReviewResponse>>(
        {method:'POST',url:`${this.RESOURCE}`,body:dto}
      )
    }

  }
  
  export default ReviewsModule;