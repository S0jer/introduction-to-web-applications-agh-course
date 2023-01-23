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

  upcomingTravelName: string = "";
  userList: User[]=[];
  roles: Roles;

  constructor(private travelService: TravelService, private myTravelsService: MyTravelsService, private storage: StorageService, private authService: AuthService) { 
    this.travelService = travelService;
    this.roles = this.authService.getRolesData();
  }

  ngOnInit(): void { 
    this.getUserList();
    this.authService.authState$.subscribe(data => console.log(data?.email))
    console.log(this.roles)
  }

  getUserList(){
    this.storage.getUserListSubject().subscribe(u=>{
      this.userList=u;
    });
  }

  getReservations(): number {
    return this.travelService.getReservations();
  }

  getUpcomingTravel(): string {
    let len = 0
    this.myTravelsService.getMyTravels().subscribe(travels => len = travels.length);
    if(length > 0) {
      this.myTravelsService.getMyTravels().subscribe({
        next: travels => this.upcomingTravelName = travels[0].name,
        error: error => console.log(error)
      });
    }
    return this.upcomingTravelName;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.SignOut();
  }
}
