import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

@Input() emplist:Empleado 
@Input() ind:number

  constructor() { }

  ngOnInit(): void {
  }
  arrayCaract = [''] ;
  agregarCarat(newCarac:string){
    this.arrayCaract.push(newCarac);
  }
}
