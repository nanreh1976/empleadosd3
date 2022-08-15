import { Injectable } from "@angular/core";
import { Dataservices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {
  actualizarEmpleadoServicio(indice: number, miEmpleado: Empleado) {
    
  }


    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:Dataservices){




    }

    setEmpleados(misEmpleados:Empleado[]){

        this.empleados=misEmpleados;

    }
    
    
    obternerEmpleados(){


    return this.dataService.cargarEmpleados();

    }
        empleados:Empleado[]=[]; // creo este array vacio para tomar los datos de la BD y no uso el array de abajo de este que estaba cargado

    /*empleados:Empleado[]=[

        new Empleado("juan","Díaz","Presidente",7500),
        new Empleado("Ana","Martín","Directora",5500),
        new Empleado("María","Fdez","Jefa de Seccion",3500),
        new Empleado("Laura","Lopez","Administrativo",2500),
        
        
        ];
        
*/
agregarEmpleadoServicio(empleado:Empleado){
 
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar :" + "\n" +
    empleado.nombre + "\n" + "Salario" + empleado.salario);
 
 
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);
}


encontrarEmpleado(indice:number){

    let empleado:Empleado=this.empleados[indice];

    return empleado;
}

actualizarEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado=this.empleados[indice];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

}

eliminarEmpleado(indice:number){

    this.empleados.splice(indice,1);

    

}

}