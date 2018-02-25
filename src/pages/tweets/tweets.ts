import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwitterProvider } from '../../providers/twitter/twitter';
import { StoreProvider } from '../../providers/store/store';
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
  token:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private _twitterProvider:TwitterProvider, private _storeProvider:StoreProvider){
    this.message = "";
  }

  ionViewDidLoad() {}

    search(){
      if(this.q != undefined && this.q != ""){

        this._storeProvider.getDato().then((tokenStore:any) => {

          if(tokenStore == null){
            this._twitterProvider.getTokenForAutentication().subscribe((rest:any) => {
              this.token = rest.access_token;
              this._storeProvider.setDato(this.token);
              this.getAllTwitter(this.token);           
            },error=>{
              console.log(error);
            })
          }else{
            this.token = tokenStore;
            this.getAllTwitter(this.token); 
          }
      
        });
      }else{
      this.message = "Ingrese una palabra";
      }
  }

  getAllTwitter(token){
  }

}
