import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from '../models/students';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() students: Students[] = []
  @Output() matureStudents = new EventEmitter<Students[]>()
  
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.students);
  }

  // Sort Students By Age
  sortStudentsByAge() {
    this.students.sort((a, b) => +a.age - +b.age)

  }

  // Sort Students By IsStudent Property
  sortStudentsByIsStudent() {
    this.students.sort((a, b) => +b.isStudent - +a.isStudent)
  }


  // Filter Student by Age
  filterByAge() {
    const mature = this.students.filter(val => +val.age >= 18)
    this.matureStudents.emit(mature)
}


  // Logout
  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
