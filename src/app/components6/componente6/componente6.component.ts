import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css']
})
export class Componente6Component implements OnInit {

  show: boolean = false;
  mostrar: boolean = false;

// A maioria dos eventos trabalham vai retornar void.
// o "this" está se referindo a propria classe
  showMessage(): void{
    this.show = true;
  }

  
  //ou pode usar outro mecanismo de chamada que é pelo o oposto da variável fazendo um not (!) 
  //Esse recurso se chama toggle. Ao clicar no botao ele pode tanto aparecer a frase quanto esconder a frase.
  mostrarMessage(): void{
    this.mostrar = !this.mostrar;

    //Vale para o  construtor acima tb, por exemplo, "this.show = !this.show" - recurso chamado de toggle
  }

  constructor() { }

  //Construtor do Angular!
  ngOnInit(): void {
  }

}
