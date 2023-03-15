import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, UserCredential, User } from '@angular/fire/auth';
// import { AngularFireAuth } from "@angular/fire/auth";
// import { HttpClient } from '@angular/common/http';
// import {
//   FacebookLogin,
//   FacebookLoginResponse,
//   FacebookLoginPlugin,
// } from '@capacitor-community/facebook-login';
// import { registerWebPlugin } from '@capacitor/core';
// registerWebPlugin(FacebookLogin);
import { isPlatform } from '@ionic/angular';
// const FACEBOOK_PERMISSIONS = [
//   'email',
//   'user_birthday',
//   'user_photos',
//   'user_gender',
// ];
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // fbLogin: FacebookLoginPlugin;  
  user: any = null;
  token: any = null;
  // const result = await (<FacebookLoginResponse>(
  //   FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS })
  // ));
  constructor(
    private afAuth: Auth
    // private angularFireAuth: AngularFireAuth
    // private http: HttpClient,
    // public fbLogin: FacebookLoginPlugin
  ) {
    // this.setupFbLogin();
  }

  // async setupFbLogin() {
  //   if (isPlatform('desktop')) {
  //     this.fbLogin = FacebookLogin;
  //   } else {
  //     // Use the native implementation inside a real app!
  //     const { FacebookLogin } = Plugins;
  //     this.fbLogin = FacebookLogin;
  //   }
  // }

  login_with_google(){
    // this.angularFireAuth.auth
    signInWithEmailAndPassword(this.afAuth, 'user1@yopmail.com', 'sR123456').then((red) =>{
      console.log("red:", red);
      
    }).catch((err) => {
      console.log("err:", err);
      
    });
  }
  login_with_facebook(){
   
  }

  // async getCurrentToken() {
  //   const result = await this.fbLogin.getCurrentAccessToken();

  //   if (result.accessToken) {
  //     this.token = result.accessToken;
  //     this.loadUserData();
  //   } else {
  //     // Not logged in.
  //   }
  // }

  // async loadUserData() {
  //   const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
  //   this.http.get(url).subscribe(res => {
  //     this.user = res;
  //   });
  // }

  // async logout() {
  //   await this.fbLogin.logout();
  //   this.user = null;
  //   this.token = null;
  // }

}
