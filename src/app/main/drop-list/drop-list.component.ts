import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Students } from 'src/app/models/students';
import { ShareService } from './share.service';

@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.css']
})
export class DropListComponent implements OnInit, AfterViewInit {

  colors: any[] = [
    {color: "red"},
    {color: "green"},
    {color: "yellow"},
    {color: "pink"},
    {color: "purple"},
    {color: "orange"},
    {color: "wheat"},
    {color: "blue"}
  ]

  @Input() students: Students[] = []

  @ViewChildren('colorBox')colorBox!:QueryList<ElementRef>

  constructor(
    private share: ShareService
  ) { }

  ngOnInit(): void {
    console.log(this.colors);
  }

  ngAfterViewInit(): void {
    this.setColor()
  }

  
  // Set Colors For Boxes
  setColor() {
    this.colors.forEach((color, index) => {
      this.colorBox.forEach((box, boxIdx) => {
        if(index === boxIdx) {
          box.nativeElement.style.background = color.color
        }
      })
    })
  }

  // Drag And Drop Colors
  drop(event: CdkDragDrop<string[]>) {
    this.share.drop(event)
  }
}
