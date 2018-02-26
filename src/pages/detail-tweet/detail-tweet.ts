import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailTweetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-tweet',
  templateUrl: 'detail-tweet.html',
})
export class DetailTweetPage {
  
  tweet:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tweet = navParams.get('tweet');
    this.tweet.created_at = this.tweet.created_at.replace('+0000',' ');
  }

  ionViewDidLoad() {}

}
