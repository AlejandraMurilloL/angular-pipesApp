import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'alejandra';
  nombreUpper: string = 'ALEJANDRA';
  nombreCompleto: string = 'Maria aleJandra muriLLo LArA';

  fecha: Date = new Date();
}
