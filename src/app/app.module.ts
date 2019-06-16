import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAJfXnenPJ1CsWi5FPU-0eRf0opJaFP-Gw',
  authDomain: 'todoapp-9d87f.firebaseapp.com',
  databaseURL: 'https://todoapp-9d87f.firebaseio.com',
  projectId: 'todoapp-9d87f',
  storageBucket: 'todoapp-9d87f.appspot.com',
  messagingSenderId: '267041492144',
  appId: '1:267041492144:web:f31cafe62b573d2f'
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
