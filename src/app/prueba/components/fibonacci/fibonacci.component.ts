import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {
  public numero: number = 0;

  public primero = 0;
  public segundo = 0;
  public resultado = 0;
  advertencia = '';
  public loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  serieFibonacci(){
    debugger;
    let izquierda = 0, derecha = 1, fibo: number, s: number;
    if (this.numero < 100) {
      this.loading = true;
      setTimeout( () => {
        let i = 0;
        while (i <= this.numero){
          fibo = izquierda + derecha;
          this.primero = izquierda;
          this.segundo = derecha;
          this.resultado = fibo;
          izquierda = derecha;
          s = s + fibo;
          derecha = fibo;
          i++;
        }
        this.loading = false;
      }, 2000);
    } else {
      this.advertencia = 'Elige un número menor a 100';
      setTimeout( () => {
        this.advertencia = '';
      }, 3000);
    }

  }
  
}
