import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

//Graficas Angular
import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonutgraficaComponent } from './donutgrafica/donutgrafica.component';
import { PromesasComponent } from './promesas/promesas.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonutgraficaComponent,
  ],
  exports: [
    IncrementadorComponent,
    DonutgraficaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
