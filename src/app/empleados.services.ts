import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {


    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){




    }

    empleados:Empleado[]=[

        new Empleado("juan","Díaz","Presidente",7500),
        new Empleado("Ana","Martín","Directora",5500),
        new Empleado("María","Fdez","Jefa de Seccion",3500),
        new Empleado("Laura","Lopez","Administrativo",2500),
        
        
        ];
        

agregarEmpleadoServicio(empleado:Empleado){
 
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar :" + "\n" +
    empleado.nombre + "\n" + "Salario" + empleado.salario);
 
 
    this.empleados.push(empleado);
}

}