import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  //Adicionando diretivas de CSS
  size = '29';
  font = 'arial';
  background = 'yellow';
  color = 'black';

  //Adicionando diretivas de class
  //Aqui os etilos vao ser colocados no arquivo "componente4.component.css"
  classe = ['green-title', 'small-title'];


  //Aqui também é uma classe, so que é uma variavel unica.
  classeUnderline = "underline";



  constructor() { }

  ngOnInit(): void {
  }

}
