import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Alejandra mUrilLo';
  valor: number = 1000;
  persona: any = {
    nombre: 'Alejandra'
  };

  mostrarValores(): void {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.persona);
  }
}
