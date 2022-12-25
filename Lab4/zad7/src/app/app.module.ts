import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelManagementComponent } from './travel-management/travel-management.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelsComponent,
    TravelDetailsComponent,
    TravelManagementComponent,
    AddTravelComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
