import { BasketService } from './../basket.service';
import { TravelService } from './../travel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-travels-history',
  templateUrl: './my-travels-history.component.html',
  styleUrls: ['./my-travels-history.component.css']
})
export class MyTravelsHistoryComponent implements OnInit {

  upcomingTravels: any[] = [];
  travelsHistory: any[] = [];


  
  constructor(private basketService: BasketService, private travelService: TravelService) { }
  ngOnInit(): void {
  }

}
