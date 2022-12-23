import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit(): void {

  }

  getCar() {
    this.carService.brand_id + " " + this.carService.model_id + " " + this.carService.color_id;
  }

}
