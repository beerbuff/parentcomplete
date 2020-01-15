import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { MenuparentPage } from '../menuparent/menuparent';

/**
 * Generated class for the LeavesickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leavesick',
  templateUrl: 'leavesick.html',
})
export class LeavesickPage {
  student = '';
  term = '';
  qrId = '';

  student_id: any;
  term_id: any;
  leave_description: any;
  leave_startdate: any;
  leave_enddate: any;
  days: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private storage: Storage) {
    this.leavesick()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavesickPage');
  }

  leavesick() {

    this.storage.get('qrId').then((val) => {

      // console.log(val);
      let url = "http://localhost/servicephp/getleavesick.php?qrId=" + val;
      this.http.get(url).subscribe((data: any) => {
        this.term = data.term;
        this.student = data.student;

        console.log(data);

      }, (error) => { console.log(error) });
    })
  }

  postJson(student_id, leave_description, leave_startdate, leave_enddate, days, term_id) 
  {


    this.storage.get('qrId').then((val) => {
      console.log("teacher_id is", val);
      let jsonData = { student_id: student_id, leave_description: leave_description, leave_startdate: leave_startdate, leave_enddate: leave_enddate, days: days, term_id: term_id, qrId: val }; //สร้าง obj
      console.log(jsonData);
      let url = 'http://localhost/servicephp/saveleavesick.php'; //ให้ไป post ที่  url
      this.http.post(url, jsonData).subscribe((data: any) => {
        // console.log(jsonData);
        alert("บันทึกเรียบร้อยแล้ว");
        this.navCtrl.push(MenuparentPage)
        
        console.log(jsonData);

      });

      //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj 
      //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
    })


  }

}//end class
