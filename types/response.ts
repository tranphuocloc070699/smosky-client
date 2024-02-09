import type { IBoilerplate, IBoilerplateItem, IProjectStructure, ITag } from "./model";

/* export interface IBoilerplateDetailResponse{
    data: IBoilerplateItem;
    projectStructure:IProjectStructure;
} */


export interface IBoilerplatePreviewResponse {
    projectStructure:IProjectStructure
    downloadUrl:string;
}

export interface ICreateReviewResponse{
    id:number;
    name:string;
    email:string;
    content:string;
    star:number;
    createdAt:Date;
    updatedAt:Date;
    totalReview:number;
    starAvg:number;
    oneStar:number;
    twoStar:number;
    threeStar:number;
    fourStar:number;
    fiveStar:number;
}

export interface IFetchAllBoilerplate{
    boilerplates:IBoilerplate[];
    tags:ITag[]
}
