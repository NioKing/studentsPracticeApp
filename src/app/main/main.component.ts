import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
  

  constructor() { }

  ngOnInit(): void {
  }


  filterMatureStudents(stundent: Students[]) {
    this.students = stundent
    console.log(this.students);
    
  }
}
