import { Component, Input } from '@angular/core';
import { CountryResponse } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent  {

  @Input() paises : CountryResponse[] = [];

}
