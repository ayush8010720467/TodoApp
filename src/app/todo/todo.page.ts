import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  userId: string;
  todos: any[] = [];
  constructor(private navCtrl: NavController) { 
    this.userId = firebase.auth().currentUser.uid;
    this.getTodos();
  }

  ngOnInit() {
  }
  getTodos(){
    firebase.firestore().collection("todos")
    .where("owner","==",this.userId)
    .onSnapshot((querySnapshot) =>{
      this.todos = querySnapshot.docs;
    });
  }
  gotoAddTodo() {
    this.navCtrl.navigateForward(['/add-todo']);
  }
}
