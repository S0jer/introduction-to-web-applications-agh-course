import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<any>;
  authState$: Observable<firebase.default.User | null> = this.angularFireAuth.authState;

  constructor(private angularFireAuth: AngularFireAuth,public router: Router,private db: AngularFirestore) {
    this.userData = angularFireAuth.authState;
   }


  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('Youre in!');
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
}
