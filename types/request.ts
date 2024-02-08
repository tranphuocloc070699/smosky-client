export interface ICreateBoilerplate{
        type:string,
        bootVersion:string,
        metadata:ICreateBoilerplateSpringMetadata
        dependencies:ICreateBoilerplateDependency[],
        entities:ICreateBoilerplateEntity[]
    
}

export interface ICreateBoilerplateSpringMetadata{
    groupId:string,
    artifactId:string,
    name:string,
    description:string,
    packaging:'jar' | 'war'
    jvmVersion:number
}
export interface ICreateBoilerplateDependency{
    id:string,
    properties:ICreateBoilerplateDependencyProperty[]
}

export interface ICreateBoilerplateDependencyProperty{
    id:string,
    value:string
}

export interface ICreateBoilerplateEntity{
    name:string
    templates:ICreateBoilerplateEntityTemplate[]
}
export interface ICreateBoilerplateEntityTemplate{
    id?:number;
    name:string;
    type:string;
    primary:boolean;
    disable:boolean;
    required:boolean;
    validation:number[];
    alreadyHasPrimary:boolean;
    mappedBy:string | null;
    referencedColumnName:string | null;
    error:{
        invalid:boolean;
        message:string;
    }
}

export interface ICreateReview{
    boilerplateId:number;
    name:string;
    email:string;
    content:string;
    star:number;
}
