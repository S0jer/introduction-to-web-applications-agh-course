import { Injectable } from '@angular/core';
import { Travel } from './mock-data/travel';
import { TRAVELS } from './mock-data/mock-travels';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  getTravels(): Observable<Travel[]> {
    const travels = of(TRAVELS);
    return travels;
    }

  getTravel(id: number): Observable<Travel> {
    const travel = TRAVELS.find(travel => travel.id === id)!;
    return of(travel);
  }

  deleteTravel(travel: Travel): void {
    delete TRAVELS[TRAVELS.indexOf(travel)];
  }
}
