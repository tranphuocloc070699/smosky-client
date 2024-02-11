export interface ITagItem {
  title: string;
  color: string;
  link: string;
  background: string;
  textColor: string;
}
export interface IReview{
  id:number;
  name:string;
  email:string;
  content:string;
  star:number;
  createdAt:Date;
  updatedAt:Date;
}

export interface IBoilerplate{
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
  features:String[];
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

export interface ITag{
  id:number;
  name:string;
}

export interface ICreateBlogRequest {
  title: string;
  slug: string;
  content: string;
  pre_content:string;
  toc: ITocItem[];
  thumbnail: File | null;
}

export interface ITocItem {
  link: string;
  title: string;
  type: string;
}

export interface IPost{
  id:number;
  thumbnail:string;
  title:string;
  slug:string;
  preContent:string;
  content:String;
  createdAt:Date;
  updatedAt:Date;
  toc:IPostToc[]
  
}

/* 
public class Toc {
   private Integer id;

  @Column(nullable = false)
  private String thumbnail;

  @Column(nullable = false)
  private String title;

  @Column(nullable = false)
  private String slug;

  @Column(nullable = false)
  private String content;

  @Column(name="pre_content")
  private String preContent;

  @OneToMany(mappedBy = "post")
  private List<Toc> tocs;

  @Column(name="created_at")
  private Date createdAt;

  @Column(name="updated_at")
  private Date updatedAt;
}

*/

export interface IPostToc{
  id:number;
  title:string;
  link:string;
  type:string;
}


