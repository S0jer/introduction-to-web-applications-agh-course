import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-travels-filter',
  templateUrl: './travels-filter.component.html',
  styleUrls: ['./travels-filter.component.css']
})
export class TravelsFilterComponent implements OnInit {
  @Input() countryList:string[]=[];
  @Input() daysList:[Date[]]=[[]];
  @Input() priceList:[number[]]=[[]];
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() newItemEvent4 = new EventEmitter<number[]>();
  @Output() newItemEvent3 = new EventEmitter<Date[]>();
  @Output() newItemEvent2 = new EventEmitter<string>();

  days='-';
  country='-';
  rating='-';
  price='-';
  
  constructor() { }

  ngOnInit(): void { }

  ratingFlag='';
  setRating(q:number){
    this.rating=q.toString();
    if(this.ratingFlag==q.toString()){ this.newItemEvent.emit(0); this.rating='-';}
    else{ this.newItemEvent.emit(q)}
    this.ratingFlag=this.rating;
  }
  countryFlag='';
  setCountry(q:string){
    this.country=q;
    if(this.countryFlag==q.toString()){ this.newItemEvent2.emit(''); this.country='-';}
    else{ this.newItemEvent2.emit(q); }
    this.countryFlag=this.country;
  }
  daysFlag='';
  setDays(q:Date, p:Date){
    this.days = q.toLocaleDateString()+'-'+p.toLocaleDateString();
    if(this.daysFlag == q.toLocaleDateString()+'-'+p.toLocaleDateString()){ this.newItemEvent3.emit([new Date(), new Date()]); this.days='-';}
    else{ this.newItemEvent3.emit([q,p]); }
    this.daysFlag=this.days;
  }
  
  priceFlag='';
  setPrice(q:number,p:number){
    this.price=q.toString()+'-'+p.toString();
    console.log(this.price);
    if(this.priceFlag==q.toString()+'-'+p.toString()){ this.newItemEvent4.emit([0,0]); this.price='-';}
    else{ this.newItemEvent4.emit([q,p]); }
    this.priceFlag=this.price;
  }

  isDateType(value: any): boolean {
      return value instanceof Date;
  }
}
