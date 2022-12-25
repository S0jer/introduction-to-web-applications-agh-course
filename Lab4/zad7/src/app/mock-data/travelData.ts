import { Travel } from "./travel";

export class TravelData implements Travel {
    name: string;
    destination: string;
    startDate: Date;
    endDate: Date;
    unitPrice: number;
    peopleLimit: number;
    description: string;
    imgPath: string;
    ratings: any[];

    constructor(name: string, destination: string, startDate: Date, endDate: Date, unitPrice: number, peopleLimit: number, description: string, imgPath: string){
        this.name = name;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.unitPrice = unitPrice;
        this.peopleLimit = peopleLimit;
        this.description = description;
        this.imgPath = imgPath;
        this.ratings = [];
    }
}