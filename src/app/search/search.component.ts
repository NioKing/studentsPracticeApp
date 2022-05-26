import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { Students } from '../models/students';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  @Output() searchedStudents = new EventEmitter<Observable<string>>()
  @Input() students: Students[] = []
  search: string = ''

  constructor() { }

  ngOnInit(): void {
    this.searchStudents()
  }

  searchForm = new FormGroup({
    'input': new FormControl('')
  })

  searchStudents() {
    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      
    ).subscribe((res: any) => {
      this.searchedStudents.emit(res.input)
    })
  }
  
}
