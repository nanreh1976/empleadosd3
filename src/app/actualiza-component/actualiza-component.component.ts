import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.services';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService) { }

  empleados:Empleado[]=[];

  ngOnInit(): void {

    this.empleados=this.empleadoService.empleados;
    
    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadoService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }
  volverHome(){

    this.router.navigate(['']);
    
    
    }
    
    actualizaEmpleado(){
      let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      // this.miServicio.muestraMensaje("Nombre del Empleado: "+ miEmpleado.nombre);
      this.empleadoService.actualizarEmpleado(this.indice,miEmpleado);
      
      this.router.navigate(['']);
      
      }
      eliminaEmpleado(){
        //let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
        // this.miServicio.muestraMensaje("Nombre del Empleado: "+ miEmpleado.nombre);
        this.empleadoService.eliminarEmpleado(this.indice,);
        
        this.router.navigate(['']);
        
        }
        
      
      
      cuadroNombre:string="";
      cuadroApellido:string="";
      cuadroCargo:string="";
      cuadroSalario:number=0;
      indice:number;
      
      
    
}
