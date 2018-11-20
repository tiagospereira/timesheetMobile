
export const getUTCInSecond = function () : number {
  let now = new Date;
  let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  return Math.floor(utc_timestamp / 1000);
}



