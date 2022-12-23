import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Color } from '../interfaces/color';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(): void {
    this.carService.getColors().subscribe((colors) => this.colors = colors);
  }
}
