import { LeavesickPage } from './../leavesick/leavesick';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivityviewPage } from '../activityview/activityview';
import { QrCodePaPage } from '../qr-code-pa/qr-code-pa';
import { BmiviewPage } from '../bmiview/bmiview';
import { WelcomePage } from '../welcome/welcome';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the MenuparentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuparent',
  templateUrl: 'menuparent.html',

})
export class MenuparentPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
  }

activityView(){
  this.navCtrl.push(ActivityviewPage)
}

Qrview(){
  this.navCtrl.push(QrCodePaPage)
}

Bmiview(){
  this.navCtrl.push(BmiviewPage)

}
Leavesic(){
  this.navCtrl.push(LeavesickPage)

}

logout(){
  this.storage.clear();
  // this.storage.get('teacher_id').then((val) => {
 
  //   if(val == null){
     this.navCtrl.push(WelcomePage)
  //     console.log(val);
  //   }
  // })
 
}



}//end class
