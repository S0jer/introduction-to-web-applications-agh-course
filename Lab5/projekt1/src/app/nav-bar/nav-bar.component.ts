import { MyTravelsService } from './../my-travels.service';
import { TravelService } from './../travel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  upcomingTravelName: string = "";


  constructor(private travelService: TravelService, private myTravelsService: MyTravelsService) { 
    this.travelService = travelService;
  }

  ngOnInit(): void {
  }

  getReservations(): number {
    return this.travelService.getReservations();
  }

  getUpcomingTravel(): string {
    this.myTravelsService.getMyTravels().subscribe({
      next: travels => this.upcomingTravelName = travels[0].name,
      error: error => console.log(error)
    });
    return this.upcomingTravelName;
  }

}
