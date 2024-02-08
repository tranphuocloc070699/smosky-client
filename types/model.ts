export interface ITagItem {
  title: string;
  color: string;
  link: string;
  background: string;
  textColor: string;
}

export interface IBoilerplate{
  id: number;
  name:string;
  thumbnail:string;
  description:string;
  totalReview:number;
  starAvg:number;
}

export interface IReview{
  id:number;
  name:string;
  email:string;
  content:string;
  star:number;
}

export interface IBoilerplateItem{
  id: number;
  name:string;
  thumbnail:string;
  previewLink:string;
  description:string;
  projectStructure:IProjectStructure;
  totalReview:number;
  starAvg:number;
  oneStar:number;
  twoStar:number;
  threeStar:number;
  fourStar:number;
  fiveStar:number;
  reviews:IReview[];
  dependencies:ISpringDependencyGroup[];
  dependenciesSelected:String[];
  features:String[]
}

export interface IProjectStructure{
  id:string;
  name : string;
  location : string;
  type: 'directory' | 'file';
  content: string | null;
  nodeList: IProjectStructure[];
  isExpanded:boolean;
  isSelected:boolean;
}

export interface ISpringDependencyGroup{
  id:number;
  name:string;
  languageType:'SPRING',
  dependencies:ISpringDependencyItem[]
}

export interface ISpringDependencyItem{
  id:string;
  name:string;
  description:string;
  notice:string | null;
  compatibilityRanges:string[],
  links:ISpringDependencyLink[],
  properties:ISpringDependencyProperty[],
  required?:boolean,

}

export interface ISpringDependencyLink{
  id:number;
  title:string;
  name:string;
  url:string;
}

export interface ISpringDependencyProperty{
  id:number;
  title:string;
  toolTip:string;
  value:string;
  isDisable:boolean;
  options:ISpringDependencyPropertyOption[];
}

export interface ISpringDependencyPropertyOption{
  id:number;
  label:string;
  value:string;
}


