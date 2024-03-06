import type { NitroFetchRequest, $Fetch,NitroFetchOptions } from 'nitropack'


interface IHttpFactory{
  method:'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace',
  url: string,
  fetchOptions?:NitroFetchOptions<'json'>,
  body?: object,
}
   class HttpFactory {
    private $fetch: $Fetch;
  
    constructor(fetch: $Fetch) {
      this.$fetch = fetch;
    }
    /**
     * The HTTP client is utilized to control the process of making API requests.
     * @param method the HTTP method (GET, POST, ...)
     * @param url the endpoint url
     * @param data the body data
     * @param fetchOptions fetch options
     * @returns 
     */
    async call<T>({method,url,fetchOptions,body} : IHttpFactory) : Promise<T> {

  /*     const fetchOptions: NitroFetchOptions<'json'> = {
        headers: {
          'Accept-Language': 'en-US'
        }
      }; */
      return this.$fetch<T>(
        url, 
        { 
          method, 
          body, 
          ...fetchOptions,
          retry:3,
          
        }
      )
    }
  }

  
  export default HttpFactory;