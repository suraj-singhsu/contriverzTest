import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
// import { FacebookLogin } from '@capacitor-community/facebook-login';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxjVjPXsMVtrVHzk4rhgOpryHsMjBFvIQ",
  authDomain: "contriverztest.firebaseapp.com",
  projectId: "contriverztest",
  storageBucket: "contriverztest.appspot.com",
  messagingSenderId: "718976251969",
  appId: "1:718976251969:web:70cc55f41c364bccb1eec0",
  measurementId: "G-EM8EPWCNM5"
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    this.startApp();
  }

  async startApp(){
    const app = initializeApp(firebaseConfig);
    // console.log("app:", app);
    // if (Capacitor.isNativePlatform) {
    //   initializeAuth(app, {
    //     persistence: indexedDBLocalPersistence
    //   });
    // }
    
    // await FacebookLogin.initialize({ appId: '523032070008988' });
  }
}
