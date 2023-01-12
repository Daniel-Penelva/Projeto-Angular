import { Component, OnInit } from '@angular/core';

//importando a interface Animal
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-componente9',
  templateUrl: './componente9.component.html',
  styleUrls: ['./componente9.component.css']
})
export class Componente9Component implements OnInit {

  // O "Animal[]" é um objeto lista que refere-se a interface Animal que foi importado
  listaAnimal: Animal[] = [
    {nome: "bibi", tipo:"cachorro", idade:10},
    {nome: "Zeus", tipo:"gato", idade:5},
    {nome: "Dumbo", tipo: "elefante", idade:25},
  ];

  animalDetalhe = '';

  constructor() { }

  ngOnInit(): void {
  }

  //Evento para mostrar a idade, dentro do parametro a variavel "animal" vai estar ligado com a interface
  mostrarIdade(animal: Animal){
    this.animalDetalhe = `Meu animal é ${animal.nome} e ele tem ${animal.idade} anos!`;
    
    //MUITO IMPORTANTE: Para englobar o template String precisa usar o sinal de crase e não aspas simples ou aspas duplas.
  }

}
