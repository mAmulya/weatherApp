import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  arrdata = []
  myinput;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afd : AngularFireDatabase) {
    this.afd.list('/chat/').valueChanges().subscribe(_data =>{
      this.arrdata = _data;
      console.log(this.arrdata);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  btnclicked(){
    console.log(this.myinput);
    this.afd.list('/chat/').push(this.myinput);
    console.log('x');
  }

}
