import { Component } from '@angular/core';
import { NavController,MenuController,NavParams } from 'ionic-angular';

@Component({
  selector: 'postdetails-page',
  templateUrl: 'postdetails.html'
})
export class PostDetailsPage {
    selecteditems : any;

  constructor(public navCtrl: NavController,private menuCtrl : MenuController,private nav: NavParams) {
    this.enableMenu();
    this.selecteditems = this.nav.get('profiledata');
  }

  enableMenu(){
    this.menuCtrl.enable(true,'usermenu');
    this.menuCtrl.enable(false,'adminmenu');
     
  }

  addComment(){
    
  }
  

}
