import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface Country {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries: Country[] = [
    {id: 1, name: 'Germany'},
    {id: 2, name: 'States'},
    {id: 3, name: 'Australia'},
    {id: 4, name: 'Qatar'},
    {id: 5, name: 'Brazil'},
  ];

  constructor() {
  }

  listByName(name: String): Observable<Country[]> {
    return of(this.countries.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1))
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      );
  }
}
