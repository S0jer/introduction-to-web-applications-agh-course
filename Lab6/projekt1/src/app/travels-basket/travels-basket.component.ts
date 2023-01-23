import { AuthService } from './../auth.service';
import { StorageService } from './../storage.service';
import { MyTravelsService } from './../my-travels.service';
import { TruncatedTravelData } from './../mock-data/truncatedTravelData';
import { TravelService } from '../travel.service';
import { BasketService } from '../basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travels-basket',
  templateUrl: './travels-basket.component.html',
  styleUrls: ['./travels-basket.component.css']
})
export class TravelsBasketComponent implements OnInit {

  basketList: TruncatedTravelData[] = [];
  sumPrice: number = 0;

  constructor(private basketService: BasketService, private travelService: TravelService, private myTravelsService: MyTravelsService, private storage: StorageService , private auth: AuthService) { }

  ngOnInit(): void {
    this.getBasket();
    this.countPrice();
  }

  getBasket() {
    this.basketService.getBasket().subscribe({
      next: basket => this.basketList = basket,
      error: error => console.log(error)
    });
  }

  countPrice() {
    this.sumPrice = this.basketService.countPrice();
  }

  deleteBasketTravel(basketData: TruncatedTravelData, deletedTravels: number) {
    let travel = this.travelService.getTravel(basketData.name);
    travel.reservationsCnt = travel.reservationsCnt - deletedTravels;
    this.basketService.deleteBasketItem(basketData, deletedTravels);
    this.travelService.deleteReserveTravel(deletedTravels);
    this.countPrice();
  }

  buyTravel(myTravel: TruncatedTravelData) {
    let travel = this.travelService.getTravel(myTravel.name);
    this.storage.pushOrder(this.auth.userId, myTravel);
    this.myTravelsService.buyTravel(myTravel,  travel.reservationsCnt);
    this.travelService.buyTravel(travel, travel.reservationsCnt);
    this.deleteBasketTravel(myTravel, travel.reservationsCnt);
    this.storage.editTravel(travel.id!, travel);
  }
}
