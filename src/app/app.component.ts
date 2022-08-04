import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.services';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Nomina de empleados';

 constructor(private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService) {
// this.empleados=this.empleadoService.empleados; // en el array vacio tenes que almacenar la info en el array
// comento el constructor this empleados para usar el metodo Oninit 

}
  ngOnInit(): void {
    this.empleados=this.empleadoService.empleados;
  }

 empleados:Empleado[]=[]; // se agrega un array vacio para poder inyectar datos al array

//new Empleado("juan","Díaz","Presidente",7500),
//new Empleado("Ana","Martín","Directora",5500),
//new Empleado("María","Fdez","Jefa de Seccion",3500),
//new Empleado("Laura","Lopez","Administrativo",2500),


//];

agregarEmpleado(){
let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
this.miServicio.muestraMensaje("Nombre del Empleado: "+ miEmpleado.nombre);
this.empleadoService.agregarEmpleadoServicio(miEmpleado);



}



cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;


}