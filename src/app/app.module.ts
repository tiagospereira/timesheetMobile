import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { DatePipe, LocationStrategy, PathLocationStrategy } from '@angular/common'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/*Native*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*Services*/
import { SettingService } from '../providers/setting/setting.service';
import { PeriodService} from '../providers/period/period.service';
import { TaskService } from '../providers/task/task.service';


/*Pages /Component */
import { MyApp } from './app.component';
import { DailyReleasePage } from '../pages/daily-release/daily-release';
import { DailyNotePage } from '../pages/daily-note/daily-note';
import { MonthlyReportPage } from '../pages/monthly-report/monthly-report';
import { DetailMonthlyReportPage } from '../pages/detail-monthly-report/detail-monthly-report';
import { SettingPage } from '../pages/setting/setting';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    DailyReleasePage,
    DailyNotePage,
    MonthlyReportPage,
    DetailMonthlyReportPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__dynamicbox',
      storeName: 'TimeSheetDB',
      driverOrder: ['indexeddb', 'websql', 'localstorage']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DailyReleasePage,
    DailyNotePage,
    MonthlyReportPage,
    DetailMonthlyReportPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide:LocationStrategy, useClass: PathLocationStrategy},
    SettingService,
    PeriodService,
    TaskService
  ]
})
export class AppModule {}
