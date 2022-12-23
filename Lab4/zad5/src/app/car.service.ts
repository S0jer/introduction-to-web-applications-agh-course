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
  brand_id = 0;
  model_id = 0;
  color_id = 0;

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

  setBrand(brand_id: number): void {
    this.brand_id = brand_id;
  }

  setModel(model_id: number): void {
    this.model_id = model_id;
  }

  setColor(color_id: number): void {
    this.color_id = color_id;
  }
}
