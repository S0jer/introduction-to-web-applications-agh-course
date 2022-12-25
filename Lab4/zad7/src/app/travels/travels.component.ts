import { TravelData } from './../mock-data/travelData';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';
import { Travel } from '../mock-data/travel';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {


  travels: Travel[] = [];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels(): void {
    this.travelService.getTravels().subscribe({
      next: travels => this.travels = travels,
      error: error => console.log(error)
    });
  }

  put($event: TravelData){
    this.travelService.push($event);
  }
}
