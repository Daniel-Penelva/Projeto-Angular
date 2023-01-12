import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente11',
  templateUrl: './componente11.component.html',
  styleUrls: ['./componente11.component.css']
})
export class Componente11Component implements OnInit {

  nome: String = '';
  idade: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
