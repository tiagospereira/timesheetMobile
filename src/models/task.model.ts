import { getUTCInSecond } from './../util/date.util';

export class Task {

  public id: number;

  constructor( public dateTime : Date,
               public title : string) {
    this.id = getUTCInSecond()

  }

}
