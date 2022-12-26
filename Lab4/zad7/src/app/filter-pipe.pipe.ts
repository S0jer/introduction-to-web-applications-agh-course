import { TravelData } from './mock-data/travelData';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {


  transform(travelList: TravelData[], country:string, days:Date[], price:number[], rating:number): TravelData[] { 
    if (!travelList) return [];
    if (rating!=0){
      travelList = travelList.filter(travel => {
        const ratingSum = travel['ratings'].reduce((accumulator: any, current: any) => {
          return accumulator + current;}, 0);
      return ( Math.floor((ratingSum / travel['ratings'].length)) == rating ); 
    });}

    if (price[1]!=0){
      travelList = travelList.filter(travel => {
      return (  travel.unitPrice >=price[0] && travel.unitPrice <=price[1] ); 
    });}
    
    country=country.toLowerCase();
    if (days[0].getTime() !== days[1].getTime()) {
      return travelList.filter(travel => {
        return ( travel.country.toLowerCase().includes(country)
        && (days[0] <= travel.startDate && travel.endDate <= days[1])); 
      });
    } else return travelList.filter(travel => {
      return ( travel.country.toLowerCase().includes(country))});
  }
}
