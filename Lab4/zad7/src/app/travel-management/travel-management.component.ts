import { TravelData } from './../mock-data/travelData';
import { TravelService } from './../travel.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-management',
  templateUrl: './travel-management.component.html',
  styleUrls: ['./travel-management.component.css']
})
export class TravelManagementComponent implements OnInit {

  @Input('travel') travel!: TravelData;
  cnt: number = 0;

  constructor(private travelService:TravelService) {   }

  ngOnInit(): void {
  }

  increment() {
    if(this.travel.peopleLimit > this.cnt) {
      this.travelService.reserveTravel();
      this.cnt += 1;
    }
  }

  decrement() {
    if(this.cnt > 0) {
      this.travelService.deleteReserveTravel(1);
      this.cnt -= 1;
    }
  }

  deleteTravel() {
    this.travelService.deleteReserveTravel(this.cnt);
    this.travelService.deleteTravel(this.travel)
  }
}
