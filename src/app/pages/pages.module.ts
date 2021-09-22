import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from '../components/promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



//Creamos este modulo para agrupar todas las paginas relacionadas con paginas y que el app.module.ts 
//quede más limpio y todo mas mantenible

@NgModule({
  declarations: [    
    DashboardComponent,    
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    RxjsComponent,
  ],
  exports: [ //Los hemos de exportar para usarlos fuera de este modulo
    DashboardComponent,    
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ]


})
export class PagesModule { }
