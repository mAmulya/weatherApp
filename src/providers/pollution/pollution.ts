import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PollutionProvider {
  apikey='77488ae53cbc4ecdae7769e14b725fc8';
  url: string;

  constructor(public http: HttpClient) {
    console.log('Hello PollutionProvider Provider');
    this.url = "https://api.breezometer.com/air-quality/v2/current-conditions?key="+this.apikey+"&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information&";
  }

  getPollution(lat: string | number,lng: string | number){
    return this.http.get(this.url+'lat='+lat+'&lon='+lng).map(res => res);;
  }

}
