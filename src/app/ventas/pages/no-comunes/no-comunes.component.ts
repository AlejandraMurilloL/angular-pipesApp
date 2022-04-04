import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Alejandra';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['Alejandra', 'Brayan', 'Zully', 'Juan', 'Marlen'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(): void {
    this.nombre = 'Brayan';
    this.genero = 'masculino';
  }

  eliminarCliente(): void {
    this.clientes.pop();
  }

  // KeyValuePipe
  persona = {
    nombre: 'Alejandra',
    edad: 23,
    ciudad: 'Sogamoso, Colombia'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6,7...

  valorPromesa =  new Promise((resolve, rejec) => {
    setTimeout(() => {
      resolve("Tenemos data de promesa");
    }, 3500);
  });

}
