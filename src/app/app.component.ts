import { Component } from '@angular/core';
import { Empleado } from './empleado.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Nomina de empleados';

empleados:Empleado[]=[

new Empleado("juan","Díaz","Presidente",7500),
new Empleado("Ana","Martín","Directora",5500),
new Empleado("María","Fdez","Jefa de Seccion",3500),
new Empleado("Laura","Lopez","Administrativo",2500),

];
}