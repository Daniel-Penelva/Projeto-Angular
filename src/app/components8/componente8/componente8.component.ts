import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente8',
  templateUrl: './componente8.component.html',
  styleUrls: ['./componente8.component.css']
})
export class Componente8Component implements OnInit {

  listaAnimal = [
    {nome: "bibi", tipo:"cachorro"},
    {nome: "Zeus", tipo:"gato"},
    {nome: "Dumbo", tipo: "elefante"}
  ];

  //Pensa que aqui poderia ser uma lista recuperada no banco de dados.

  constructor() { }

  ngOnInit(): void {
  }

}
