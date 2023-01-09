import { Injectable } from '@angular/core';
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

  getTravel(name: string): TravelData {
    let travel = TRAVELS.find(t => t.name === name)!;
    return travel;
    }

  getTravelById(id: number): TravelData {
    let travel = TRAVELS[id];
    return travel;
    }

  deleteTravel(travel: TravelData): void {
    let toDeleteIndex = TRAVELS.indexOf(travel);
    TRAVELS.splice(toDeleteIndex, 1);
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

  buyTravel(travel: TravelData, value: number): void {
    travel.peopleLimit -= value;
  }
}
