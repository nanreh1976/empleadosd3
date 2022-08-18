import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";

import firebase from 'firebase/compat/app';  //importamos firebase porque la necesitamos usar en el login

import 'firebase/compat/auth'  //hay que importar firebase auth0 para validar


@Injectable()

 export class LoginService{

    constructor(private router:Router){}  // para direccionar a una pagina importa el router

    token:string; // firma o codigo de seguridad encabezamiento, la informacion y la firma, pero dice que token es var tipo string

    login(email:string, password:string){  //crea el metodo para tomar los datos

        firebase.auth().signInWithEmailAndPassword(email, password).then(  //inicia firace y hace signIn con los datos email y pass

            Response=>{

                firebase.auth().currentUser?.getIdToken().then(     //autentifica con firebase.auth el usuario y con su token

                    token=>{


                        this.token=token;                   //guarda los datos del token en la variable token
                        this.router.navigate(['/']);        //ya validado te manda al home
                        }
            )
        }

    );
    

    }

    getIdToken() {

        return this.token;   //devuelve el token 
      } 

 }