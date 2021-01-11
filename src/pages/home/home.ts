import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherDataProvider } from '../../providers/weather-data/weather-data';
import { Geolocation } from '@ionic-native/geolocation';
import { DarkskyProvider } from '../../providers/darksky/darksky';
import { PollutionProvider } from '../../providers/pollution/pollution';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  darksky:any;
  pollution:any;
  location:{
    city:string,
    countrycode:string
  };
  temp:string;
  imgurl:string;

  lat : any;
  lng : any;
  arrData;
  constructor(public navCtrl: NavController, private weatherDataProvider:WeatherDataProvider, private darkskyProvider:DarkskyProvider, private geo:Geolocation,private pollutionProvider:PollutionProvider,public afd : AngularFireDatabase) {
    // this.navCtrl.push(Cloud, {
    //   darksky: this.darksky,
    // });
  }

  ionViewCanEnter(){
    this.geo.getCurrentPosition().then((pos) => {
      this.lat=pos.coords.latitude;
      this.lng=pos.coords.longitude;
      console.log(this.lat);
      console.log(this.lng);
      this.darkskyProvider.getWeather(this.lat, this.lng).subscribe(darksky => {this.darksky = darksky, console.log(this.darksky)});
      this.weatherDataProvider.getWeather(this.lat, this.lng).subscribe(weather => {this.weather = weather, this.imgurl = 'http://openweathermap.org/img/w/'+this.weather.weather[0].icon+'.png',console.log(this.weather)});
      this.pollutionProvider.getPollution(this.lat, this.lng).subscribe(pollution => {this.pollution = pollution, console.log(this.pollution)});
    }).catch((err)=>{console.log(err);
    });
  }

  btnAddClicked1(){
     this.afd.list("/myItems").push(this.weather);
  }

  btnAddClicked2(){
     this.afd.list("/myItems").push(this.darksky);
  }
  

}
