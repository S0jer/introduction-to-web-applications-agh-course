import { TruncatedTravel } from "./truncatedTravel";

export class TruncatedTravelData implements TruncatedTravel {
    id?: string;
    name: string;
    quantity: number;
    price: number;
    startDate: string;
    endDate: string;
    imgPath: string;

    constructor(name: string, quantity: number, price: number, startDate: string, endDate: string, imgPath: string){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.imgPath = imgPath;
    }
}