import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente7',
  templateUrl: './componente7.component.html',
  styleUrls: ['./componente7.component.css']
})
export class Componente7Component implements OnInit {

  meuNumero: number = 0; 
  
  /*Evento que vai ser chamado pelo componente pai, no caso, component7.html para capturar o evento 
  emitido pelo componente filho.*/
  onChangeNumber(){
    this.meuNumero = Math.floor(Math.random() * 10);

    //vou trocar o número zero por um número aleatório até 10
  }

  constructor() { }

  ngOnInit(): void {
  }

}
