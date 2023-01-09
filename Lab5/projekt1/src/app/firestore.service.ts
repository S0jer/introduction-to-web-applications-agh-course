import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFireDatabase) { }
  
}
