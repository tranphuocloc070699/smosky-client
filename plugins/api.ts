
import BlogsModule from '~/repository/modules/blogs';
import BoilerplatesModule from '~/repository/modules/boilerplates';
export interface IApiInstance {
  blogs: BlogsModule;
  boilerplates: BoilerplatesModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const NUXT_BASE_URL_PROXY_SERVER =
    config.public.NUXT_BASE_URL_PROXY_SERVER;

  const apiFetcher = $fetch.create({
    baseURL:NUXT_BASE_URL_PROXY_SERVER,
    onRequest({request,response}){
      console.log({request})
      console.log({response})
    }
  });

  const modules: IApiInstance = {
    blogs: new BlogsModule(apiFetcher),
    boilerplates:new BoilerplatesModule(apiFetcher)
  };

  return {
    provide: {
      api: modules
    }
  };
});