import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Nomina de empleados';

 constructor(private miServicio:ServicioEmpleadosService) {}

empleados:Empleado[]=[

new Empleado("juan","Díaz","Presidente",7500),
new Empleado("Ana","Martín","Directora",5500),
new Empleado("María","Fdez","Jefa de Seccion",3500),
new Empleado("Laura","Lopez","Administrativo",2500),


];

agregarEmpleado(){
let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
this.miServicio.muestraMensaje("Nombre del Empleado: "+ miEmpleado.nombre);
this.empleados.push(miEmpleado);



}



cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;


}