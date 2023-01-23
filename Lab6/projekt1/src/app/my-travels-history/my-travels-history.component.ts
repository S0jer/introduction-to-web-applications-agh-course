import { AuthService } from './../auth.service';
import { AuthGuard } from './../guard/auth.guard';
import { StorageService } from './../storage.service';
import { TruncatedTravel } from './../mock-data/truncatedTravel';
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

  endDate = new Date();


  
  constructor(private storage: StorageService, private auth: AuthService) { }

  ngOnInit(): void {
    this.myTravels = this.storage.getBucketList().filter(bucket =>  bucket.userId === this.auth.userId)
  }

  getEndDate(travel: TruncatedTravel): Date {
    return new Date(travel.endDate);
  }
}
