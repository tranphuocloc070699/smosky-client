import type { IBoilerplate, IPost } from "~/types/model"
import type { IBoilerplatePreviewResponse, IFetchAllBoilerplate } from "~/types/response"

export const fetchAllBoilerplateInit : IFetchAllBoilerplate = {
    boilerplates:[],
    tags:[]
}

export const boilerplateInit : IBoilerplate =  {
    id:-1,
    name:'',
  thumbnail:'',
  previewLink:'',
  description:'',
  projectStructure:{
    id:'',
    name:'',
    location:'',
    type:'directory',
    content:null,
    nodeList:[],
    isExpanded:false,
    isSelected:false,
  },
  totalReview:-1,
  starAvg:-1,
  oneStar:-1,
  twoStar:-1,
  threeStar:-1,
  fourStar:-1,
  fiveStar:-1,
  reviews:[],
  dependencies:[],
  dependenciesSelected:[],
  features:[],
}


export const boilerplateReviewReponseInit : IBoilerplatePreviewResponse = {
  downloadUrl:'',
  projectStructure:{
    id:'',
    name:'',
    location:'',
    type:'directory',
    content:null,
    nodeList:[],
    isExpanded:false,
    isSelected:false,
  }
}


export const postInitValue : IPost ={
    id: -1,
    thumbnail: "",
    title: "",
    slug: "",
    preContent: "",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    tocs: [],
}
