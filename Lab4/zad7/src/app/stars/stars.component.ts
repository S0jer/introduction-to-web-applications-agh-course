import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  isMouseover = true;

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number) {
  if (this.isMouseover) {
    this.selectedValue = star;
  }
  }

  removeClass() {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }

}
