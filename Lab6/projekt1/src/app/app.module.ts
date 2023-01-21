import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirestoreModule } from "@angular/fire/firestore";

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelManagementComponent } from './travel-management/travel-management.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { StarsComponent } from './stars/stars.component';
import { TravelsFilterComponent } from './travels-filter/travels-filter.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TravelsBasketComponent } from './travels-basket/travels-basket.component';
import { HomeComponent } from './home/home.component';
import { MyTravelsHistoryComponent } from './my-travels-history/my-travels-history.component';
import { SingleTravelDetailsComponent } from './single-travel-details/single-travel-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TravelsComponent,
    TravelDetailsComponent,
    TravelManagementComponent,
    AddTravelComponent,
    StarsComponent,
    TravelsFilterComponent,
    FilterPipePipe,
    NavBarComponent,
    TravelsBasketComponent,
    HomeComponent,
    MyTravelsHistoryComponent,
    SingleTravelDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
