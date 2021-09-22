import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})  //Utilizamos el  implements OnDestroy para pdoer usar el Unsuscriber y eliminar la suscripción
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription

  constructor() {



    //Para que empeice a trabajar hemos de ponerle .subscribe()
    this.retornaObservable().pipe( //El pipe sirve para reinventar o transformar el codigo
      retry(1) //El retry es para que el codigo siga intentando ejecutarse aunque falle (le pasamos las veces que queremos que lo intente)

    ).subscribe(
      valor => console.log("Subs: " + valor), //suscribe se compone de NEXT()
      (err) => console.warn('Error:', err), // de ERROR()
      () => console.info('Obs terminado') //y de Complete que no se especifica nada simplmenete () =>
    );

    /////////////////////////////////////////////////////////
    this.intervalSubs = this.retornaIntervalo()
      .subscribe(
        (valor) => console.log(valor)
      )

  }
  //Esto va a terminar con el observable y lo va a eliminar de la suscripción y dejará de ejecutarse
  // Cuando el usuario se vaya de la web por ejemplo y volverá a iniciarse cuando entre
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    //el interval() es un observable, le pasamos el tiempo
    return interval(500)
      .pipe(
        //El take le decimos cuantas emisiones del observable necesitamos y el hara las que digamos
        take(10),
        //EL map nos sirve para transformar el valor como queramos en este caso le sumamos 1 al valor
        map(valor => valor + 1),
        //Filtramos con una condicion en este caso solo mostrará los numeros pares
        filter(valor => (valor % 2 === 0) ? true : false)
      );

  }

  //Observables
  //Creamos función con un observable y nos suscribimos 
  retornaObservable(): Observable<number> {

    let i = -1;

    return new Observable<number>(observer => {


      const intervalo = setInterval(() => {

        i++;
        observer.next(i); //Con el next emitimos el siguiente valor

        if (i === 4) { //asi paramos el Observer
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {

          observer.error('Llegó al valor de 2')
        }

      }, 1000)

    });
  }



}
