import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTweetPage } from './detail-tweet';

@NgModule({
  declarations: [
    DetailTweetPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailTweetPage),
  ],
})
export class DetailTweetPageModule {}
