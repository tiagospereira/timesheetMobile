import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'daily-release',
  templateUrl: 'daily-release.html'
})
export class DailyReleasePage {

  public event: any = {
    dateSelected: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
    hoursTotal: "08:00",
    timeStartOne: '00:00',
    timeEndOne: '00:00',
    timeStartTwo: '00:00',
    timeEndTwo: '00:00'
  }

  constructor(public navCtrl: NavController, public datepipe: DatePipe) {
  }

}
