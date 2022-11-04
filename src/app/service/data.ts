/* ================================ Header =================================== */
export interface InavbarConfig {
  id: string
  implinksdata: IImpLinks[]
  logo: InavLogo[]
  navbar: INavbarData[]
}
export interface InavLogo {
  logoUrl: string,
  logoAlt: string,
  link: string
}
export interface IImpLinks {
  id: string,
  impLinks: string,
  routeLinks: string;
}
export interface INavbarData {
  id: string;
  nav: string;
  link: string;
  child: IDropdowns[]
}
export interface IDropdowns {
  dropdown: string,
  url: string
}

/*============================= Notices component =======================*/
export interface Inotice {
  id: string
  noticeLink: string;
}

/* ===================================== Banner Carousel component ================ */
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

/* ============================================ AboutUsSection =============================*/
/* ====================== container 2 ============================ */
export interface IAboutSectionData {
  id: string,
  style: {
    backgroundColor: string
  }
  info: IBtnCmpData,
  imgText: IleftimageRightTxt
  topimgText: IPictureComponentImage[]
}
/* Button component 1 */
export interface IBtnCmpData {
  data: string,
}
/* Left Image Right Text1 Component */
export interface IleftimageRightTxt {
  url: string;
  alt: string;
  para1: string;
  para2: string
}
/* Top image btm text1 component */
export interface IPictureComponentImage {
  url: string;
  alt: string;
  header: string;
  text: string;
  description1: string,
  description2: string
}

/* ====================================== Accordian Section =============================*/
export interface IDropDown {
  data: Ileftimg1[]
  AccordianData: IAccordianData[]
}
/* Accordian Component */
export interface IAccordianData {
  Title: string;
  SubTitle1: string;
  SubTitle2: string;
  SubTitle3: string;
}
/* Left image1 component */
export interface Ileftimg1 {
  url: string;
  alt: string;
  Text: string
}

/* ===================================== Testimonial Section ============================ */
/* ================================ container 3 ======================== */
export interface ITestimonialSectionData {
  title: string;
  description: string;
  cardsData: ITestimonialCardData[]
}
/* profile Card Component */
export interface ITestimonialCardData {
  comment: string;
  name: string;
  designation: string;
  companyName: string;
  profileUrl: string;
}

/* =================================== Card Carousel ============================= */
export interface ICardCarosuel {
  id: string,
  slides: ICardCarosuelInfo[]
}
export interface ICardCarosuelInfo {
  slideNo: string,
  cards: ICardCarosuelData[]
}
export interface ICardCarosuelData {
  id: 1,
  img: {
    url: string,
    alt: string,
    routeLink: string
  },
  data: {
    cardHeading: string,
    description: string
  }
}

/* ==================================== Footer component ================================ */
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

/* ******************************************** CONTACT US PAGE ******************************************** */
/* ============================ form component1 =================================== */
