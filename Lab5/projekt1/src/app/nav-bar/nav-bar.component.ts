import { TravelService } from './../travel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private travelService: TravelService) { 
    this.travelService = travelService;
  }

  ngOnInit(): void {
  }

  getReservations(): number {
    return this.travelService.getReservations();
  }

}
