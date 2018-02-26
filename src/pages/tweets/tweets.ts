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
  listTweets:any;
  isLoading:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private _twitterProvider:TwitterProvider, private _storeProvider:StoreProvider){
    this.message = "";
    this.isLoading = false;
  }

  ionViewDidLoad() {}

    search(){
      
      if(this.q != undefined && this.q != ""){
        this.message = "";
        this.isLoading = true;
        this._storeProvider.getDato().then((tokenStore:any) => {

          if(tokenStore == null){
            this._twitterProvider.getTokenForAutentication().subscribe((rest:any) => {
              this.token = rest.access_token;
              this._storeProvider.setDato(this.token);
              this.getAlltweets(this.token);           
            },error=>{
              alert("Error en la peticion");
              this.isLoading = false;
              console.log(error);
            })
          }else{
            this.token = tokenStore;
            this.getAlltweets(this.token); 
          }
      
        });
      }else{
      this.message = "Ingrese una palabra";
      }
  }

  getAlltweets(token){
    this._twitterProvider.getAlltweets(this.q,token).subscribe((rest:any) => {
      this.listTweets = rest.statuses;
    },error => {
      this.isLoading = false;
      alert("Error en la peticion");
      console.log(error);
    },() => {
      this.isLoading = false;
    });
  }

  showDetail(tweet:any){
    this.navCtrl.push('DetailTweetPage',{tweet:tweet});
  }

  eventHandler(keyCode) {
    if(keyCode == 13){
      this.search();
    }
  }

}
