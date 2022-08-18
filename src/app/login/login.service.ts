import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";

import firebase from 'firebase/compat/app';  //importamos firebase porque la necesitamos usar en el login

import 'firebase/compat/auth'  //hay que importar firebase auth0


@Injectable()

 export class LoginService{

    constructor(private router:Router){}

    token:string; // firma o codigo de seguridad encabezamiento, la informacion y la firma

    login(email:string, password:string){

        firebase.auth().signInWithEmailAndPassword(email, password).then(

            Response=>{

                firebase.auth().currentUser?.getIdToken().then(

                    token=>{


                        this.token=token;
                        this.router.navigate(['/']);
                        }
            )
        }

    );
    

    }

    getIdToken() {

        return this.token;
      } 

 }