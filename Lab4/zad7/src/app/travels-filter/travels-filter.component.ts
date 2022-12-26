import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-travels-filter',
  templateUrl: './travels-filter.component.html',
  styleUrls: ['./travels-filter.component.css']
})
export class TravelsFilterComponent implements OnInit {
  @Input() countryList:string[]=[];
  @Input() daysList:string[]=[];
  @Input() priceList:[number[]]=[[]];
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() newItemEvent4 = new EventEmitter<number[]>();
  @Output() newItemEvent3 = new EventEmitter<string>();
  @Output() newItemEvent2 = new EventEmitter<string>();

  days='-';
  country='-';
  rating='-';
  price='-';

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
  setDays(q:string){
    // this.type=q;
    // if(this.typeFlag==q){ this.newItemEvent3.emit(''); this.type='--';}
    // else{ this.newItemEvent3.emit(q); }
    // this.typeFlag=this.type;
  }
  
  priceFlag='';
  setPrice(q:number,p:number){
    this.price=q.toString()+'-'+p.toString();
    if(this.priceFlag==q.toString()+'-'+p.toString()){ this.newItemEvent4.emit([0,0]); this.price='-';}
    else{ this.newItemEvent4.emit([q,p]); }
    this.priceFlag=this.price;
  }

  constructor() { }
  ngOnInit(): void {}

}
