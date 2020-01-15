import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the QrCodePaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-pa',
  templateUrl: 'qr-code-pa.html',
})
export class QrCodePaPage {
  QrImageArray = '';
  qrId='';


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage) {
    this.loadqrimageData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePaPage');
  }

  loadqrimageData(){
    this.storage.get('qrId').then((val) => {
      // console.log(val);
      let url = "http://localhost/servicephp/getqrcode.php?qrId="+val;
      this.http.get(url).subscribe((data: any) => {
        this.QrImageArray = data.student;
      
         console.log(data);
        
      }, (error) => { console.log(error) });
    })

    

  }


}//end class
