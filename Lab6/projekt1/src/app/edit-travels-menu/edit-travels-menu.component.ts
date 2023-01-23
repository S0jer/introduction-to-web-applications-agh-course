import { Travel } from '../mock-data/travel';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-edit-travels-menu',
  templateUrl: './edit-travels-menu.component.html',
  styleUrls: ['./edit-travels-menu.component.css']
})
export class EditTravelsMenuComponent implements OnInit {

  travelList: Travel[] = [];

  constructor(private travelService: TravelService) {
    this.getTravels();
   }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels(): void {
    this.travelService.getTravels().subscribe(travels =>{
      this.travelList=travels
    });
  }
}
