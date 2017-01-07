import { Component } from '@angular/core';
import { NavController,Alert,Loading } from 'ionic-angular';
import {UserPage} from '../userpage/userpage';
import {AdminPage} from '../adminpage/adminpage';
import {AngularFire,AuthProviders,AuthMethods,FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  profiledata:FirebaseListObservable<any>;
  loading : Loading;
  ProfileType: string;
  email : string;
  constructor(public navCtrl: NavController ,private af : AngularFire) {
  }

  login(email,password){
    this.af.auth.login({
                        email: email,
                        password: password,
                        }, 
                        {
                          provider: AuthProviders.Password,
                          method: AuthMethods.Password,
    }).then((success) => {
    this.af.auth.complete();
    this.getProfileData();
    
    })
    .catch((error) => {
      console.log("Firebase failure: " + JSON.stringify(error));
    });
    
  }
  
  
getProfileData(){
  console.log(this.email);
     this.profiledata =  this.af.database.list(('/profile'),{query: {
    orderByChild: 'email',
    equalTo: this.email
    }});
    while(this.ProfileType == null){
      this.profiledata.subscribe(users => {
      this.ProfileType="admin";
    })}
    ;
}
  Navigate(ProfileType){
    if(this.ProfileType == "user"){
        this.navCtrl.push(UserPage,{
        item : this.profiledata
        });
        this.navCtrl.setRoot(UserPage);
    }
    else if (this.ProfileType == "admin"){
       this.navCtrl.push(AdminPage,{
       item : this.profiledata
        });
        this.navCtrl.setRoot(AdminPage);
    }
  }




}
