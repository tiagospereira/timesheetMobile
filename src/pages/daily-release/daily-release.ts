import { PeriodService } from './../../providers/period/period.service';
import { DateUtil } from './../../util/date.util';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { NavController } from 'ionic-angular';
import { PeriodModel } from '../../models/period.model';

@Component({
  selector: 'daily-release',
  templateUrl: 'daily-release.html'
})
export class DailyReleasePage {

  public period: any = {
    dateSelected: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
    hoursTotal: "00:00",
    timeStartOne: '00:00',
    timeEndOne: '00:00',
    timeStartTwo: '00:00',
    timeEndTwo: '00:00'
  }

  constructor(public navCtrl: NavController,
    public datepipe: DatePipe,
    public periodService: PeriodService) {
  }

  onChangeDateSelected() {
    let date = this.period.dateSelected;
    this.getPeriodFromDate(date);

  }

  ionViewDidLoad() {
    let date = this.period.dateSelected;
    this.getPeriodFromDate(date);

  }

  private getPeriodFromDate(date: any) {
    this.periodService.get(date)
      .then((response) => {
        if (response) {
          this.period.timeStartOne = DateUtil.convertHoursToSexagesimal(response.timeStartOne);
          this.period.timeEndOne = DateUtil.convertHoursToSexagesimal(response.timeEndOne);
          this.period.timeStartTwo = DateUtil.convertHoursToSexagesimal(response.timeStartTwo);
          this.period.timeEndTwo = DateUtil.convertHoursToSexagesimal(response.timeEndTwo);
          this.period.hoursTotal = DateUtil.convertHoursToSexagesimal(this.periodService.calcTotalhours(response));
        }
      });
  }

  onClickSave() {

    let newPeriod: PeriodModel = {
      date: this.period.dateSelected,
      timeStartOne: DateUtil.convertHoursToCentesimal(this.period.timeStartOne),
      timeEndOne: DateUtil.convertHoursToCentesimal(this.period.timeEndOne),
      timeStartTwo: DateUtil.convertHoursToCentesimal(this.period.timeStartTwo),
      timeEndTwo: DateUtil.convertHoursToCentesimal(this.period.timeEndTwo)

    }
    //TODO: incluir tratamento de erro
    this.periodService.save(newPeriod)
      .then((response) => {
        this.period.hoursTotal = DateUtil.convertHoursToSexagesimal(this.periodService.calcTotalhours(response));
      }).catch((error) => {

      })

  }


}
