import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACCESS_TOKEN_AUTHENTICATION,URL_GENERATE_TOKEN_AUTHENTICATION
,URL_GENERATE_TOKEN_AUTHENTICATION_PROXY } from '../../util/const-util';
import { URLSearchParams } from '@angular/http';
import { Platform } from 'ionic-angular';

/*
  Generated class for the TwitterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TwitterProvider {

  constructor(public http: HttpClient,private _plataform:Platform) {
  }

  getTokenForAutentication(){
    let URL = "";
    if(!this._plataform.is('mobileweb'))
     URL = URL_GENERATE_TOKEN_AUTHENTICATION;
     else
     URL = URL_GENERATE_TOKEN_AUTHENTICATION_PROXY;  
     

    const params = new URLSearchParams();
    params.set('grant_type','client_credentials');

    const headers = new HttpHeaders(
      {
        'Content-Type':'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization':'Basic  '+ACCESS_TOKEN_AUTHENTICATION
      });

    return this.http.
    post(
      'auth',params.toString(),{headers:headers}
    );
  }

  getAlltweets(q:string,token:string){
    const URL = '/apiTwitter/';
    const headers = new HttpHeaders(
      {
        'Authorization':'Bearer'+" "+token
      });

     return this.http.get(URL+'search/tweets.json?q='+q,{headers:headers});
  }

}
