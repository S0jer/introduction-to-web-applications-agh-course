import { AuthService } from './../auth.service';
import { StorageService } from './../storage.service';
import { User } from '../mock-data/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  currentState: string = 'local';

  userlist:User[]=[];

  b=true;

  constructor(private storage:StorageService, private auth: AuthService) {
    this.getUserlist();
   }

   ngOnInit(): void { }

  getUserlist(){
  this.storage.getUserListSubject().subscribe(u=>{
    this.userlist=u;
    });
  }

  changeMenager(u:User) {
    this.storage.changeMenager(u);
  }

  changeAdmin(u:User) {
    this.storage.changeAdmin(u);
  }

  changeBanned(u:User) {
    if(u.admin) alert("Can't ban ADMIN")
    else this.storage.changeBanned(u);
  }

  changePersistanceState(state: string) {
    this.currentState = state;
    this.auth.changePersistanceState(state);
  }

}
