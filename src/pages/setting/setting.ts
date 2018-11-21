import { SettingModel } from './../../models/setting.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingService } from '../../providers/setting/setting.service';


@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  settingModel: SettingModel = { name: '', hourTotalMonth: 0 };
  currentNumber: number = 0;

  constructor(public navCtrl: NavController,
    public settingService: SettingService) {
  }

  ionViewDidLoad() {
    this.settingService.get()
      .then((settingModel: SettingModel) => {
        if(settingModel)  this.settingModel = settingModel;
      })
  }

  onClickIncrement() {
    this.settingModel.hourTotalMonth++;
  }

  onClickDecrement() {
    if (this.settingModel.hourTotalMonth == 0) {
      this.settingModel.hourTotalMonth = 0;
    } else {
      this.settingModel.hourTotalMonth--;
    }
  }

  onClickSave() {
    //TODO: revisar mensanges e validações
    this.settingService.save(this.settingModel)
      .then((response) => {
        console.log(response);

      }).catch((error) => {

        console.log(error);

      });
  }
}
