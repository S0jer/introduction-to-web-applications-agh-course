import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { ModelComponent } from './model/model.component';
import { ColorComponent } from './color/color.component';
import { AppRoutingModule } from './app-routing.module';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ModelComponent,
    ColorComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
