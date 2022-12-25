import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelsComponent } from './travels/travels.component';


const routes: Routes = [
  { path: '', redirectTo: 'travels', pathMatch: 'full' },
  { path: 'travels', component: TravelsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
