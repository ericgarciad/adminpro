import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

//Creamos este modulo para agrupar todas las paginas relacionadas con paginas y que el app.module.ts 
//quede más limpio y todo mas mantenible

@NgModule({
  declarations: [    
    DashboardComponent,    
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [ //Los hemos de exportar para usarlos fuera de este modulo
    DashboardComponent,    
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    AppRoutingModule 
  ]


})
export class PagesModule { }
