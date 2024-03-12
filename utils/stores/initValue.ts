import type { IBoilerplate } from "~/types/model"
import type { IFetchAllBoilerplate } from "~/types/response"

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
