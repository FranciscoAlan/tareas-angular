import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billetes',
  templateUrl: './billetes.component.html',
  styleUrls: ['./billetes.component.scss']
})
export class BilletesComponent implements OnInit {
  monto: number = 0;
  de500: number = 0;
  de200: number = 0;
  de100: number = 0;
  de50: number = 0;
  de20: number = 0;
  de10: number = 0;
  de5: number = 0;
  de2: number = 0;
  de1: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  feriar() {
    this.de1 = this.monto % 500;
    this.de500 = (this.monto - this.de1) / 500;
    this.de200 = (this.de1 - this.de1 % 200) / 200;
    this.de1 = this.de1 % 200;
    this.de100 = (this.de1 - this.de1 % 100) / 100;
    this.de1 = this.de1 % 100;
    this.de50 = (this.de1 - this.de1 % 50) / 50;
    this.de1 = this.de1 % 50;
    this.de20 = (this.de1 - this.de1 % 20) / 20;
    this.de1 = this.de1 % 20;
    this.de10 = (this.de1 - this.de1 % 10) / 10;
    this.de1 = this.de1 % 10;
    this.de5 = (this.de1 - this.de1 % 5) / 5;
    this.de1 = this.de1 % 5;
    this.de2 = (this.de1 - this.de1 % 2) / 2;
    this.de1 = this.de1 % 2;
  }

}
