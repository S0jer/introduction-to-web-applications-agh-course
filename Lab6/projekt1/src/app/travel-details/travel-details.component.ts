import { TravelData } from './../mock-data/travelData';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  @Input('travel') travel!: TravelData;

  constructor() { }

  ngOnInit(): void { }

  getRating(): number {
    const ratingSum = this.travel.ratings.reduce((accumulator, current) => {
      return accumulator + current;}, 0);
    return Math.round((ratingSum / this.travel.ratings.length) * 10) / 10;
  }

  getRatingsQuantity(): number {
    return this.travel.ratings.length;
  }
}
