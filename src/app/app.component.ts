import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "Joaquim";
  idadeName = "35";

  userData = {
    email: "joaquim@email.com",
    role: "Admin"
  };

  title = 'Projeto-Angular';
}
