import { Brand } from './../interfaces/brand';
import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Model } from '../interfaces/model';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  @Input() brand?: Brand;

  models: Model[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getModels();
  }

  getModels(): void {
    this.carService.getModels().subscribe((models) => this.models = models);
    this.models = this.models.filter((model) => model.brand_id == this.carService.brand_id);
  }
}
