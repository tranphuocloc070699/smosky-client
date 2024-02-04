import type { IBoilerplate, IBoilerplateItem } from "~/types/model";

export const useBoilerplateList = () => useState<IBoilerplate[]>("boilerplate-list",() => []);
export const useBoilerplateItem = () => useState<IBoilerplateItem | null>("boilerplate-item",() => null);