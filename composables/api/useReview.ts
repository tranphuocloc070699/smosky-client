import type { IBoilerplateItem } from "~/types/model";
import type { ICreateReview } from "~/types/request";


export default function () {
    return {
      createReview(dto : ICreateReview){
        return useFetch<Blob>(`http://localhost:8080/review`,{
          key:"create-review",
          method:'post',
          body:dto,
          immediate:false
        });
      }

    };
  }