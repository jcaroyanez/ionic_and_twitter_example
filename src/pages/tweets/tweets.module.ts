import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TweetsPage } from './tweets';

@NgModule({
  declarations: [
    TweetsPage,
  ],
  imports: [
    IonicPageModule.forChild(TweetsPage),
  ],
})
export class TweetsPageModule {}
