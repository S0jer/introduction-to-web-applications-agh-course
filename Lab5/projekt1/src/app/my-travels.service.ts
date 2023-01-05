import { TruncatedTravelData } from './mock-data/truncatedTravelData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyTravelsService {

  myTravelsActive: TruncatedTravelData[] = [];
  myTravelsHistory: TruncatedTravelData[] = [];

  constructor() { }


  getMyTravelsActive(): Observable<TruncatedTravelData[]> {
    const myTravelsActive = of(this.myTravelsActive);
    return myTravelsActive;
  }

  getMyTravelsHistory(): Observable<TruncatedTravelData[]> {
    const myTravelsHistory = of(this.myTravelsHistory);
    return myTravelsHistory;
  }

  buyTravel(myTravelsData: TruncatedTravelData) {
    this.myTravelsActive.push(myTravelsData);
  }

  markTravelAsCompleted(myTravelsData: TruncatedTravelData) {
    let checkIfItemExists = this.myTravelsActive.find(item => item.name === myTravelsData.name);
    if (checkIfItemExists) {
      let itemIndex = this.myTravelsActive.indexOf(checkIfItemExists);
      this.myTravelsActive.splice(itemIndex, 1);
      this.myTravelsHistory.push(myTravelsData);
    }
  }
}
