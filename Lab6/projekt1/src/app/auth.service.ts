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

  isLoggedIn() {
    return true;
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('Youre in!');
    }).catch(err => {
      console.log('Something went wrong:',err.message);
    });
    this.router.navigate(['menu']);
  }

  SignUp(login: string,password: string,nick: string) {

  }


  SignOut() {
    this.angularFireAuth.signOut();
    this.router.navigate(['home']);
    console.log('Logged out');
  }
}
