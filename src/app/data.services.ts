import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";


@Injectable()
export class Dataservices{

    constructor(private HttpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleados(){


        const token=this.loginService.getIdToken();
        return this.HttpClient.get('https://mis-clientespi-default-rtdb.firebaseio.com/datos.json?auth=' + token);





    }




    guardarEmpleados(empleados:Empleado[]){
        
        this.HttpClient.put('https://mis-clientespi-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

        Response=>console.log("se han guardado el empleado" + Response),
        
        error=> console.log("Error:" + error),
        

        );





    }

    actualizarEmpleado(indice:number,empleado:Empleado){

        let url='https://mis-clientespi-default-rtdb.firebaseio.com/datos/'+ indice + '.json';

        this.HttpClient.put(url,empleado).subscribe(

        Response=>console.log("se ha modificado el empleado: " + Response),
        
        error=> console.log("Error:" + error),
        

        );
        
    }
        eliminarEmpleado(indice:number){

            let url='https://mis-clientespi-default-rtdb.firebaseio.com/datos/'+ indice + '.json';
    
            this.HttpClient.delete(url).subscribe(
    
            Response=>console.log("se ha eliminado el empleado: " + Response),
            
            error=> console.log("Error:" + error),
            
    
            );
       

    }


}