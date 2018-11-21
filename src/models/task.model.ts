import { DateUtil } from "../util/date.util";

export class TaskModel {

  public id: Number;
  constructor(
      public date:string,
      public timeNote:Number,
      public note:string
  ) {
    this.id = DateUtil.generateUTCInSecond();
  }

}
