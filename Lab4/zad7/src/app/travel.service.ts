import { Injectable } from '@angular/core';
import { Travel } from './mock-data/travel';
import { TRAVELS } from './mock-data/mock-travels';
import { Observable, of } from 'rxjs';
import { TravelData } from './mock-data/travelData';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  travelReservations: number= 0;

  constructor() { }

  getTravels(): Observable<TravelData[]> {
    const travels = of(TRAVELS);
    return travels;
    }

  deleteTravel(travel: TravelData): void {
    delete TRAVELS[TRAVELS.indexOf(travel)];
  }

  push($event: TravelData) {
    const travel: TravelData = $event;
    TRAVELS.push(travel);
  }

  reserveTravel(): void {
    this.travelReservations = this.travelReservations + 1;
  }

  deleteReserveTravel(value: number): void {
    if (this.travelReservations > 0) this.travelReservations = this.travelReservations - value;
  }

  getReservations(): number {
      return this.travelReservations;
    }
}
