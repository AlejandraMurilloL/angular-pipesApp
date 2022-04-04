import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[]): Heroe[] {
    console.log(heroes);

    // retorno 1 si necesito cambiarlos de lugar 
    heroes = heroes.sort((a, b) => { return a.nombre > b.nombre ? 1 : -1 });
    
    return heroes;
  }

}
