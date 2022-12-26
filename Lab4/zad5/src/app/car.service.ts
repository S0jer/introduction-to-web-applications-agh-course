import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BRANDS } from './mock-data/mock-brands';
import { MODELS } from './mock-data/mock-models';
import { COLORS } from './mock-data/mock-colors';
import { Brand } from './interfaces/brand';
import { Model } from './interfaces/model';
import { Color } from './interfaces/color';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  colorName = '';
  brandName = '';
  modelName = '';



  getBrands(): Observable<Brand[]> {
    const brands = of(BRANDS);
    return brands;
  }

  getModels(): Observable<Model[]> {
      const models = of(MODELS);
      return models;
  }

  getColors(): Observable<Color[]> {
    const colors = of(COLORS);
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
