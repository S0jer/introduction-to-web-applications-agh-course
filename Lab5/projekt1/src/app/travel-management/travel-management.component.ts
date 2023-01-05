import { BasketData } from '../mock-data/basketData';
import { BasketService } from '../basket.service';
import { TravelData } from '../mock-data/travelData';
import { TravelService } from '../travel.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-management',
  templateUrl: './travel-management.component.html',
  styleUrls: ['./travel-management.component.css']
})
export class TravelManagementComponent implements OnInit {

  @Input('travel') travel!: TravelData;

  constructor(private travelService:TravelService, private basketService: BasketService) {   }

  ngOnInit(): void {
  }

  increment() {
    if(this.travel.peopleLimit > this.travel.reservationsCnt) {
      this.travelService.reserveTravel();
      this.travel.reservationsCnt += 1;
      this.basketService.addBasketItem(new BasketData(this.travel.name, 1, this.travel.unitPrice));
    }
  }

  decrement() {
    if(this.travel.reservationsCnt > 0) {
      this.travelService.deleteReserveTravel(1);
      this.travel.reservationsCnt -= 1;
      this.basketService.deleteBasketItem(new BasketData(this.travel.name, 1, this.travel.unitPrice), 1);
    }
  }

  deleteTravel() {
    this.basketService.deleteBasketItem(new BasketData(this.travel.name, 1, this.travel.unitPrice), this.travel.reservationsCnt);
    this.travelService.deleteReserveTravel(this.travel.reservationsCnt);
    this.travelService.deleteTravel(this.travel);
  }

  getReservationsCnt(): number {
    return this.travel.reservationsCnt;
  }
}
