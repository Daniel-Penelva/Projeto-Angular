import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  @Input() name: string = '';
  @Input() idade: string = '';
  @Input() ud!:{email: string; role: string;}

  constructor() { }

  ngOnInit(): void {
  }

}
