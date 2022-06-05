import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

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
    {color: "wheat"}
  ]

  @ViewChildren('colorBox')colorBox!:QueryList<ElementRef>

  constructor() { }

  ngOnInit(): void {
    console.log(this.colors);
  }

  ngAfterViewInit(): void {
    console.log(this.colorBox);
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

}
