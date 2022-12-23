import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Brand } from '../interfaces/brand';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private carService: CarService) { }

  brands: Brand[] = [];

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.carService.getBrands().subscribe((brands) => this.brands = brands);
  }

  setBrand(brand_id: number): void {
    this.carService.setBrand(brand_id);
  }
}
