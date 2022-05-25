import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Students } from '../models/students';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  @Output() searchedStudents = new EventEmitter<string>()
  @Input() students: Students[] = []
  search: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    'input': new FormControl('', [Validators.required])
  })

  // Search Students
  getStudentsBySearch(searchTerm: string) {
    if(searchTerm !== '') {
      // const searched = this.students.filter(val => val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
      this.search = this.searchForm.get('input')?.value
      console.log(this.search);
      this.searchedStudents.emit(this.search)
      console.log(this.searchedStudents);
      
      // this.searchedStudents.emit(searched)
    }
    this.searchForm.get('input')?.reset()
  }
  
  
}
