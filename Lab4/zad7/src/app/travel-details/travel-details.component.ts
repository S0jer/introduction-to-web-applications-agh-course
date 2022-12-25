import { Travel } from './../mock-data/travel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  @Input('travel') travel?: Travel;

  constructor() { }

  ngOnInit(): void {
  }

}
