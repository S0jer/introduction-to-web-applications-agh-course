import { Component, OnInit, Input } from '@angular/core';
import { Travel } from './../mock-data/travel';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input('travel') travel!: Travel;

  constructor() { }

  ngOnInit(): void {
  }

  addRating( value: number ): void {
    this.travel.ratings.push( value );
  }
}
