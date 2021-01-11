import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DarkskyProvider } from '../../providers/darksky/darksky';

@IonicPage()
@Component({
  selector: 'page-cloud',
  templateUrl: 'cloud.html',
})
export class CloudPage {

  darksky:any;
  lat:any;
  lng:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private darkskyProvider:DarkskyProvider, private geo:Geolocation) {
    this.darksky = navParams.get('darksky');
  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then((pos) => {
      this.lat=pos.coords.latitude;
      this.lng=pos.coords.longitude;
      console.log(this.lat);
      console.log(this.lng);
      this.darkskyProvider.getWeather(this.lat, this.lng).subscribe(darksky => {this.darksky = darksky, console.log(this.darksky)});
    }).catch((err)=>{console.log(err);
    });
  }

}
