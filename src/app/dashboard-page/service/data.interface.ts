export interface IBannerCarosuelComponent {
   
    _id:string
    innerData:IinnerData
    background:Ibackground
    image:Iimage[]
    routeLink:string
    carouselDetails:IcarouselInfo[]
    createdAt:string
    updatedAt:string
    Active: boolean
}


export interface IinnerData{
    header:string;
    text:string,
    buttonText:string
}
export interface Ibackground{
    url:string,
        alt:string,
}
export interface Iimage{
    url:string,
        alt:string
}
export interface IcarouselInfo{
    name:string,
    description:string
}

/* export class BannerDatas{
    public innerData : IinnerData[]
} */

export interface INoticeConfig {
    _id:string
    noticeTitle: string
    noticeDate: string
    noticeName: string
    updatedAt:string
    createdAt:string
    Active: boolean
    innerNoticeData: IInnerNoticeData[]
    dashboardInfo: IDashboardInfo[]
}
  
export interface IInnerNoticeData {
    img: string
    noticeInfoText: string
}

export interface IDashboardInfo {
    displayName: string,
}

// ========================================= Research =========================================================

export interface IResearchComponent{
    imageResearch:IResearchImage[],
    infoResearch:IinfoResearch[]
    createdAt:string
    updatedAt:string
    
}

export interface IResearchImage{
    url:string,
    alt:string,
    text:string
}

export interface IinfoResearch{
    name:string,
    description:string
    dataResearch:string
}

// ==============================================Placement==========================================================

export interface IPlacementComponent{
  placementData:IPlacementData[]
  createdAt:string
 updatedAt:string
}

export interface IPlacementData{
    name:string
    url:string
    alt:string
    post:string
    facultyName:string
  } 

  //auth
  export interface Iloginuser{
    email:string;
    password:string;
}
export interface Iregistration{
    _id:string
    name:string;
    designation:string;
    email:string;
    password:string;
    Active: boolean
}