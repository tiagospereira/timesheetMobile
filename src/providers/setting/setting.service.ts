import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {  SettingModel } from '../../models/setting.model';

@Injectable()
export class SettingService{

  private  storageName:string = "setting";

  constructor(public storage: Storage) {
  }

  get(): Promise<SettingModel> {
    return this.storage.get(this.storageName);
  }

  save(setting: SettingModel): Promise<SettingModel> {
    return this.storage.set(this.storageName, setting);
  }

}
