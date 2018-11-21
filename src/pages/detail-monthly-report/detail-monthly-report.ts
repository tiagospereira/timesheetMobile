import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { NavController, NavParams } from 'ionic-angular';
import { MonthlyReportPage } from '../monthly-report/monthly-report';

@Component({
    selector: 'detail-monthly-report',
    templateUrl: 'detail-monthly-report.html'
})
export class DetailMonthlyReportPage {

    idModel: number = 0;
    namePerson: string = 'Fulano da Silva';
    monthSelected: any = this.datepipe.transform(new Date(), 'yyyy-MM');
    sumHoursPointed: number = 188;

    pointedModel: Array<{ date: any, note: string }> = [
        { date: '01/01/2018 02:00', note: 'Reunião com Cliente' },
        { date: '01/01/2018 01:00', note: 'Almoço' },
        { date: '01/01/2018 05:00', note: 'Criação de relatório' }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public datepipe: DatePipe) {
        this.idModel = navParams.get('idModel');
    }

    onClickButton(event, id) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(MonthlyReportPage, {
            idModel: id
        });
    }

}
