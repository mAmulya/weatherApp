import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DarkskyProvider {
  apikey='3df797b4eafbe34d7c0873f563151828';
  url;
//https://cors-anywhere.herokuapp.com/
  constructor(public http: HttpClient) {
    console.log('Hello WeatherDataProvider Provider');
    this.url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+this.apikey+'/';
  }

  getWeather(lat, lng){
    return this.http.get(this.url+lat+', '+lng).map(res => res);;
  }
}
