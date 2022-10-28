export interface INavbarData {
  id: string;
  nav: string;
  link: string;
  child: IDropdowns[]
}


export interface IleftimageRightTxt {
  url: string;
  alt: string;
}

export interface IDropdowns{
    dropdown:string,
    url:string
}
export interface IleftimageRightTxt{
    url: string;
    alt: string;
  }


export interface IPictureComponentImage {
  url: string;
  alt: string;
  header: string;
  text: string;
  style: {}
}

export interface IBannerCarosuelComponent {
  innerData: {
    header: string;
    text: string;
    buttonText: string;
  },
  background: {
    url: string,
    alt: string
  },
  image: {
    url: string,
    alt: string
  },
  routeLink: string;
}





export interface ITestimonialCardData {
  comment: string;
  name: string;
  designation: string;
  companyName: string;
  profileUrl: string;
}

export interface ITestimonialSectionData {
  title: string;
  description: string;
  cardsData: ITestimonialCardData[]
}

export interface IFooterCmp {
  ContactCall: {
    Number: string;
  },
  ContactMail: {
    mail: string;
  },
  socialMedia: {
    url: string,
    alt: string,
    link: string,
  }[]
}