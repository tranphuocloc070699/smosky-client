
import PostsModule from '~/repository/modules/posts';
import BoilerplatesModule from '~/repository/modules/boilerplates';
import ReviewsModule from '~/repository/modules/reviews';
export interface IApiInstance {
  posts: PostsModule;
  boilerplates: BoilerplatesModule;
  reviews:ReviewsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const NUXT_BASE_URL_PROXY_SERVER =
    config.public.NUXT_BASE_URL_PROXY_SERVER;

  const apiFetcher = $fetch.create({
    baseURL:NUXT_BASE_URL_PROXY_SERVER,
    onRequest({request,response}){
   
    }
  });

  const modules: IApiInstance = {
    posts: new PostsModule(apiFetcher),
    boilerplates:new BoilerplatesModule(apiFetcher),
    reviews:new ReviewsModule(apiFetcher)
  };

  return {
    provide: {
      api: modules
    }
  };
});