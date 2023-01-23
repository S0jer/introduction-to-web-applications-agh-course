import { User } from './mock-data/user';
import { Roles } from './mock-data/roles';
import { StorageService } from './storage.service';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any = null;
  currentUserName: any = null;
  authState$: Observable<firebase.default.User | null> = this.angularFireAuth.authState;
  userRoles: Roles = {
    user: true,
    admin: false,
    menager: false,
    banned: false,
  };
  persistenceSetting: string = 'local';


  constructor(private angularFireAuth: AngularFireAuth,public router: Router,private db: AngularFirestore, private storage: StorageService) {
    angularFireAuth.authState.subscribe(async (ev: any) => {
      if (ev) {
        this.userData = ev;
        this.getRoles();
      } else {
        this.userData = null;
        this.userRoles = {
          user: true,
          admin: false,
          menager: false,
          banned: false,
        };
      }});
   }


  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('Youre in!');
      this.getRoles();
      this.router.navigate(['home']);
    }).catch(err => {
      console.log('Something went wrong:',err.message);
    });
    this.router.navigate(['home']);
  }

  SignUp(email: string, password: string, nick: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      res.user?.updateProfile({displayName:nick});

      this.db.collection('/users').doc(`${res.user!.uid}`).set({
        uid: res.user!.uid,
        nick: nick,
        menager: false,
        admin: false,
        banned: false
      });


      console.log('You are Successfully signed up!', res);
    }).catch(error => {
      console.log('Something is wrong:', error.message);
    });

    this.router.navigate(['login']); 
  } 


  SignOut() {
    this.angularFireAuth.signOut();
    this.router.navigate(['login']);
    console.log('Logged out');
  }

  changePersistanceState(state: string): void {
    this.angularFireAuth.setPersistence(state);
    this.persistenceSetting = state;
  }

  getRoles() {
    this.authState$.forEach(state => {
      this.storage.getUserList().subscribe(u => {u.forEach(x =>{ if(x.id === state?.uid) {
        this.currentUserName = x.nick;
        this.userRoles.admin = x.admin;
        this.userRoles.menager = x.menager;
        this.userRoles.banned = x.banned;
    }})});});
  }

  getRolesData(): Roles {
    this.getRoles();
    return this.userRoles;
  }

  getCurrentUserName(): string {
    return this.currentUserName;
  }

  isLoggedIn() {
    return this.userData != null;
  }
}
