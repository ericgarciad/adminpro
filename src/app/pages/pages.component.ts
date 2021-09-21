//Estas paginas se mostrarán cuando yo esté autenticado.

import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//Para que typescript n ose queje al usar una función global (Esta dentro de assets/js/custom.js)
//hacemos el declare
declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

//Creamos acceso al Service
  constructor(private setigsService: SettingsService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
