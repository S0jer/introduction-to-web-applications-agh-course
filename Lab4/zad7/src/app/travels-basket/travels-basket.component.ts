import { BasketData } from '../mock-data/basketData';
import { BasketItem } from '../mock-data/basket';
import { TravelService } from '../travel.service';
import { BasketService } from '../basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travels-basket',
  templateUrl: './travels-basket.component.html',
  styleUrls: ['./travels-basket.component.css']
})
export class TravelsBasketComponent implements OnInit {

  basketList: BasketItem[] = [];
  sumPrice: number = 0;

  constructor(private basketService: BasketService, private travelService: TravelService) { }

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

  deleteBasketTravel(basketData: BasketData) {
    let travel = this.travelService.getTravel(basketData.name);
    travel.reservationsCnt = travel.reservationsCnt - 1;
    this.basketService.deleteBasketItem(basketData, 1);
    this.travelService.deleteReserveTravel(1);
    this.countPrice();
  }
}
