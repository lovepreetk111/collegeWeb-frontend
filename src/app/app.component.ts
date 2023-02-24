import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CollegeWebsite-New';
  onActivate(event: any) {
    window.scroll(0, 0)
  }
  currentPageIndex = 0;
  pages: any = [
    {

      pageName: 'Home',
      component: [
        {
          compId: 1,
          compName: "header",
          metadata: [
            {
              id: 1,
              implinksdata: [
                {
                  id: 1,
                  impLinks: "NAAC-IQAC",
                  routeLinks: '/naac'
                },
                {
                  id: 2,
                  impLinks: "ALUMINI",
                  routeLinks: "alumini"
                },

              ],
              logo: [
                {
                  logoUrl: "assets/images/ChetanaLogo.svg",
                  logoAlt: "",
                  link: '/'
                }
              ],
              navbar: [
                {
                  id: 1,
                  nav: 'About',
                  link: '/about',
                },
                {
                  id: 2,
                  nav: 'Course',
                  link: '/course',
                  child: [
                    {
                      dropdown: 'JUNIOR COLLEGE',
                      url: 'course/sub1',
                      subchild: [
                        {
                          subchild: 'ARTS',
                          routeLink: 'course/arts',
                        },
                        {
                          subchild: 'COMMERCE',
                          routeLink: 'course/commerce+',
                        },
                        {
                          subchild: 'MCVC',
                          routeLink: 'course/mcvc',
                        }
                      ]
                    },
                    {
                      dropdown: 'DEGREE COLLEGE',
                      url: 'something',
                      subchild: [
                        {
                          subchild: 'BA',
                          routeLink: 'course/BA',
                        },
                        {
                          subchild: 'BCOM',
                          routeLink: 'course/bcom',
                        },

                      ]
                    },
                    {
                      dropdown: 'SELF FINANCE COURSES',
                      url: 'something',
                      subchild: [
                        {
                          subchild: 'BMS',
                          routeLink: 'course/bms',
                        },
                        {
                          subchild: 'BAF',
                          routeLink: 'course/baf',
                        },
                        {
                          subchild: 'BAMMC',
                          routeLink: 'course/bammc',
                        },
                        {
                          subchild: 'BScIT',
                          routeLink: 'course/bscit',
                        }
                      ]
                    },
                    {
                      dropdown: 'POST GRADUATE PROGRAMME',
                      url: 'course/pg',
                      subchild: [
                        {
                          subchild: 'MCOM',
                          routeLink: 'course/mcom',
                        }
                      ]
                    },
                    {
                      dropdown: 'DOCTORAL PROGRAMME',
                      url: 'something',
                      subchild: [
                        {
                          subchild: 'PH.D. IN  COMMERCE',
                          routeLink: 'course/phd',
                        }
                      ]
                    },
                    {
                      dropdown: 'DISTANCE LEARNING',
                      url: 'ycmou',
                      subchild: [
                        {
                          subchild: 'Y.C.M.O.U.',
                          routeLink: 'http://ycmou.digitaluniversity.ac',
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3,
                  nav: 'Examination',
                  link: '/examination',
                  child: [
                    {
                      dropdown: "Junior College",
                      url: '/junior'
                    },
                    {
                      dropdown: 'Degree College',
                      url: '/degree'
                    },
                    {
                      dropdown: 'Self Financing Courses',
                      url: 'csfc'
                    },
                    {
                      dropdown: 'M.COM',
                      url: 'mcom'
                    },
                  ]
                },
                {
                  id: 4,
                  nav: 'Admision',
                  link: '/admission',
                },
                {
                  id: 5,
                  nav: 'Placement',
                  link: '/placement',
                  child: [
                    {
                      dropdown: "PLACEMENT AT CHETANA'S",
                      url: 'something'
                    },
                    {
                      dropdown: 'TRANNING PROGRAME',
                      url: 'something'
                    },
                    {
                      dropdown: 'PLACEMENT TRACKER',
                      url: 'something'
                    }
                  ]
                },
                {
                  id: 6,
                  nav: 'Research',
                  link: '/research',
                  child: [
                    {
                      dropdown: "ABOUT RESEARCH COLLEGE",
                      url: '/course/phd'
                    },
                    {
                      dropdown: "PUBLICATION",
                      url: 'something'
                    },
                    {
                      dropdown: "PROSPECTUS",
                      url: 'something'
                    },
                    {
                      dropdown: "CONFERENCE PROCEDINGS",
                      url: 'something'
                    },

                  ]
                },
                {
                  id: 8,
                  nav: "Student’s Corner",
                  link: 'student-corner',
                  child: [
                    {
                      dropdown: "Student's Support",
                      url: 'sc/support'
                    },
                    {
                      dropdown: "Events",
                      url: '/event'
                    },
                    {
                      dropdown: "Govt. Scholarship/Freeship",
                      url: '/gvt'
                    },
                    {
                      dropdown: "Anti-Ragging",
                      url: '/anti-ragging'
                    },
                    {
                      dropdown: "Workshop/Seminar",
                      url: '/workshop'
                    },
                    {
                      dropdown: "WDC",
                      url: 'sc/wdc'
                    },
                  ]
                },
                {
                  id: 8,
                  nav: 'Contact-Us',
                  link: '/contact',
                }
              ]
            }
          ]
        },
        {
          compId: 8,
          compName: 'footer',
          metadata: [
            {
              ContactCall: {
                Number: '9321992130',
              },
              ContactMail: {
                mail: 'chetanahscce@yahool.com'
              },
              socialMedia: [
                {
                  url: "../../assets/img/ig.png",
                  alt: 'college insta page',
                  link: 'https://www.instagram.com/chetanas_sfc/?hl=en'
                },
                {
                  url: '../../assets/img/yt.png',
                  alt: 'college youtube channel',
                  link: 'https://www.youtube.com/channel/UCr2658Nq363khQvTSIxntwQ'
                },
                {
                  url: '../../assets/img/fb.png',
                  alt: 'college facebook page',
                  link: 'https://www.facebook.com/people/Chetanas-Self-Financing-Courses/100064103347725/'
                },
              ]
            }
          ]
        },
      ]
    },
  ]
}