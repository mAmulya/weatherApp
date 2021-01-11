
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  lat:any;
  lng:any;
  url:any;
  constructor(public navCtrl: NavController, private geo:Geolocation,) {

  }
  ionViewCanEnter(){
    this.geo.getCurrentPosition().then((pos) => {
      this.lat=pos.coords.latitude;
      this.lng=pos.coords.longitude;
      console.log(this.lat);
      console.log(this.lng);
      this.url='https://maps.darksky.net/@temperature,'+this.lat+','+this.lng+',11?amp;linkto=maps';
      (<HTMLIFrameElement>document.getElementById('if')).src = this.url;
    }).catch((err)=>{console.log(err);
    });
  }
}
