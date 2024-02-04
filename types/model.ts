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
  description:string;
  totalReview:number;
  starAvg:number;
  oneStar:number;
  twoStar:number;
  threeStar:number;
  fourStar:number;
  fiveStar:number;
  reviews:IReview[]
}


