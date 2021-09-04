import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FibonacciService } from './services/fibonacci.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loading: boolean = false;

  form: FormGroup;

  constructor( private fb: FormBuilder, private _fibonacciService: FibonacciService ) {
    this.form = this.fb.group({
      number: ['', [Validators.required, Validators.min(1)]]
    });
  }

  send() {
    this.loading = true;

    this._fibonacciService.loadFibonacci(this.form.value.number).subscribe( (resp: any) => {
      Swal.fire({
        title: 'Resultado',
        text: `El número del término de la sucesión Fibonacci ${ this.form.value.number } es ${ resp.data }`,
        confirmButtonColor: '#1d89e2'
      });

      this.loading = false;
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${ error.error.response }`,
        confirmButtonColor: '#1d89e2'
      });

      this.loading = false;
    });
  }

}
