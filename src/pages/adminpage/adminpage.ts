import { Component } from '@angular/core';

import { NavController, NavParams,MenuController } from 'ionic-angular';

@Component({
  selector: 'adminpage-page',
  templateUrl: 'adminpage.html'
})
export class AdminPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl : MenuController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.enableMenu();
  }


  enableMenu(){
    this.menuCtrl.enable(true,'adminmenu');
    this.menuCtrl.enable(false,'usermenu');  
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AdminPage, {
      item: item
    });
  }
}
