import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrScanthreePage } from '../qr-scanthree/qr-scanthree';
import { CheckstudythreePage } from '../checkstudythree/checkstudythree';
import { SaveSickthreePage } from '../save-sickthree/save-sickthree';
import { StudentviewthreePage } from '../studentviewthree/studentviewthree';
import { WelcomePage } from '../welcome/welcome';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the MenuteacherthreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuteacherthree',
  templateUrl: 'menuteacherthree.html',
})
export class MenuteacherthreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuteacherthreePage');
    console.log(this.storage);

  }
  QrScanthree(){
    this.navCtrl.push(QrScanthreePage)
  }
  Checkstudythree(){
    this.navCtrl.push(CheckstudythreePage)
  }
  SaveSickthree(){
    this.navCtrl.push(SaveSickthreePage)
  }
  Studentviewthree(){
    this.navCtrl.push(StudentviewthreePage)
  }

  
  clearst(){

   
  
    this.storage.clear();
    // this.storage.get('teacher_id').then((val) => {
   
    //   if(val == null){
       this.navCtrl.push(WelcomePage)
    //     console.log(val);
    //   }
    // })
   
}

}//end class
