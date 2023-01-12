import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

//importando o Serive
import { Componente12Service } from 'src/app/services/componente12.service';

@Component({
  selector: 'app-componente12',
  templateUrl: './componente12.component.html',
  styleUrls: ['./componente12.component.css']
})
export class Componente12Component implements OnInit {

  // O "Animal[]" é um objeto lista que refere-se a interface Animal que foi importado
  listaAnimal: Animal[] = [
    {nome: "bibi", tipo:"cachorro", idade:10},
    {nome: "Zeus", tipo:"gato", idade:5},
    {nome: "Dumbo", tipo: "elefante", idade:25},
  ];

  animalDetalhe = '';

  //No construtor, o Angula vai entender que esta sendo criado um novo serviço.
  constructor(private componente12Service: Componente12Service) { }

  ngOnInit(): void {
  }

  //Evento para mostrar a idade, dentro do parametro a variavel "animal" vai estar ligado com a interface
  mostrarIdade(animal: Animal){
    this.animalDetalhe = `Meu animal é ${animal.nome} e ele tem ${animal.idade} anos!`;
    
    //MUITO IMPORTANTE: Para englobar o template String precisa usar o sinal de crase e não aspas simples ou aspas duplas.
  }

  //Aqui faremos um evento que vai ser disparado acessando o serviço que tem a função de eliminar um animal.
  removerAnimal(animal:Animal){
    console.log('Removendo animal...');
    this.listaAnimal = this.componente12Service.remove(this.listaAnimal, animal);
  }

}
