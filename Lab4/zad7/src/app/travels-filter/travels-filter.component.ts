import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-travels-filter',
  templateUrl: './travels-filter.component.html',
  styleUrls: ['./travels-filter.component.css']
})
export class TravelsFilterComponent implements OnInit {
  @Input() countrylist:string[]=[];
  @Input() typelist:string[]=[];
  @Input() pricelist:[number[]]=[[]];
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() newItemEvent4 = new EventEmitter<number[]>();
  @Output() newItemEvent3 = new EventEmitter<string>();
  @Output() newItemEvent2 = new EventEmitter<string>();

  type='-';
  country='-';
  rating='-';
  price='-';

  ratingflag='';
  setRating(q:number){
    this.rating=q.toString();
    if(this.ratingflag==q.toString()){ this.newItemEvent.emit(0); this.rating='-';}
    else{ this.newItemEvent.emit(q)}
    this.ratingflag=this.rating;
  }
  countryflag='';
  setCountry(q:string){
    this.country=q;
    if(this.countryflag==q.toString()){ this.newItemEvent2.emit(''); this.country='-';}
    else{ this.newItemEvent2.emit(q); }
    this.countryflag=this.country;
  }
  typeflag='';
  setType(q:string){
    this.type=q;
    if(this.typeflag==q){ this.newItemEvent3.emit(''); this.type='--';}
    else{ this.newItemEvent3.emit(q); }
    this.typeflag=this.type;
  }
  priceflag='';
  setPrice(q:number,p:number){
    this.price=q.toString()+'-'+p.toString();
    if(this.priceflag==q.toString()+'-'+p.toString()){ this.newItemEvent4.emit([0,0]); this.price='-';}
    else{ this.newItemEvent4.emit([q,p]); }
    this.priceflag=this.price;
  }

  constructor() { }
  ngOnInit(): void {}


}
