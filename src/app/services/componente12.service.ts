import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Animal } from '../Animal';


@Injectable({
  providedIn: 'root'
})
export class Componente12Service {

  constructor() { 
  }

  //criando o serviço de remoção de animal
  remove(listaAnimal: Animal[], animal: Animal){
    return listaAnimal.filter((a) => animal.nome !== a.nome);
  }

  /*A função filter() é filtra tabelas com base em determinados critérios e posteriormente as medias 
  utilizam esse filtro*/
}
