import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeriodModel } from '../../models/period.model';



@Injectable()
export class PeriodService {

  private storageName: string = "period"

  constructor(public storage: Storage) {
  }


  save(periodModel: PeriodModel): Promise<PeriodModel> {
    return this.storage.set(`${this.storageName}.${periodModel.date}`, periodModel);
  }


  delete(date:string): Promise<boolean> {
    return this.storage.remove(`${this.storageName}.${date}`)
      .then(() => true);
  }


  get(date:string): Promise<PeriodModel> {
    return this.storage.get(`${this.storageName}.${date}`);
  }

  calcTotalhours(periodModel: PeriodModel):Number{
    return  (Number(periodModel.timeEndOne) - Number(periodModel.timeStartOne))  + (Number(periodModel.timeEndTwo) - Number(periodModel.timeStartTwo));
  }
}
