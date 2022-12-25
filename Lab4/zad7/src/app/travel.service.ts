import { Injectable } from '@angular/core';
import { Travel } from './mock-data/travel';
import { TRAVELS } from './mock-data/mock-travels';
import { Observable, of } from 'rxjs';
import { TravelData } from './mock-data/travelData';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  getTravels(): Observable<Travel[]> {
    const travels = of(TRAVELS);
    return travels;
    }

  deleteTravel(travel: Travel): void {
    delete TRAVELS[TRAVELS.indexOf(travel)];
  }

  push($event: TravelData) {
    TRAVELS.push($event);
  }
}
