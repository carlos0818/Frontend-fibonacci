import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor( private _http: HttpClient ) { }

  loadFibonacci(number: string) {
    return this._http.get(`${ environment.URL_API }/fibonacci.php/loadFibonacci/${ number }`);
  }
}
