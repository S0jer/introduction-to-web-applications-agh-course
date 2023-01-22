import { Travel } from "./travel";

export class TravelData implements Travel {
    id?: string;
    name: string;
    country: string;
    city: string;
    startDate: string;
    endDate: string;
    unitPrice: number;
    peopleLimit: number;
    description: string;
    imgPath: string;
    ratings: any[];
    reservationsCnt: number;

    constructor(name: string, country: string, city: string, startDate: string, endDate: string, unitPrice: number, peopleLimit: number, description: string, imgPath: string) {
        this.name = name;
        this.country = country;
        this.city = city;
        this.startDate = startDate;
        this.endDate = endDate;
        this.unitPrice = unitPrice;
        this.peopleLimit = peopleLimit;
        this.description = description;
        this.imgPath = imgPath;
        this.ratings = [];
        this.reservationsCnt = 0;
    }
}