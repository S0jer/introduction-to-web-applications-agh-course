import { TravelData } from './../mock-data/travelData';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {


  travelList: TravelData[] = [];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels(): void {
    this.travelService.getTravels().subscribe({
      next: travels => this.travelList = travels,
      error: error => console.log(error)
    });
    this.findMinMax();
    this.findCountry();
    this.findDays();
    this.findPrice();
  }

  searchDays= [new Date(), new Date()];
  searchCountry='';
  searchRating=0;
  searchPrice=[0,0];

  setRating(q:number){
    this.searchRating=q;
  }
  setPrice(q:number[]){
    this.searchPrice=q;
  }
  setCountry(q:string){
    this.searchCountry=q;
  }
  setDays(q:Date[]){
    this.searchDays=q;
  }
  



  maxPrice=0;
  minPrice=0;
  tab:number[]=[];
  tab2:number[]=[];
  findMinMax(){ 
    this.maxPrice=Math.max.apply(Math, this.travelList.map(function(o) { return o.unitPrice; }).filter(o => typeof o === 'number'));
    this.minPrice=Math.min.apply(Math, this.travelList.map(function(o) { return o.unitPrice; }).filter(o => typeof o === 'number'));
  }

  countryList:string[]=[];
  findCountry(){
    this.countryList=[];
    for(const element of this.travelList){
      if (element instanceof TravelData) {
      let q = element.country;
      q = q[0].toUpperCase() + q.substring(1);

      if(!this.countryList.includes(q)) {
        this.countryList.push(q);
      }}
    }
  }


  dataDays: Date[] = [];
  dataDaysList: [Date[]] = [[]];
  findDays(){
    this.dataDays = [];
    for(const element of this.travelList){
      if (element instanceof TravelData) {
      let startDate: Date = element.startDate;
      let endDate: Date = element.endDate;
      let firstDay = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
      let lastDay = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 1);
      let checkIfExists = true;

      for(const dates of this.dataDaysList){
        if(this.isDateType(dates[0]) && this.isDateType(dates[1])){
          if(dates[0].getTime() === firstDay.getTime() && dates[1].getTime() === lastDay.getTime()) {
            checkIfExists =  false;
          }
        }
      }
      if(checkIfExists) this.dataDaysList.push([firstDay, lastDay]); this.dataDaysList.sort((a, b) => {
        if(a[0] instanceof Date && b[0] instanceof Date) return a[0].getTime() - b[0].getTime(); 
      else return 1;})
      }
    }
  }

  prices:number[]=[];
  priceList:[number[]]=[[]];
  findPrice(){
    this.prices=[];
    this.priceList=[[]];
    if(this.maxPrice!=0){
      let delta = this.maxPrice - this.minPrice;
      let m = this.minPrice;
      this.prices.push(0);
      this.prices.push(m);
      for(let i=1; i<5; i++){
        console.log(this.prices[this.prices.length - 1]);
        if(delta > i*20 && this.prices[this.prices.length - 1] < +m + +(i*300) && +m + +(i*300) < this.maxPrice){
          this.prices.push( +m + +(i*300) );
        }
      }
      this.prices.push(+this.maxPrice + +1);
      this.prices.push(1000000);
      for(let i=1; i<this.prices.length; i++){
        let x = this.prices[i-1];
        let y = this.prices[i]-1;
        this.priceList.push([x,y]);
      }
    }
    this.priceList.splice(0,1);
  }


  ratingUpdate(tab: number[]){
  }

  isDateType(value: any): boolean {
    return value instanceof Date;
  }
}
