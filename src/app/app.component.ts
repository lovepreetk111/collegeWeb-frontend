import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CollegeWebsite-New';
show: boolean = true;

currentRoute: string = '';

constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const currentRoute = this.router.routerState.snapshot.url.split('?')[0];
      this.currentRoute = currentRoute;
    }
    
  });  
}
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
                  routelinks: '/naac'
                },
                {
                  id: 2,
                  impLinks: "ALUMINI",
                  routelinks: 'pages/alumini'
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
                  link: 'pages/about/us',
                  child:[
                    {
                      dropdown:"Our Campus",
                      url:"pages/about/campus"
                    }
                  ]
                },
                {
                  id: 2,
                  nav: 'Course',
                  link: 'pages/course',
                  child: [
                    {
                      dropdown: 'JUNIOR COLLEGE',
                      url: 'pages/course/sub1',
                      subchild: [
                        {
                          subchild: 'ARTS',
                          routeLink: 'course/arts',
                        },
                        {
                          subchild: 'COMMERCE',
                          routeLink: 'pages/course/commerce',
                        },
                        {
                          subchild: 'MCVC',
                          routeLink: 'pages/course/mcvc',
                        }
                      ]
                    },
                    {
                      dropdown: 'DEGREE COLLEGE',
                      url: 'something',
                      subchild: [
                        {
                          subchild: 'BA',
                          routeLink: 'pages/course/BA',
                        },
                        {
                          subchild: 'BCOM',
                          routeLink: 'pages/course/bcom',
                        },

                      ]
                    },
                    {
                      dropdown: 'SELF FINANCE COURSES',
                      url: 'something',
                      subchild: [
                        {
                          subchild: 'BMS',
                          routeLink: 'pages/course/bms',
                        },
                        {
                          subchild: 'BAF',
                          routeLink: 'pages/course/baf',
                        },
                        {
                          subchild: 'BAMMC',
                          routeLink: 'pages/course/bammc',
                        },
                        {
                          subchild: 'BScIT',
                          routeLink: 'pages/course/bscit',
                        }
                      ]
                    },
                    {
                      dropdown: 'POST GRADUATE PROGRAMME',
                      url: 'pages/course/pg',
                      subchild: [
                        {
                          subchild: 'MCOM',
                          routeLink: 'pages/course/mcom',
                        }
                      ]
                    },
                    {
                      dropdown: 'DOCTORAL PROGRAMME',
                      url: 'something',
                      subchild: [
                        {
                          subchild: 'PH.D. IN  COMMERCE',
                          routeLink: 'pages/course/phd',
                        }
                      ]
                    },
                    {
                      dropdown: 'DISTANCE LEARNING',
                      url: 'ycmou',
                      subchild: [
                        {
                          subchild: 'Y.C.M.O.U.',
                          routeLink: 'https://www.ycmou.ac.in',
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3,
                  nav: 'Examination',
                  link: 'pages/examination',
                  child: [
                    {
                      dropdown: "Junior College",
                      url: 'pages/examination'
                    },
                    {
                      dropdown: 'Degree College',
                      url: 'pages/examination'
                    },
                    {
                      dropdown: 'Self Financing Courses',
                      url: 'pages/examination'
                    },
                    {
                      dropdown: 'M.COM',
                      url: 'pages/examination'
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
                  link: 'pages/placement',
                  child: [
                    {
                      dropdown: "Placement at Chetana's",
                      url: 'pages/placement'
                    },
                    {
                      dropdown: 'Tranning Programe',
                      url: 'pages/placement'
                    },
                    {
                      dropdown: 'Placement Tracker',
                      url: 'pages/placement'
                    }
                  ]
                },
                {
                  id: 6,
                  nav: 'Research',
                  link: 'pages/research',
                  child: [
                    {
                      dropdown: "About Research College",
                      url: 'pages/course/phd'
                    },
                    {
                      dropdown: "Publication",
                      url: 'pages/research'
                    },
                    {
                      dropdown: "Conference Procedings",
                      url: 'pages/research'
                    },

                  ]
                },
                {
                  id: 8,
                  nav: "Student’s Corner",
                  link: 'pages/student-corner',
                  child: [
                    {
                      dropdown: "Student's Support",
                      url: 'pages/sc/support'
                    },
                    {
                      dropdown: "Events",
                      url: 'pages/event'
                    },
                    {
                      dropdown: "Govt. Scholarship/Freeship",
                      url: 'pages/sc/gvt'
                    },
                    {
                      dropdown: "Anti-Ragging",
                      url: 'pages/sc/anti-ragging'
                    },
                    {
                      dropdown: "Workshop/Seminar",
                      url: 'pages/sc/workshop'
                    },
                    {
                      dropdown: "WDC",
                      url: 'pages/sc/wdc'
                    },
                  ]
                },
                {
                  id: 8,
                  nav: 'Contact-Us',
                  link: 'pages//contact',
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