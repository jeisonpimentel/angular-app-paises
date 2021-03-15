import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  endPointApi : string = 'https://restcountries.eu/rest/v2';

  get params() {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' );
  }

  constructor(private http: HttpClient) { }

  buscarPaises( termino: string) : Observable<CountryResponse[]> {

    const url = `${this.endPointApi}/name/${termino}`;
    return this.http.get<CountryResponse[]>( url, {params: this.params});
  }

  buscarCapitales( termino: string ) : Observable<CountryResponse[]> {
    
    const url = `${this.endPointApi}/capital/${termino}`
    return this.http.get<CountryResponse[]>( url, {params: this.params} );
  }

  getPaisPorId( id: string ) : Observable<CountryResponse> {
    
    const url = `${this.endPointApi}/alpha/${id}`
    return this.http.get<CountryResponse>( url );
  }

  getPaisPorRegion( region: string ) : Observable<CountryResponse[]> {
    
    const url = `${this.endPointApi}/region/${region}`
    return this.http.get<CountryResponse[]>( url, {params: this.params});
  }
}
