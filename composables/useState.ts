import type {
  IBoilerplate,
  IBoilerplateItem,
  ISpringDependencyItem,
} from "~/types/model";
import type { ICreateBoilerplate } from "~/types/request";

export const useBoilerplateList = () =>
  useState<IBoilerplate[]>("boilerplate-list", () => []);
export const useBoilerplateItem = () =>
  useState<IBoilerplateItem | null>("boilerplate-item", () => null);
export const useSpringDependenciesSelected = () =>
  useState<ISpringDependencyItem[]>(
    "boilerplate-spring-dependencies",
    () => []
  );
export const useCreateBoilerplateData = () =>
  useState<ICreateBoilerplate>(
    "create-boilerplate-data",
    () => ({
        type:'maven-project',
        bootVersion:'3.2.2',
        metadata:{
            groupId:'com.example',
            artifactId:'demo',
            name:'demo',
            description:'Spring boot project description',
            packaging:'jar',
            jvmVersion:17
        },
        dependencies:[],
        entities:[]
    })
  );
