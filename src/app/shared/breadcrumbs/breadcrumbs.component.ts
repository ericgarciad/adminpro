import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  //Creamos esta variable para poder dar de baja el subscritor cuand ose recargue la pagina o le
  //le demos al Logout
  public tituloSubs$: Subscription;

  //Para acceder a la data de pages.routing.ts y coger el titulo para verlo en la pagina
  //añadimos Router
  constructor(private router: Router) {

    this.tituloSubs$ = this.getDatTituloRuta()
      .subscribe(data => {
      console.log(data);
      this.titulo = data.titulo;
      //titulo de la pestaña del navegador
      document.title = `AdminPro - ${data.titulo}`
    })
  }

  ngOnDestroy(): void {
    //Damos de baja el subscriber al hacer logout
    this.tituloSubs$.unsubscribe();
    
  }

  getDatTituloRuta() {
    return this.router.events
      .pipe(
        //Como necesitamos acceder a la información de la data, hacemos un PIPE
        //que sirver para transformar el codigo que devuelve el Observable y ahora hacemos un
        //Filter para solo buscar la data que queremos
        //le decimos al filter que busque en event la instancia de ActivationEnd (es un parametro
        //ya definido por angular cuando usamos router.event y dentro esta la data con el titulo que
        //le hemos dado en pages.routing.ts)
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      );

  }

}
