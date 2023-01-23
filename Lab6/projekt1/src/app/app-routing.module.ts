import { EditTravelsMenuComponent } from './edit-travels-menu/edit-travels-menu.component';
import { EditTravelFormComponent } from './edit-travel-form/edit-travel-form.component';
import { MenagoGuard } from './guard/menago.guard';
import { LogGuard } from './guard/log.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdmGuard } from './guard/adm.guard';
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
  { path: 'login', component: LoginComponent, canActivate: [LogGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [LogGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'myTravelsHistory', component: MyTravelsHistoryComponent, canActivate: [AuthGuard]},
  { path: 'travels', component: TravelsComponent},
  { path: 'addTravel', component: AddTravelComponent , canActivate: [MenagoGuard]},
  { path: 'basket', component: TravelsBasketComponent, canActivate: [AuthGuard]},
  { path: 'travel/:name', component: SingleTravelDetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdmGuard]},
  { path: 'editTravelMenu', component: EditTravelsMenuComponent, canActivate: [MenagoGuard] },
  { path: 'editTravel/:name', component: EditTravelFormComponent, canActivate: [MenagoGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
