import useBoilerplate from "./api/useBoilerplate";
import useTest from "./api/useTest";

export default function () {

    const boilerplateApi = useBoilerplate();
    const testApi = useTest();
    return {
      boilerplate:{...boilerplateApi},
      test:{...testApi}
    };
  }