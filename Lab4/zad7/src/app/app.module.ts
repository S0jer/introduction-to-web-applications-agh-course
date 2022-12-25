import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelManagementComponent } from './travel-management/travel-management.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TravelsComponent,
    TravelDetailsComponent,
    TravelManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
