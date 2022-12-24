import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
