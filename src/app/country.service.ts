import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Country {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries: Country[] = [
    {name: 'Germany', id: 1},
    {name: 'States', id: 2},
    {name: 'Australia', id: 3},
    {name: 'Qatar', id: 4}
  ];

  constructor() { }

  listByName(name: String): Observable<Country[]> {
    return of(this.countries.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1))
  }
}
