import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caract-empleado-c',
  templateUrl: './caract-empleado-c.component.html',
  styleUrls: ['./caract-empleado-c.component.css']
})
export class CaractEmpleadoCComponent implements OnInit {

  @Output() caractEmpl = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaract(value:string) {
    this.miServicio.muestraMensaje(value)
    this.caractEmpl.emit(value);
  }
}
