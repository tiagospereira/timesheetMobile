import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { NavController, NavParams } from 'ionic-angular';
import { DetailMonthlyReportPage } from '../detail-monthly-report/detail-monthly-report';

@Component({
  selector: 'monthly-report',
  templateUrl: 'monthly-report.html'
})
export class MonthlyReportPage {

  idModel: number = 0;
  namePerson: string = 'Fulano da Silva';
  monthSelected: any = this.datepipe.transform(new Date(), 'yyyy-MM');
  monthLimited: number = 180;
  sumHoursPointed: number = 188;
  overtime: number = 8;


  constructor(public navCtrl: NavController, public navParams: NavParams, public datepipe: DatePipe) {
    this.idModel = navParams.get('idModel');
  }

  onClickButton(event, id) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailMonthlyReportPage, {
      idModel: id
    });
  }

}
