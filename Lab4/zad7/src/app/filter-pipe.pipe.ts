import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {


  transform(travelList: Data[], country:string, type:string, price:number[], rating:number): Data[] { 
    if (!travelList) return []; 
    if (rating!=0){
      travelList = travelList.filter(travel => {
      return ( travel['rating']==rating ); 
    });}

    if (price[1]!=0){
      travelList = travelList.filter(travel => {
      return (  travel['price']>=price[0] && travel['price']<=price[1] ); 
    });}

    country=country.toLowerCase();
    type=type.toLocaleLowerCase();
    return travelList.filter(travel => {
        return ( travel['country'].toLowerCase().includes(country) && travel['type'].toLowerCase().includes(type) ); 
      });
  }

}
