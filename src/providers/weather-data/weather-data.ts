import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherDataProvider {
  apikey='0535a94269005b580e1233822251fea2';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherDataProvider Provider');
    this.url = 'https://api.openweathermap.org/data/2.5/weather?appid='+this.apikey+'&';
  }

  getWeather(lat, lng){
    return this.http.get(this.url+'lat='+lat+'&lon='+lng).map(res => res);;
  }
}
