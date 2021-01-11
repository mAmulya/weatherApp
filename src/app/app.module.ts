import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-chartjs';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatisticsPage } from '../pages/statistics/statistics';
import { CloudPage } from '../pages/cloud/cloud';
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherDataProvider } from '../providers/weather-data/weather-data';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { DarkskyProvider } from '../providers/darksky/darksky';
import { PollutionProvider } from '../providers/pollution/pollution';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
//import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import xrange from "highcharts/modules/xrange";
xrange(Highcharts);
Exporting(Highcharts);
export function highchartsFactory() {
  return Highcharts;
}

var config = {
    apiKey: "AIzaSyCPQOvl1uowpQixSxfc3E1pqMGKC6ewKjM",
    authDomain: "weatherapp-737b4.firebaseapp.com",
    databaseURL: "https://weatherapp-737b4.firebaseio.com",
    projectId: "weatherapp-737b4",
    storageBucket: "weatherapp-737b4.appspot.com",
    messagingSenderId: "661750121043"
  };

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    CloudPage,
    StatisticsPage,
    ChatPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    ChartModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    CloudPage,
    StatisticsPage,
    ChatPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HighchartsStatic, useFactory: highchartsFactory }, // add as factory to your provider
    WeatherDataProvider,
    Geolocation,
    DarkskyProvider,
    PollutionProvider
  ]
})
export class AppModule {}
