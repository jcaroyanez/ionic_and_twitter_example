import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreProvider {

  constructor(public http: HttpClient, public _storage:Storage) {
    console.log('Hello StoreProvider Provider');
  }

   /// guardar el token
 setDato(user){
  this._storage.set('token',user);
}

/// recuperar el token
getDato(){
  return this._storage.get('token');
}

/// remover el token
remove(){
  this._storage.remove('token');
}

}
