import { TruncatedTravelData } from './mock-data/truncatedTravelData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyTravelsService {

  myTravels: TruncatedTravelData[] = [];

  constructor() { }


  getMyTravels(): Observable<TruncatedTravelData[]> {
    this.myTravels.sort((a, b) => {
      if(new Date(a.startDate) instanceof Date && new Date(b.startDate) instanceof Date) return new Date(a.startDate).getTime() - new Date(b.startDate).getTime(); 
    else return 1;})
    const myTravels = of(this.myTravels);
    return myTravels;
  }

  buyTravel(myTravelsData: TruncatedTravelData,  reservationsCnt: number) {
    let getIfExists = this.myTravels.find(x => x.name === myTravelsData.name);
    if(getIfExists) {
      getIfExists.quantity += reservationsCnt;
    } else {
      this.myTravels.push(new TruncatedTravelData(myTravelsData.name, reservationsCnt, myTravelsData.price, myTravelsData.startDate, myTravelsData.endDate, myTravelsData.imgPath));
    }
  }

  markTravelAsCompleted(myTravelsData: TruncatedTravelData) {
    let checkIfItemExists = this.myTravels.find(item => item.name === myTravelsData.name);
    if (checkIfItemExists) {
      let itemIndex = this.myTravels.indexOf(checkIfItemExists);
      this.myTravels.splice(itemIndex, 1);
      this.myTravels.push(myTravelsData);
    }
  }
}
