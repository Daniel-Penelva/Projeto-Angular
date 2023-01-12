import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente7-filho',
  templateUrl: './componente7-filho.component.html',
  styleUrls: ['./componente7-filho.component.css']
})
export class Componente7FilhoComponent implements OnInit {

  //Do tipo "any"
  @Output() eventoFilho: EventEmitter<any> = new EventEmitter();

  //Evento que vai ser chamado pelo click do botao do componente filho
  handleClick(){
    //Para emitir - mas só vai ser emitido no click do botão.
    this.eventoFilho.emit();

    /*Até o momento só está emitindo o evento, agora precisamos receber esse evento, logo iremos
    ao componente pai, para criar essa conexão, entre o componente pai com o componente filho, 
    no caso, iremos fazer essa conexão no "componente7.component7.ts"*/ 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
