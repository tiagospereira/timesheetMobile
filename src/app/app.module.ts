import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DailyReleasePage } from '../pages/daily-release/daily-release';
import { DailyNotePage } from '../pages/daily-note/daily-note';
import { MonthlyReportPage } from '../pages/monthly-report/monthly-report';
import { DetailMonthlyReportPage } from '../pages/detail-monthly-report/detail-monthly-report';
import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
