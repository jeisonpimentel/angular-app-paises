import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino  : string = '';
  hayError : boolean = false;
  capitales   : CountryResponse[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino : string) {
    this.hayError = false; 
    this.termino = termino;

    this.paisService.buscarCapitales( this.termino )
      .subscribe( capitales => {
        this.capitales = capitales;
        console.log( capitales );
      },  
      err => {
        this.hayError = true;
        console.info('¡Tenemos un error!');
        this.capitales = [];
      });
  }

  sugerencias( termino : string ){
    this.hayError = false;
    // TODO: Definir las sugerencias
  }



}
