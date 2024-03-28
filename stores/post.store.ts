import { useHandleError } from "~/composables/useHandleError";
import type { IPost } from "~/types/model";
import type { IUpSavePost } from "~/types/request";
import {
  postInitValue
} from "~/utils/stores/initValue";
  
  export const usePostStore = defineStore("post", () => {
    const { $api } = useNuxtApp();
    const notify = useNotification(useToast);
  
  
  
    const handleError = useHandleError(useToast);
    const postList = ref<IPost[]>([]);
  
    const post = ref<IPost>(postInitValue);
    
  
    const fetchPostList = async () => {
      try {
        const { data, errors } = await $api.posts.fetchPostList();
        if (errors) {
          throw errors;
        }
        if (data) {
        console.log({data})
        postList.value = data
        }
      } catch (error) {
        handleError.execute({ error, name: "[stores] fetchPostList" });
      }
    };
    const fetchPost  = async (name: string) => {
      try {
        const { data, errors } = await $api.posts.fetchPost(name);
        if (errors) {
          throw errors;
        }
        if (data) {
          post.value = data;
          
          
        }
      } catch (error) {
        handleError.execute({ error, name: "[stores] fetchPost" });
      }
    };

    const createPost = async (dto: IUpSavePost,closeConfirmModal? : () => void) => {
      try {
        const { data, errors } = await $api.posts.createPost(dto);
        if (errors) {
          throw errors;
        }
        if (data) {
          notify.Success({ title: "Create post successully!" });
          if(closeConfirmModal){
            closeConfirmModal()
          }
        }
      } catch (error) {
        handleError.execute({ error, name: "[stores] createReview" });
      }
    };
  
    
  
    return { postList,post,fetchPostList,fetchPost,createPost};
  });
  