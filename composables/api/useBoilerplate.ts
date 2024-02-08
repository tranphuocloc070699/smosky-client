import type { IBoilerplateItem } from "~/types/model";


export default function () {

    return {
      fetchAll(){
        return useFetch(`http://localhost:8080/spring`,{
          key:'boilerplate-list',
          method:'get',
        });
      },
      fetchDetail(name : string){
        return useFetch<IBoilerplateItem>(`http://localhost:8080/spring/${name}`,{
          key:"boilerplate-detail",
          method:'get',
        });
      },
      createBoilerplate(dto : any){
        return useFetch<Blob>(`http://localhost:8080/spring`,{
          key:"create-boilerplate",
          method:'post',
          body:dto,
          responseType:'blob',
          immediate:false
        });
      }

    };
  }