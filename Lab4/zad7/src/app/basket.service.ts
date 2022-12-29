import { BasketData } from './mock-data/basketData';
import { BASKET } from './mock-data/mock-basket';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  getBasket(): Observable<BasketData[]> {
    const basket = of(BASKET);
    return basket;
  }

  deleteBasketItem(basketItem: BasketData, deletedNumber: number): void {
    let itemFromBasketIfExists = BASKET.find(item => item.name === basketItem.name);
    
    if (itemFromBasketIfExists && itemFromBasketIfExists.quantity - deletedNumber <= 0){
      itemFromBasketIfExists.quantity = itemFromBasketIfExists.quantity - deletedNumber;
      let itemIndex = BASKET.indexOf(itemFromBasketIfExists);
      BASKET.splice(itemIndex, 1);
    } else if (itemFromBasketIfExists) itemFromBasketIfExists.quantity = itemFromBasketIfExists.quantity - deletedNumber;
  }

  addBasketItem(basketItem: BasketData): void { 
    let itemFromBasketIfExists = BASKET.find(item => item.name === basketItem.name);
    if (itemFromBasketIfExists) itemFromBasketIfExists.quantity = itemFromBasketIfExists.quantity + 1;
    else BASKET.push(basketItem);
  }

  countPrice(): number {
    let price = 0
    price = BASKET.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return price;
  }
}
