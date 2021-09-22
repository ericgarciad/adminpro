//Este modulo hace referencia todas las rutas correspondientes a PAGES

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from '../components/promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [

    //Crearemos las rutas hijas protegidas dentro de este componente:
    {
        //Para crear path personalizado como /dashboard/progress o /dashboard/grafica1
        //y poder así hacer más facil el decir que todo lo de dashboard sea privado y solo con
        //autenticación podemos entrar, hacemos lo siguiente:
        //Ponemos como path en vez de vació path:'' con path:'dashboard'
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            //Rutas protegidas
            //Entonces aqui dejamos dashboard vació por defecto para que sea la ruta principal
            { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'} },
            { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Grafica #1'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de tema'} },
            { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RXJS'} },
            //Esto ya no nos sirve aqui, ahora lo usamos en app-routing.module.ts
            //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //si no hay ruta ira a dashboard
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
