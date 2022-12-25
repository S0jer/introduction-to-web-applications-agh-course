import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {


  transform(dishlist: Data[], country:string, type:string, price:number[], rating:number): Data[] { 
    if (!dishlist) return []; 
    if (rating!=0){
      dishlist = dishlist.filter(dish => {
      return ( dish['rating']==rating ); 
    });}

    if (price[1]!=0){
      dishlist = dishlist.filter(dish => {
      return (  dish['price']>=price[0] && dish['price']<=price[1] ); 
    });}

    country=country.toLowerCase();
    type=type.toLocaleLowerCase();
    return dishlist.filter(dish => {
        return ( dish['country'].toLowerCase().includes(country) && dish['type'].toLowerCase().includes(type) ); 
      });
  }

}
