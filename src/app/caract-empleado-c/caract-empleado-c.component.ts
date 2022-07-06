import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caract-empleado-c',
  templateUrl: './caract-empleado-c.component.html',
  styleUrls: ['./caract-empleado-c.component.css']
})
export class CaractEmpleadoCComponent implements OnInit {

  @Output() caractEmpl = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  agregaCaract(value:string) {
    this.caractEmpl.emit(value);
  }
}
