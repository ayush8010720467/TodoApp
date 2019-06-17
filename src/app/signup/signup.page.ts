import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;
  constructor(private tostCtrl: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  signup() {
    // using the firebase sdk to create new account for the user
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((userdata) => {
      // navigate the user to the app page
      console.log(userdata);
    }).catch((err) => {
      this.tostCtrl.create({
        message: err.message,
        duration: 3000
      }).then((toast) => {
        toast.present();
      });
    });
  }
  goToLogin() {
      this.navCtrl.back();
  }

}
