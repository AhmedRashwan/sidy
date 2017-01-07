import { Component } from '@angular/core';

import { NavController, NavParams,MenuController } from 'ionic-angular';

@Component({
  selector: 'addpost-page',
  templateUrl: 'addpost.html'
})
export class AddPostPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl : MenuController) {
   
  }


  enableMenu(){
    this.menuCtrl.enable(true,'adminmenu');
    this.menuCtrl.enable(false,'usermenu');  
  }

}
