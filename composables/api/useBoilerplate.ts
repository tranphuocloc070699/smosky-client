export default function () {

    return {
      fetchAll(){
        return useFetch(`http://localhost:8080/spring`,{
          key:'boilerplate-list',
          method:'get',
        });
      },
      fetchDetail(name : string){
        return useFetch(`http://localhost:8080/spring/${name}`,{
          key:'boilerplate-list',
          method:'get',
        });
      }

    };
  }