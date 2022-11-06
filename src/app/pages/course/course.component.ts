import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Courses',
      component: [
        {
          compId:1,
          compName:'Image Component 1',
          metadata:[
              {
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"Courses"
              },
            
          ]
        },
        {
          compId: 2,
          compName: 'courses section',
          metadata: [
            {
              
              info: {
                data: "JUNIOR COLLEGE",
              },
              info2: {
                data: "DEGREE COLLEGE",
              },
              info3: {
                data: "SELF FINANCING COURSES",
              },
              value:[
                {
                  id:1,
                  imgUrl:"../../../assets/images/ARTS.svg",
                  imgAlt:"Arts Icon",
                  header:"Arts",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                },
                {
                  id:2,
                  imgUrl:"../../../assets/images/COM.svg",
                  imgAlt:"commerce Icon",
                  header:"COMMERCE",
                  btnLink:"course/commerce",
                  btnTxt:"Read More"
                },
                {
                  id:3,
                  imgUrl:"../../../assets/images/MCVC.svg",
                  imgAlt:"MCVC Icon",
                  header:"MCVC",
                  btnLink:"course/mcvc",
                  btnTxt:"Read More"
                }
              ],
              value1:[
                
                {
                  id:1,
                  imgUrl:"../../../assets/images/BOArts.svg",
                  imgAlt:"BACHELOR OF ARTS",
                  header:"BACHELOR OF ARTS",
                  btnLink:"course/BOArts",
                  btnTxt:"Read More"
                },
                {
                  id:2,
                  imgUrl:"../../../assets/images/ARTS.svg",
                  imgAlt:"Arts Icon",
                  header:"BACHELOR OF COMMERCE",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                }
              ],
              value2:[
                {
                  id:1,
                  imgUrl:"../../../assets/images/UG.svg",
                  imgAlt:"UG Icon",
                  header:"UNDER GRADUATE (BMS/BAF/ BAMMC/BSCIT)",
                  btnLink:"course/ug",
                  btnTxt:"Read More"
                },
                {
                  id:2,
                  imgUrl:"../../../assets/images/PG.svg",
                  imgAlt:"PG Icon",
                  header:"POST GRADUATE (MASTER OF COMMERCE)",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                },
                {
                  id:3,
                  imgUrl:"../../../assets/images/ResearchCentre.svg",
                  imgAlt:"Arts Icon",
                  header:"RESEARCH CENTRE (PH.D. IN  COMMERCE)",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                }
              ]
              
            }
          ]
        }
       
      ]
    }
  ]
}
  


  

