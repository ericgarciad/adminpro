import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  //Recibimos valor con Input
  @Input() titulo: string = 'Sin titulo';

  public labels1: string[] = ['Frecos', 'Secos', 'Perfumería', 'Droguería']
  public labels2: string[] = ['Proveedor Interno', 'Proveedor Externo', 'Barrio', 'Proveedor Internacional']
  public labels3: string[] = ['Jefe Zona', 'Coordinador', 'Encargado', 'Empleado']
  public labels4: string[] = ['Habitual', 'Esporádico', 'Joven', 'Mayor']

  public data1 = [[20, 50, 15, 15]];
  public data2 = [[60, 20, 10, 10]];
  public data3 = [[10, 20, 30, 40]];
  public data4 = [[40, 10, 25, 25]];

  public colors1 = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059', '#808000'] }];
  public colors2 = [{ backgroundColor: ['#FFA07A', '#F08080', '#CD5C5C', '#F02059'] }];
  public colors3 = [{ backgroundColor: ['#00FF00', '#008000', '#00FFFF', '#008080'] }];
  public colors4 = [{ backgroundColor: ['#0000FF', '#000080', '#FF00FF', '#800080'] }];

}
