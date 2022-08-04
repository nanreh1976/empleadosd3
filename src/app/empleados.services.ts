import { Empleado } from "./empleado.model";

export class EmpleadosService {

    empleados:Empleado[]=[

        new Empleado("juan","Díaz","Presidente",7500),
        new Empleado("Ana","Martín","Directora",5500),
        new Empleado("María","Fdez","Jefa de Seccion",3500),
        new Empleado("Laura","Lopez","Administrativo",2500),
        
        
        ];
        

agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
}

}