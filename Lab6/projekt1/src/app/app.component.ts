import { User } from './mock-data/user';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad7';
  logged!: boolean;
  admin!: boolean;
  menager!: boolean;
  nick:string='---';
  userlist:User[]=[];

  constructor(public Auth: AuthService, private storage: StorageService){
    this.Auth.authState$.subscribe(state => {
      if(state !== null) this.logged=true; 
      else this.logged=false;
      this.admin=false;this.menager=false; 
      this.userlist.forEach(x =>{
        if(x.id === state?.uid){
          this.nick=x.nick;
          if(x.admin) this.admin=true;
          else this.admin=false;
          if(x.menager) this.menager=true;
          else this.menager=false;
        };
      });
    });

    this.getUserlist();
  }


  getUserlist(){
    this.storage.getUserListSubject().subscribe(u=>{
      this.userlist=u;

      this.Auth.authState$.subscribe(state => {
        this.userlist.forEach(x =>{
          if(x.id === state?.uid){
            this.nick=x.nick;
            if(x.admin) this.admin=true;
            else this.admin=false;
            if(x.menager) this.menager=true;
            else this.menager=false;
          };
        });
      });
    });
  }


  menuOpen = false;
  toogle(){
    if(!this.menuOpen) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }


  logout(){
    this.nick='---';
    this.Auth.SignOut();
  }
}
