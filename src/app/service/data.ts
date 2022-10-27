
export interface IleftimageRightTxt{
    url: string;
    alt: string;
  }

  
export interface IPictureComponentImage{
    url: string;
    alt: string;
    header:string;
    text:string;
    style:{}
  }
  
  export interface IBannerCarosuelComponent{
    innerData: {
          header: string;
          text: string;
          buttonText: string;
      },
      background:{
        url:string,
        alt:string
      },
      image:{
        url:string,
        alt:string
      },
      routeLink: string;
  }
  
  

  export interface IFooterCmp{
    socialMedia:{
        url:string,
        alt:string,
        link:string,
    },
    contact:{
        
    }
  }
  
  export interface ITestimonialCardData {
    comment: string;
    name: string;
    designation: string;
    companyName: string;
    profileUrl: string;
  }

  export interface ITestimonialSectionData{
    title:string;
    description: string;
    cardsData: ITestimonialCardData[]
  }

  export interface IFooterCmp{
    call:{
      numbber:string
    }
  }