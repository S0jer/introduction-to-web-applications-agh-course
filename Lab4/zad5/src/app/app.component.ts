import { ColorData } from './interfaces/colorData';
import { BrandData } from './interfaces/brandData';
import { ModelData } from './interfaces/modelData';
import { Component } from '@angular/core';
import { CarService } from './car.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  models: ModelData[] = [];
  brands: BrandData[] = [];
  colors: ColorData[] = [];
  selectedBrandId: number = 0;
  selectedModelId: number = 0;
  selectedColorId: number = 0;
  selectedModel!: ModelData;
  selectedColor: string = "white";
  car = "\n";

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  onSelectBrand(selectedBrandId: number) {
    this.selectedBrandId = selectedBrandId;
    this.selectedModelId = 0;
    this.selectedColorId = 0;
    this.getModels();
    this.carService.setBrand(this.brands.find(brand => brand.id == selectedBrandId)?.name);
    this.carService.setModel("");
    this.carService.setColor("");
  }

  onSelectModel(selectedModelId: number) {
    this.selectedModelId = selectedModelId;
    this.selectedColorId = 0;
    this.selectedModel = this.models.find(model => model.id == selectedModelId)!;
    this.getColors();
    this.carService.setModel(this.selectedModel.name);
    this.carService.setColor("");
  }

  onSelectColor(selectedColorId: number) {
      this.selectedColorId = selectedColorId;
      this.selectedColor = this.colors.find(color => color.id == selectedColorId)!.name;
      this.carService.setColor(this.selectedColor);
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

  getCar(): string {
    return this.carService.getCar();
  }

  title = 'zad5';
}