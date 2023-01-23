import { Roles } from './../mock-data/roles';
import { User } from './../mock-data/user';
import { AuthService } from './../auth.service';
import { StorageService } from '../storage.service';
import { MyTravelsService } from '../my-travels.service';
import { TravelService } from '../travel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userList: User[]=[];
  currentUserName: any = null;

  constructor(private travelService: TravelService, private myTravelsService: MyTravelsService, private storage: StorageService, public authService: AuthService) { }

  ngOnInit(): void { 
    this.getUserList();
    this.getCurrentUserName();
  }

  getUserList(){
    this.storage.getUserListSubject().subscribe(u=>{
      this.userList=u;
    });
  }

  getReservations(): number {
    return this.travelService.getReservations();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getCurrentUserName() {
    this.currentUserName = this.authService.getCurrentUserName();
  }

  logout() {
    this.authService.SignOut();
  }
}
