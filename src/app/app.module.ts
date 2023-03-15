import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";

import {  provideFirebaseApp, getApp, initializeApp, FirebaseAppModule } from '@angular/fire/app';
import { AuthModule } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    // CustomPipe,
    // SingleProductComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    // provideAuth(() => initializeAuth(getApp(), { persistence: indexedDBLocalPersistence })),
    AuthModule,
    FirebaseAppModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
