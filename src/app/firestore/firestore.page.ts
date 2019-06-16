import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.page.html',
  styleUrls: ['./firestore.page.scss'],
})
export class FirestorePage implements OnInit {

  constructor() {
    firebase.firestore().collection('products').add({
      "product_name": "honorHoly",
      "product_price": "6000"
    }).then(()=>{
      console.log("Sucessfull");
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
