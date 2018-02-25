import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwitterProvider } from '../../providers/twitter/twitter';
/**
 * Generated class for the TweetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tweets',
  templateUrl: 'tweets.html',
})
export class TweetsPage {
  
  q:string;
  message:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private _twitterProvider:TwitterProvider){
    this.message = "";
  }

  ionViewDidLoad() {}

  search(){
    if(this.q != undefined && this.q != ""){

    }else{
     this.message = "Ingrese una palabra";
    }
   }

}
