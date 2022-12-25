import { TravelService } from './../travel.service';
import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../mock-data/travel';

@Component({
  selector: 'app-travel-management',
  templateUrl: './travel-management.component.html',
  styleUrls: ['./travel-management.component.css']
})
export class TravelManagementComponent implements OnInit {

  @Input('travel') travel!: Travel;
  cnt: number = 0;

  constructor(private travelService:TravelService) {   }

  ngOnInit(): void {
  }

  increment() {
    if(this.travel.peopleLimit > this.cnt) {
      this.cnt += 1;
    }
  }

  decrement() {
    if(this.cnt > 0) {
      this.cnt -= 1;
    }
  }

  deleteTravel() {
    this.travelService.deleteTravel(this.travel)
  }
}
