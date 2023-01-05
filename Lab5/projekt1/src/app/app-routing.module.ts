import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { TravelsBasketComponent } from './travels-basket/travels-basket.component';
import { MyTravelsHistoryComponent } from './my-travels-history/my-travels-history.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'myTravelsHistory', component: MyTravelsHistoryComponent},
  { path: 'travels', component: TravelsComponent },
  { path: 'addTravel', component: AddTravelComponent },
  { path: 'basket', component: TravelsBasketComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
