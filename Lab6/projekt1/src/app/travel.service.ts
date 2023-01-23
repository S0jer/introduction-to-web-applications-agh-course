import { StorageService } from './storage.service';
import { Travel } from './mock-data/travel';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private dbPath = '/travels';

  travelsList: Travel[];
  travels : AngularFirestoreCollection<Travel>;
  travelsSubject:BehaviorSubject<Travel[]>;

  travelReservations: number= 0;

  constructor(private db: AngularFirestore, private storage: StorageService) {
    this.travelsList = [];
    this.travelsSubject = new BehaviorSubject<Travel[]>(this.travelsList);
    this.travels = db.collection(this.dbPath);
    this.getTravelsFromFire();
  }


  getTravelsFromFire(): void {
    this.travels.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.travelsList = data;
      this.travelsSubject.next(this.travelsList);
    }); 
  }


  getTravels(): Observable<Travel[]> {
    return this.travelsSubject.asObservable();
    }

  getTravel(name: string): Travel {
    let travel = this.travelsList.find(travel => travel.name === name)!;
    return travel;
    }

  deleteTravel(travel: any): void {
    this.travels.doc(travel.id).delete();
    this.storage.deleteTravelFromFire(travel.id);
    this.getTravelsFromFire();
  }

  push($event: Travel) {
    const travel: Travel = $event;
    this.travels.add(travel);
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

  buyTravel(travel: Travel, value: number): void {
    travel.peopleLimit -= value;
  }

  edit(travelId: string, event: Travel) {
    this.storage.editTravel(travelId, event);
  }
}
