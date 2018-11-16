import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  settingModel: any = { name: '', hourTotalMonth: 0 };
  currentNumber: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.selectedItem = navParams.get('item');

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SettingPage, {
      item: item
    });
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
    console.log(this.settingModel.name);
    console.log(this.settingModel.hourTotalMonth);
  }
}
