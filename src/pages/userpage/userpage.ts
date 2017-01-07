import { Component } from '@angular/core';
import {PostDetailsPage} from '../postdetails/postdetails';
import { NavController,MenuController,AlertController,NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'userpage-page',
  templateUrl: 'userpage.html'
})
export class UserPage {
  profiledata:FirebaseListObservable<any>;
  username : string;
  constructor(public navCtrl: NavController,private menuCtrl : MenuController,private alertCtrl:AlertController,public af: AngularFire,public navpar:NavParams) {
    af.database.list('');
 
  }

 

  enableMenu(){
    this.menuCtrl.enable(true,'usermenu');
    this.menuCtrl.enable(false,'adminmenu'); 
  }

  postDetailsPage(){
    this.navCtrl.push(PostDetailsPage,{
      item: this.profiledata
    });
  }

addComment() {
    let comment = this.alertCtrl.create({
      title: 'Comment',
      message: "Enter a Comment for this Post",
      inputs: [
        {
          name: 'title',
          placeholder: 'insert A comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log(data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    comment.present();
  }


}
