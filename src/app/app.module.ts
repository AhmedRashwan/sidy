import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {UserPage} from '../pages/userpage/userpage';
import {AdminPage} from '../pages/adminpage/adminpage';
import {LoginPage} from '../pages/login/login';
import {PostDetailsPage} from '../pages/postdetails/postdetails';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyDsZcMH9oUtQOP_886AQQ3AuoIqvNW6dPE",
    authDomain: "testpro-8e8b9.firebaseapp.com",
    databaseURL: "https://testpro-8e8b9.firebaseio.com",
    storageBucket: "testpro-8e8b9.appspot.com",
    messagingSenderId: "342353676730"
};
@NgModule({
  declarations: [
    MyApp,
    UserPage,
    AdminPage,
    LoginPage,
    PostDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   MyApp,
    UserPage,
    AdminPage,
    LoginPage,
    PostDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
