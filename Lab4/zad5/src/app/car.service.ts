import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ColorData } from './interfaces/colorData';
import { ModelData } from './interfaces/modelData';
import { BrandData } from './interfaces/brandData';

import { default as BRANDS } from './mock-data/mock-brandsY.json';
import { default as MODELS } from './mock-data/mock-modelsY.json';
import { default as COLORS } from './mock-data/mock-colorsY.json';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  colorName = '';
  brandName = '';
  modelName = '';


  getBrands(): Observable<BrandData[]> {
    const brands = of(BRANDS.brands);
    return brands;
  }

  getModels(): Observable<ModelData[]> {
      const models = of(MODELS.models);
      return models;
  }

  getColors(): Observable<ColorData[]> {
    const colors = of(COLORS.colors);
    return colors;
  }

  setColor(color: any): void {
    this.colorName = color;
  }

  setBrand(brand: any): void {
    this.brandName = brand;
  }
  setModel(model: any): void {
    this.modelName = model;
  }

  getCar(): string{ 
    return this.brandName + " " + this.modelName + " " + this.colorName;
  }
}
