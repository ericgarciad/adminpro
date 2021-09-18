import { NgModule } from '@angular/core';
//Importamos el modulo de Router para lsa rutas
import { RouterModule, Routes } from '@angular/router';

//Importamos nuestros componentes para añadir a las rutas
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

//Configuramos las rutas de mi aplicación (importamos Routes de angular router)
const routes: Routes = [
  //Crearemos las rutas hijas protegidas dentro de este componente:
  {
    path: '', component: PagesComponent,
    children: [
      //Rutas protegidas
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, //si no hay ruta ira a dashboard
    ]
  },

  //Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  
  { path: '**', component: NopagefoundComponent }, //Cualquier otra ruta ira al 404
];


@NgModule({
  declarations: [],
  //Ahora usamos las rutas i especificamos el RouterModule
  imports: [
    //forRoot es para rutas principales i forchild para rutas hijas y mandamos el arreglo de routes
    //Recordar de añadir este modulo a app.module.ts para que funcione
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
