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
              info4: {
                data: "P. G. PROGRAMME",
              },
              info5: {
                data: "DOCTRAL PROGRAMME",
              },
              info6: {
                data: "DISTANCE LEARNING",
              },
              value:[
                {
                  id:1,
                  imgUrl:"../../../assets/images/ARTS.svg",
                  imgAlt:"Arts Icon",
                  header:"ARTS",
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
                  imgUrl:"../../../assets/images/BMS.svg",
                  imgAlt:"BMS Icon",
                  header:"(BMS) Bachelor of Management Studies",
                  btnLink:"course/bms",
                  btnTxt:"Read More"
                },
                {
                  id:2,
                  imgUrl:"../../../assets/images/BAF.svg",
                  imgAlt:"BAF Icon",
                  header:"(BAF) Bachelor of Accounting and Finance",
                  btnLink:"course/baf",
                  btnTxt:"Read More"
                },
                {
                  id:3,
                  imgUrl:"../../../assets/images/BAMMC.svg",
                  imgAlt:"BAMMC Icon",
                  header:"(B.A.M.M.C) (Bachelor of Science in Information & Technology)",
                  btnLink:"course/bammc",
                  btnTxt:"Read More"
                },
                {
                  id:4,
                  imgUrl:"../../../assets/images/BSCIT.svg",
                  imgAlt:"BSCIT Icon",
                  header:"(B.Sc.IT) Bachelor of Science in Information Technology",
                  btnLink:"bscit",
                  btnTxt:"Read More"
                },
              ],
              value3:[
                {
                  id:2,
                  imgUrl:"../../../assets/images/PG.svg",
                  imgAlt:"PG Icon",
                  header:"POST GRADUATE (MASTER OF COMMERCE)",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                },
                {
                  id:2,
                  imgUrl:"../../../assets/images/PG.svg",
                  imgAlt:"PG Icon",
                  header:"POST GRADUATE (MASTER OF COMMERCE)",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                }
              ],
              value4:[
                {
                  id:3,
                  imgUrl:"../../../assets/images/ResearchCentre.svg",
                  imgAlt:"Arts Icon",
                  header:"RESEARCH CENTRE (PH.D. IN  COMMERCE)",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                }
              ],
              value5:[
                {
                  id:1,
                  imgUrl:"../../../assets/images/UG.svg",
                  imgAlt:"Arts Icon",
                  header:"Y.C.M.O.U.",
                  btnLink:"course/arts",
                  btnTxt:"Read More"
                },
              ]
              
              
            }
          ]
        }
       
      ]
    }
  ]
}
  


  

