import { Component, Input, OnInit } from '@angular/core';
import { RegionalBloc, CountryResponse } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
  button {
    margin-right: 5px;
  }

`]
})
export class PorRegionComponent implements OnInit {

  regiones    : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  RegionActiva: string = '';
  @Input() paises : CountryResponse[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClassCss( region : string) : string {
    return ( region === this.RegionActiva) 
            ? 'btn btn-primary' 
            : 'btn btn-outline-primary';
  }

  regionActivada( region: string) : void {
    this.RegionActiva = region;

    this.paisService.getPaisPorRegion( region )
      .subscribe(paises => {
        this.paises = paises;
      });
  }

}
