import type { NitroFetchRequest, $Fetch,NitroFetchOptions } from 'nitropack'
   class FetchFactory<T> {
    private $fetch: $Fetch;
  
    constructor(fetcher: $Fetch) {
      this.$fetch = fetcher;
    }
    /**
     * The HTTP client is utilized to control the process of making API requests.
     * @param method the HTTP method (GET, POST, ...)
     * @param url the endpoint url
     * @param data the body data
     * @param fetchOptions fetch options
     * @returns 
     */
    async call(
      method:'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace',
      url: string,
      data?: object,
      fetchOptions?: NitroFetchOptions<'json'>
    ): Promise<T> {
      return this.$fetch<T>(
        url, 
        { 
          method, 
          body: data, 
          ...fetchOptions,
          retry:3
        }
      )
    }
  }

  
  export default FetchFactory;