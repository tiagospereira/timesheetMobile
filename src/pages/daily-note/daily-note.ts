import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'daily-note',
  templateUrl: 'daily-note.html'
})
export class DailyNotePage {

  event: any = {
    dateSelected: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
    hoursTotal: "08:00",
    timeNote: '00:00',
    note: ""
  }

  notesModel: Array<{ hour: any, note: string }> = [
    { hour: '02:00', note: 'Reunião com Cliente'},
    { hour: '01:00', note: 'Almoço'},
    { hour: '05:00', note: 'Criação de relatório'}
  ];

  sumHoursNote: any = '08:00';

  constructor(public navCtrl: NavController, public datepipe: DatePipe, public actShtCtr: ActionSheetController) {
  }

  removeItem(note:any) {
    console.log(note);
  }

  onClickCheckRemove(note: any) {
    let actionSheet = this.actShtCtr.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Excluir',
          icon: 'trash',
          handler: () => {
            this.removeItem(note);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }


}
