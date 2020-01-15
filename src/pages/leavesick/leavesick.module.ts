import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeavesickPage } from './leavesick';

@NgModule({
  declarations: [
    LeavesickPage,
  ],
  imports: [
    IonicPageModule.forChild(LeavesickPage),
  ],
})
export class LeavesickPageModule {}
