import { Component, OnInit } from '@angular/core';

class Polindromo {
  public valor: number;
  public primo: boolean;
  public primero: boolean;
  constructor(obj?: _Polindromo) {
    this.valor = obj && obj.valor ? obj.valor : 0;
    this.primo = obj && obj.primo ? obj.primo : false;
    this.primero = obj && obj.primero ? obj.primero : false;
  }
}

interface _Polindromo {
  valor?: number;
  primo?: boolean;
  primero?: boolean;
}

@Component({
  selector: 'app-polindromos',
  templateUrl: './polindromos.component.html',
  styleUrls: ['./polindromos.component.scss']
})
export class PolindromosComponent implements OnInit {
  public lista: Polindromo[] = [];
  public ganador = 0;

  constructor() { }

  ngOnInit(): void {
    this.intervalo(10, 1000);
  }

  palindromo(numero: number): Boolean {
    let i = 0;
    let textNumero = '' + numero;
    for (i = 0; i < textNumero.length / 2; i++) {
      if (textNumero[i] != textNumero[textNumero.length - i - 1]) {
        break;
      }
    }
    if (i + 1 > textNumero.length / 2) {
      return true;
    } else {
      return false;
    }
  }

  primo(numero: number) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }

  intervalo(inicio: number, termina: number) {
    let primero = true;
    for (let contador = inicio; contador <= termina; contador++) {
      if (this.palindromo(contador)) {
        if (this.primo(contador)) {
          this.lista.push(new Polindromo({valor: contador, primo: true, primero}));
          if (primero) {
            this.ganador = contador;
            primero = false;
          }
        } else {
          this.lista.push(new Polindromo({valor: contador}));
        }
      }
    }
  }

}
