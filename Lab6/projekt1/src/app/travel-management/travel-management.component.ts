import { Roles } from '../mock-data/roles';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';
import { MyTravelsService } from '../my-travels.service';
import { TruncatedTravelData } from '../mock-data/truncatedTravelData';
import { BasketService } from '../basket.service';
import { TravelData } from '../mock-data/travelData';
import { Travel } from '../mock-data/travel';
import { TravelService } from '../travel.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-management',
  templateUrl: './travel-management.component.html',
  styleUrls: ['./travel-management.component.css']
})
export class TravelManagementComponent implements OnInit {

  @Input('travel') travel!: Travel;

  @Input('rating') rating!: boolean;

  roles: Roles;

  constructor(private travelService: TravelService, private basketService: BasketService, private myTravelsService: MyTravelsService, private storage: StorageService, private authService: AuthService) { 
    this.travelService = travelService;
    this.roles = this.authService.getRolesData();
  }

  ngOnInit(): void {
  }

  increment(travel: Travel) {
    if(travel.peopleLimit > travel.reservationsCnt) {
      this.travelService.reserveTravel();
      travel.reservationsCnt += 1;
      this.basketService.addBasketItem(new TruncatedTravelData(travel.name, 1, travel.unitPrice, travel.startDate, travel.endDate, travel.imgPath));
    }
  }

  decrement(travel: Travel) {
    if(travel.reservationsCnt > 0) {
      this.travelService.deleteReserveTravel(1);
      travel.reservationsCnt -= 1;
      this.basketService.deleteBasketItem(new TruncatedTravelData(travel.name, 1, travel.unitPrice, travel.startDate, travel.endDate, travel.imgPath), 1);
    }
  }

  deleteTravel(travel: Travel) {
    this.basketService.deleteBasketItem(new TruncatedTravelData(travel.name, 1, travel.unitPrice, travel.startDate, travel.endDate, travel.imgPath), travel.reservationsCnt);
    this.travelService.deleteReserveTravel(travel.reservationsCnt);
    this.travelService.deleteTravel(travel);
  }

  getReservationsCnt(): number {
    return this.travel.reservationsCnt;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  boughtTravel(travelName: string) {
    let check = false;
    this.storage.getBucketList().filter(b => b.userId === this.authService.userId).forEach(t => {
        console.log(t);
        if(t.name === travelName) {
          check = true;
        }
    });
    return check;
  }
}
