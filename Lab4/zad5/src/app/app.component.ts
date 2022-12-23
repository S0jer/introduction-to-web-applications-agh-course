import { Component } from '@angular/core';
import { CarService } from './car.service';
import { Model } from './interfaces/model';
import { Color } from './interfaces/color';
import { Brand } from './interfaces/brand';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  models: Model[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  selectedBrandId: number = 0;
  selectedModelId: number = 0;
  selectedColorId: number = 0;
  car = "\n";

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  onSelectBrand(selectedBrandId: number) {
    this.selectedBrandId = selectedBrandId;
    this.getModels();
    this.car += this.brands.find(brand => brand.id == selectedBrandId)?.name + " ";
  }

  onSelectModel(selectedModelId: number) {
    this.selectedModelId = selectedModelId;
    this.getColors();
    this.car += this.models.find(model => model.id == selectedModelId)?.name + " ";
  }

  onSelectColor(selectedColorId: number) {
      this.selectedColorId = selectedColorId;
      this.car += this.colors.find(color => color.id == selectedColorId)?.name + " ";
  }

  getBrands(): void {
    this.carService.getBrands().subscribe((brands) => this.brands = brands);
  }

  getModels(): void {
    this.carService.getModels().subscribe((models) => this.models = models
    .filter((model) => {return model.brand_id == this.selectedBrandId;}));
  }

  getColors(): void {
    this.carService.getColors().subscribe((colors) => this.colors = colors
    .filter((color) => {return color.model_id == this.selectedModelId;}));
  }

  title = 'zad5';
}