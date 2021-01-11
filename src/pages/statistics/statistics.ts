import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DarkskyProvider } from '../../providers/darksky/darksky';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})

export class StatisticsPage {

  darksky:any;
  location:{
    city:string,
    countrycode:string
  };
  lat : any;
  lng : any;
  chart:any = new Array(25);
  chart1:any = new Array(25);
  chart2:any = new Array(25);
  summary:string

  constructor(public navCtrl: NavController,private elementRef: ElementRef, public navParams: NavParams,private darkskyProvider:DarkskyProvider, private geo:Geolocation) {
  }

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then((pos) => {
      this.lat=pos.coords.latitude;
      this.lng=pos.coords.longitude;
      console.log(this.lat);
      console.log(this.lng);
      this.darkskyProvider.getWeather(this.lat, this.lng).subscribe(darksky => {
        this.darksky = darksky
        let temperature = this.darksky.hourly['data'].map(darksky => darksky.apparentTemperature)
        let humidity = this.darksky.hourly['data'].map(darksky => darksky.humidity)
        let precip = this.darksky.hourly['data'].map(darksky => darksky.precipProbability)

        let htmlRef = this.elementRef.nativeElement.querySelector(`#canvas`);
        let htmlRef2 = this.elementRef.nativeElement.querySelector(`#canvas2`);
        let htmlRef3 = this.elementRef.nativeElement.querySelector(`#canvas3`);

        this.chart = new Chart(htmlRef ,{
          type: 'line',
          data: {
            labels:['Now','+1','+2','+3','+4','+5','+6','+7','+8','+9','+10','+11','+12','+13','+14','+15','+16','+17','+18','+19','+20','+21','+22','+23','+24'],
            datasets:[
              {
                data: temperature,
                borderColor: '#3cba9f',
                fill:false,
              }
            ],
          }
        })
        this.chart1 = new Chart(htmlRef2 ,{
          type: 'line',
          data: {
            labels:['Now','+1','+2','+3','+4','+5','+6','+7','+8','+9','+10','+11','+12','+13','+14','+15','+16','+17','+18','+19','+20','+21','+22','+23','+24'],
            datasets:[
              {
                data: humidity,
                borderColor: '#3cba9f',
                fill:false,
              }
            ],
          }
        })
        this.chart2 = new Chart(htmlRef3 ,{
          type: 'line',
          data: {
            labels:['Now','+1','+2','+3','+4','+5','+6','+7','+8','+9','+10','+11','+12','+13','+14','+15','+16','+17','+18','+19','+20','+21','+22','+23','+24'],
            datasets:[
              {
                data: precip,
                borderColor: '#3cba9f',
                fill:false,
              }
            ],
          }
        })
      });
    }).catch((err)=>{console.log(err);
    });
  }

}
