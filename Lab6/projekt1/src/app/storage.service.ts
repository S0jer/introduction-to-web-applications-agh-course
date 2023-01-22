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

  userlist:User[];
  userSubject: BehaviorSubject<User[]>;

  bucketlist:any[];
  bucketSubject: BehaviorSubject<any[]>;

  bucketsList : AngularFirestoreCollection<any>;
  travelsList : AngularFirestoreCollection<any>;
  usersList : AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    this.travelList=[];
    this.userlist=[];
    this.bucketlist=[];
    this.bucketSubject = new BehaviorSubject<any[]>(this.bucketlist);
    this.travelSubject = new BehaviorSubject<TravelData[]>(this.travelList);
    this.userSubject = new BehaviorSubject<User[]>(this.userlist);
    this.bucketsList = this.db.collection('/buckets');
    this.usersList = this.db.collection('/users');
    this.travelsList = this.db.collection('/dishes');
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
       this.userlist = x;
       this.userSubject.next(this.userlist);
      });
  }

  getBucketListFromFire(){
    this.bucketsList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({
            id: c.payload.doc.id,
            dish: c.payload.doc.data().dish,
            quantity: c.payload.doc.data().quantity,
          })
        ))
    ).subscribe(x =>{
       this.bucketlist = x;
       this.bucketSubject.next(this.bucketlist);
      });
  }

  deleteDishFromFire(id:string){
    this.travelsList.doc(id).delete();
    this.getTravelListFromFire();
  }

  updateChoosen(id:string,q:number){
    this.travelsList.doc(id).update({choosen: q});
  }


  // ------------firebase------------

  public getdishlistSubject(): Observable<TravelData[]>{
    return this.travelSubject.asObservable();
  }
  public getdishlist(){
    return this.travelList;
  }

  public getuserlistSubject(): Observable<User[]>{
    return this.userSubject.asObservable();
  }
  public getuserlist(){
    return this.userlist;
  }

  public getbucketlistSubject(): Observable<User[]>{
    return this.bucketSubject.asObservable();
  }
  public getbucketlist(){
    return this.bucketlist;
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

  public editDish(d:TravelData): void{
    this.travelsList.doc(d.id).set(d);
  }


  public getDichPrice(ix:number){
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
