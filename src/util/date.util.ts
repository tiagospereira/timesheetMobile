import padLeft from 'lodash.padLeft'
export class DateUtil {
  public static generateUTCInSecond(): number {
    let now = new Date;
    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    return Math.floor(utc_timestamp / 1000);
  }


  public static convertHoursToCentesimal(hoursSexagesimal): number {
    try {
      //hours  Sexa 00:00 to Cent 00,00
      if (hoursSexagesimal) {
        let hour = parseInt(hoursSexagesimal.split(':')[0]);
        let minute = parseInt(hoursSexagesimal.split(':')[1]);
        let ret = ((minute / 60).toFixed(2)).split('.')[1];
        return Number(`${hour}.${ret}`);
      }
      return 0.0;
    } catch
    {
      return 0.0;
    }
  }

  public static convertHoursToSexagesimal(hoursCentesimal): string {
    try {

      //hours to Cent 00,00 to Sexa 00:00
      if (hoursCentesimal) {
        let hour = 0;
        let minute = 0;
        let ret  ='';
        if (hoursCentesimal.toString().indexOf('.') > -1) {
          hour = parseInt(hoursCentesimal.toString().split('.')[0]);
          minute = parseInt(hoursCentesimal.toString().split('.')[1]);
          ret = (((minute / 100) * 60).toFixed(0));
        } else {
          hour = hoursCentesimal;
        }
        return `${padLeft(hour.toString(), 2, '0')}:${padLeft(ret, 2, '0')}`;
      }
      return '00:00';
    } catch {
      console.log('catch');

      return '00:00';
    }
  }



}


