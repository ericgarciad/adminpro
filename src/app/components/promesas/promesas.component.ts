import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    })

    /*const promesa = new Promise((resolve, rejects) => {
      
      if(false){
        resolve("Hola mundo");

      }else{
        rejects('Algo salió mal');
      }

    });

    promesa.then((mensaje) =>{
      console.log(mensaje);
    }).catch((error)=>{
      console.log(error)
    })

    console.log("FIn de init")
*/
    

  }


  getUsuarios() {
    const promesa = new Promise((resolve, rejects) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    });
    return promesa;
  }



}
