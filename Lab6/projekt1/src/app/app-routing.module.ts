import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { SingleTravelDetailsComponent } from './single-travel-details/single-travel-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { TravelsBasketComponent } from './travels-basket/travels-basket.component';
import { MyTravelsHistoryComponent } from './my-travels-history/my-travels-history.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'myTravelsHistory', component: MyTravelsHistoryComponent, canActivate: [AuthGuard]},
  { path: 'travels', component: TravelsComponent, canActivate: [AuthGuard]},
  { path: 'addTravel', component: AddTravelComponent , canActivate: [AuthGuard]},
  { path: 'basket', component: TravelsBasketComponent, canActivate: [AuthGuard]},
  { path: 'travel/:name', component: SingleTravelDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
