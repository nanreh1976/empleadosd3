import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";


@Injectable()
export class Dataservices{

    constructor(private HttpClient:HttpClient){}

    cargarEmpleados(){


        return this.HttpClient.get('https://mis-clientespi-default-rtdb.firebaseio.com/datos.json');





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