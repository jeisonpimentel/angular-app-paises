import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { CountryResponse } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: CountryResponse;

  constructor(
      private activatedRouter : ActivatedRoute,
      private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRouter.params
      .pipe(
        switchMap( ( param ) => this.paisService.getPaisPorId(param.id) ),
        tap( console.log) )
      .subscribe(pais => this.pais = pais);
  }

}
