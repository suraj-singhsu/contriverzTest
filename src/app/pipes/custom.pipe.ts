import { Pipe, PipeTransform } from '@angular/core';
// import { DatePipe } from '@angular/common';
import * as moment from 'moment';
@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(date: Date | any): string {
    date = moment(date).format('dddd, MMM D YYYY, h:mm:ss a'); //new Date(date);  // if orginal type was a string
    console.log("date:", date);
    
    // date.setDate(date.getDate());
    return date;
    // return new DatePipe('en-US').transform(date, format);
  }
}
