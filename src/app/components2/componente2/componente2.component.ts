import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
})
export class Componente2Component implements OnInit {
  
  nome: string = 'Daniel Penelva de Andrade';

  idade: number = 27;
  altura: number = 1.75;

  hobbies = ['futebol', 'cinema', 'viajar'];

  carro = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2011,
  };

  constructor() {}

  ngOnInit(): void {}
}
