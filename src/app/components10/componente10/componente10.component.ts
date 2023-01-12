import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente10',
  templateUrl: './componente10.component.html',
  styleUrls: ['./componente10.component.css']
})
export class Componente10Component implements OnInit {

  texto = 'TESTANDO O PIPER OPERATIOR!';
  titulo = 'TESTANDO O TÍTULO!'

  data = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
