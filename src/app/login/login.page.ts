import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) =>{
      console.log(user);
    });
  }
  doLogin() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((userObject) => {
      console.log(userObject);
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).then((toast) => {
        toast.present();
      });
    });
  }
  goToSignup() {
    this.navCtrl.navigateForward(['/signup']);
  }

}
