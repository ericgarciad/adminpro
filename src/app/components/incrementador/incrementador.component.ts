import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  //Utilizamos el OnInit para establecer un valor al termianr de crear el componente
  ngOnInit() {
   this.btnClass= `btn ${this.btnClass}`;
  }

  //Hacemos el color del botón de manera condicional para reutilizar el componente
  @Input() btnClass: string = 'btn-primary';

  //Para indicar que peude recibir valor del padre ponemos @Input
  //Podemos renombrar dentro de Input el nombre de la variable i llamarla valor

  //@Input('valor') progreso: number = 50;
  //Recibimos valor con Input
  @Input('valor') progreso: number = 50;

  //Enviamos valor con Output
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100); //emitimos el valor
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0);  //emitimos el valor
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);  //emitimos el valor
  }

  onChange(event: number){

    if(event >= 100){
      this.progreso = 100;
    }else if (event <= 0){
      this.progreso = 0;
    }else{
      this.progreso = event;
    }

    this.valorSalida.emit(this.progreso);
  }
}
