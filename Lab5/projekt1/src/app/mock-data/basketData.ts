import { BasketItem } from "./basket";

export class BasketData implements BasketItem {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}