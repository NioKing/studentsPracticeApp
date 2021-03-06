import { style, transition, trigger, animate, query, stagger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Students } from '../models/students';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('itemAnim', [
      // Entry Animation
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.8)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }),
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*'
        })),
        animate(100)
      ]),
      // Delete Animation
      transition('* => void', [
        animate(60, style({
          transform: 'scale(1.3)'
        })),
        animate(60, style({
          transform: 'scale(1)',
          opacity: 0.8
        })),
        animate('120ms ease-out', style({
          transform: 'scale(0.7)',
          opacity: 0.5
        })),
        animate('150ms ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          'margin-bottom': '0',
        }))
      ])
    ]),
  ]
})
export class MainComponent implements OnInit, AfterViewInit {

  students: Students[] = [
    {
    id: 1,
    name: 'Mike',
    age: '20',
    isStudent: false
    },
    {
      id: 2,
      name: 'Jack',
      age: '31',
      isStudent: true
    },
    {
      id: 3,
      name: 'Ann',
      age: '43',
      isStudent: true
    },
    {
      id: 4,
      name: 'Shean',
      age: '13',
      isStudent: true
    },
    {
      id: 5,
      name: 'Ivan',
      age: '17',
      isStudent: false
    },
    {
      id: 6,
      name: 'Clare',
      age: '24',
      isStudent: true
    },
    {
      id: 7,
      name: 'Caroline',
      age: '30',
      isStudent: false
    },
    {
      id: 8,
      name: 'Charlse',
      age: '54',
      isStudent: true
    },
    {
      id: 9,
      name: 'Felix',
      age: '19',
      isStudent: true
    },
    {
      id: 10,
      name: 'James',
      age: '11',
      isStudent: true
    },
]
  searchValue: string = ''
  isChecked: boolean = false
  onDelete: Students[] = []


  @ViewChildren("cardborder")cardBorder!: QueryList<ElementRef>
  @ViewChildren("CheckBox")CheckBox!: QueryList<ElementRef>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.defCheckBox);
    // console.log(this.cardBorder);
    
  }

  // Filter Students Who Older Than 18
  filterAdultStudents(student: Students[]) {
    this.students = student
    console.log(this.students);
    
  }

  // Search Students By Input Field
  searchForStudent(student: string) {
    this.searchValue = student  
  }
 

  // Select A Student By CheckBox
  selectStudent(item: Students) {
    const index = this.students.indexOf(item)
    let selectedStudent = [...this.students].splice(index, 1)
    selectedStudent.forEach((val) => {
      if (this.onDelete.find(res => res === val)) {
        const index = this.onDelete.indexOf(val)
        this.onDelete.splice(index, 1)
      } else {
        this.onDelete.push(val)
      }
    })
    console.log(this.onDelete);
    
  }

  
  // Delete Checked Students
  deleteSelected() {
    const arr = this.students.filter(val => this.onDelete.indexOf(val) === -1) 
    this.students = arr
  }
}
