import { TravelData } from '../mock-data/travelData';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../travel.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-travel-details',
  templateUrl: './single-travel-details.component.html',
  styleUrls: ['./single-travel-details.component.css']
})
export class SingleTravelDetailsComponent implements OnInit {
  private subscription: Subscription | undefined;
  name: string = "";
  travel: TravelData;

  constructor(private route: ActivatedRoute, private travelService: TravelService) {
    this.travel = this.travelService.getTravel(this.name);
   }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.name = params['name'];
    })
    this.travel = this.travelService.getTravel(this.name);
  }
}
