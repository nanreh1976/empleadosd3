import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaractEmpleadoCComponent } from './caract-empleado-c/caract-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.services';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentsComponent } from './quienes-components/quienes-components.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

const appRoutes:Routes=[

{path:'', component:HomeComponentComponent },
{path:'proyectos', component:ProyectosComponentComponent },
{path:'quienes', component:QuienesComponentsComponent },
{path:'contacto', component:ContactoComponentComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaractEmpleadoCComponent,
    ProyectosComponentComponent,
    QuienesComponentsComponent,
    ContactoComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
