import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Cobserver } from './mock-data/cobserver';
import { TravelData } from './mock-data/travelData';
import { Observer } from './mock-data/observer';
import { User } from './mock-data/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements Cobserver {
  travelList:TravelData[];
  travelSubject:BehaviorSubject<TravelData[]>;

  userList: User[];
  userSubject: BehaviorSubject<User[]>;

  bucketList: any[];
  bucketSubject: BehaviorSubject<any[]>;

  bucketsList : AngularFirestoreCollection<any>;
  travelsList : AngularFirestoreCollection<any>;
  usersList : AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    this.travelList=[];
    this.userList=[];
    this.bucketList=[];
    this.bucketSubject = new BehaviorSubject<any[]>(this.bucketList);
    this.travelSubject = new BehaviorSubject<TravelData[]>(this.travelList);
    this.userSubject = new BehaviorSubject<User[]>(this.userList);
    this.bucketsList = this.db.collection('/buckets');
    this.usersList = this.db.collection('/users');
    this.travelsList = this.db.collection('/travels');
    this.getTravelListFromFire();
    this.getUserListFromFire();
    this.getBucketListFromFire();
  }



  // ------------firebase------------

  getTravelListFromFire(): void {
    this.travelsList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.travelList = data;
      this.travelSubject.next(this.travelList);
    }); 
  }

  getUserListFromFire(){
    this.usersList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({
            id: c.payload.doc.id,
            nick: c.payload.doc.data().nick,
            admin: c.payload.doc.data().admin,
            menager: c.payload.doc.data().menager,
            banned: c.payload.doc.data().banned,
          })
        ))
    ).subscribe(x =>{
       this.userList = x;
       this.userSubject.next(this.userList);
      });
  }

  getBucketListFromFire(){
    this.bucketsList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({
            id: c.payload.doc.id,
            travel: c.payload.doc.data().travel,
            quantity: c.payload.doc.data().quantity,
          })
        ))
    ).subscribe(x =>{
       this.bucketList = x;
       this.bucketSubject.next(this.bucketList);
      });
  }

  deleteTravelFromFire(id:string){
    this.travelsList.doc(id).delete();
    this.getTravelListFromFire();
  }

  updateChosen(id:string,q:number) {
    this.travelsList.doc(id).update({chosen: q});
  }


  // ------------firebase------------

  public getTravelsListSubject(): Observable<TravelData[]>{
    return this.travelSubject.asObservable();
  }
  public getTravelList(){
    this.getTravelListFromFire();
    return this.travelList;
  }

  public getUserListSubject(): Observable<User[]>{
    return this.userSubject.asObservable();
  }
  public getUserList(){
    return this.usersList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({
            id: c.payload.doc.id,
            nick: c.payload.doc.data().nick,
            admin: c.payload.doc.data().admin,
            menager: c.payload.doc.data().menager,
            banned: c.payload.doc.data().banned,
          })
        ))
    )
  }

  public getBucketListSubject(): Observable<User[]>{
    return this.bucketSubject.asObservable();
  }
  public getBucketList(){
    return this.bucketList;
  }

  public pushTravel(newTravel:TravelData): void{
    const travel = {
      id: newTravel.id,
      name:newTravel.name,
      country:newTravel.country,
      city:newTravel.city,
      startDate: newTravel.startDate,
      endDate: newTravel.endDate,
      unitPrice: newTravel.unitPrice,
      peopleLimit: newTravel.peopleLimit,
      description: newTravel.description,
      imgPath: newTravel.imgPath,
      ratings: newTravel.ratings,
      reservationsCnt: newTravel.reservationsCnt,
    }
    this.travelsList.add({...travel});
  }

  public editTravel(travelId: string, d:TravelData): void {
    this.travelsList.doc(travelId).set(d);
  }


  public getTravelPrice(ix:number){
    return this.travelList[ix].unitPrice;
  }


  changeMenager(u:User){
    let bool=true;
    if(u.menager) bool=false;
    this.usersList.doc(u.id).update({menager: bool});
  }
  changeAdmin(u:User){
    let bool=true;
    if(u.admin) bool=false;
    this.usersList.doc(u.id).update({admin: bool});
  }
  changeBanned(u:User){
    let bool=true;
    if(u.banned) bool=false;
    this.usersList.doc(u.id).update({banned: bool});
  }

  observers:Observer[]=[];
  addObserver(o: Observer): void {
    if(!this.observers.includes(o)) this.observers.push(o);
  }
  notify(): void {
    this.observers.forEach(e => {
      e.update();
  });
  }
}
