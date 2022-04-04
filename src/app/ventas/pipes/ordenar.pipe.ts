import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = 'ninguno'): Heroe[] {

    // retorno 1 si necesito cambiarlos de lugar 

    switch(ordenarPor){
      case 'nombre': 
        return heroes.sort((a, b) => { return a.nombre > b.nombre ? 1 : -1 }); 
      case 'vuela': 
        return heroes.sort((a, b) => { return a.vuela > b.vuela ? -1 : 1 }); 
      case 'color': 
        return heroes.sort((a, b) => { return a.color > b.color ? 1 : -1 }); 
      default:
        return heroes;
    }
  }
}
