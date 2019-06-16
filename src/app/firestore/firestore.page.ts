import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.page.html',
  styleUrls: ['./firestore.page.scss'],
})
export class FirestorePage implements OnInit {

  products: any[] = [];

  constructor() {
    this.getProducts();
  }

  createDocument() {
    firebase.firestore().collection('products').add({
      "product_name": "honorHoly",
      "product_price": "6000"
    }).then(()=>{
      console.log("Sucessfull");
    }).catch((err) => {
      console.log(err);
    });
  }
  getProducts() {
    firebase.firestore().collection('products')
  //  .where('product_price', '>=', '12000')
    .orderBy('product_name', 'asc')
    .get().then((queryDocumentSnapshot) => {
      console.log(queryDocumentSnapshot.docs);
      this.products = queryDocumentSnapshot.docs;
    }).catch((err) => {
      console.log(err);
    });
  }
  ngOnInit() {
  }

}
