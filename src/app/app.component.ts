import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: any;

 constructor() {

}
  ngOnInit(): void {


    firebase.initializeApp({


      apiKey: "AIzaSyAHJb6LlMK4hgGbIQgQ_FRz-Wga6GK3uok",
      authDomain: "mis-clientespi.firebaseapp.com",



    })
 
  }

 


}