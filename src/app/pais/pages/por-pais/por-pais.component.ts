import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountryResponse } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino  : string = '';
  hayError : boolean = false;
  paises   : CountryResponse[] = [];

  constructor(private paisService : PaisService) { }

  buscar( termino : string) {
    this.hayError = false; 
    this.termino = termino;

    this.paisService.buscarPaises( this.termino )
      .subscribe( paises => {
        this.paises = paises;
        console.log( paises );
      },  
      err => {
        this.hayError = true;
        console.info('¡Tenemos un error!');
        this.paises = [];
      });
  }

  sugerencias( termino : string ){
    this.hayError = false;
    // TODO: Definir las sugerencias
  }

}
