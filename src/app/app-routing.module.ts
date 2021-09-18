import { NgModule } from '@angular/core';
//Importamos el modulo de Router para lsa rutas
import { RouterModule, Routes } from '@angular/router';

//Crearemos las rutas hijas protegidas dentro de su respectivo componente y lo importamos aqui:
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


//Configuramos las rutas de mi aplicación (importamos Routes de angular router)
const routes: Routes = [

  // path: '/dashborard' PagesRouting
  // path: '/auth' AuthRouting
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //si no hay ruta ira a dashboard

  { path: '**', component: NopagefoundComponent }, //Cualquier otra ruta ira al 404
];


@NgModule({
  declarations: [],
  //Ahora usamos las rutas i especificamos el RouterModule
  imports: [
    //forRoot es para rutas principales i forchild para rutas hijas y mandamos el arreglo de routes
    //Recordar de añadir este modulo a app.module.ts para que funcione
    RouterModule.forRoot(routes),
    PagesRoutingModule, //Rutas hijas de Pages (rutas privadas "con autenticacion")
    AuthRoutingModule //Rutas hijas de Auth (rutas publicas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
