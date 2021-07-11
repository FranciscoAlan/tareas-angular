import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refactorizacion',
  templateUrl: './refactorizacion.component.html',
  styleUrls: ['./refactorizacion.component.scss']
})
export class RefactorizacionComponent implements OnInit {
  public codigo = `
  void Main()
  {
    var watch = System.Diagnostics.Stopwatch.StartNew();
    var k = 0;
    int y = 0;
    var num = 0;
    float result;
    var asistentes = 1000000000;
    num = asistentes;
    k = 2;
    y = num - k;

    result = Factorial(num) / Factorial(k) * Factorial(y);

    watch.Stop();

    Console.WriteLine($"El numero de saludos fúe {result}");
    Console.WriteLine($"Tardo  {watch.ElapsedMilliseconds}");
  }
  
  public float Factorial(int x) {
    float fact = 1;
    for(var i = 1; i <= x; i++)
    {
          fact*= i;
    }
    return fact;
  }
`;
  public resultadoAnterior = 0;
  public resultadoNuevo = 0;
  public tiempoAnterior = 0;
  public tiempoNuevo = 0;
  public asistentes = 0;
  public k = 0;
  public y = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.y = this.asistentes - this.k;
    this.anterior();
    this.nuevo();
  }

  anterior() {
    const watchInicio = performance.now();
    this.resultadoAnterior = this.factorial(this.asistentes) / this.factorial(this.k) * this.factorial(this.y);
    const watchTermino = performance.now();

    console.log("Anterior: El numero de saludos fúe " + this.resultadoAnterior);
    console.log(`Anterior: Tardo  ${watchInicio - watchTermino} milisegundos`);
    this.tiempoAnterior = watchInicio - watchTermino;
  }

  nuevo() {
    const watchInicio = performance.now();
    this.resultadoNuevo = this.factorialNuevo(this.asistentes) / this.factorialNuevo(this.k) * this.factorialNuevo(this.y);
    const watchTermino = performance.now();

    console.log("Nuevo: El numero de saludos fúe " + this.resultadoNuevo);
    console.log(`Nuevo: Tardo  ${watchInicio - watchTermino} milisegundos`);
    this.tiempoNuevo = watchInicio - watchTermino;
  }

  factorial(x: number): number {
    let fact: number = 1;
    for(let i = 1; i <= x; i++) {
      fact*= i;
    }
    return fact;
  }

  factorialNuevo(n: number): number { 
    if (n == 0){ 
      return 1; 
    }
    return n * this.factorialNuevo(n - 1); 
  }

}
