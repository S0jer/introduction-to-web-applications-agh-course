import { TruncatedTravelData } from '../mock-data/truncatedTravelData';
import { MyTravelsService } from '../my-travels.service';
import { BasketService } from '../basket.service';
import { TravelService } from '../travel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-travels-history',
  templateUrl: './my-travels-history.component.html',
  styleUrls: ['./my-travels-history.component.css']
})
export class MyTravelsHistoryComponent implements OnInit {

  myTravels: TruncatedTravelData[] = [];

  currentDate = new Date();


  
  constructor(private basketService: BasketService, private travelService: TravelService, private myTravelsService: MyTravelsService) { }

  ngOnInit(): void {
    this.myTravelsService.getMyTravels().subscribe({
      next: travels => this.myTravels = travels,
      error: error => console.log(error)
    });
  }
}
