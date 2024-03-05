
import BlogsModule from '~/repository/modules/blogs';
import useBoilerplate from "../composables/useApi";
export interface IApiInstance {
  blogs: BlogsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const BASE_URL_BOILERPLATE_SERVER =
    config.public.NUXT_BASE_URL_BOILERPLATE_SERVER;

  const apiFetcher = $fetch.create({
    baseURL:BASE_URL_BOILERPLATE_SERVER,
    onRequest({request,response}){
      console.log({request})
      console.log({response})
    }
  });

  

  const modules: IApiInstance = {
    blogs: new BlogsModule(apiFetcher),
  };

  return {
    provide: {
      api: modules
    }
  };
});