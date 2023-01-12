import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//importando a rota - aula do componente 13
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente/componente1/componente1.component';
import { Componente2Component } from './components2/componente2/componente2.component';
import { Componente3Component } from './components3/componente3/componente3.component';
import { Componente4Component } from './components4/componente4/componente4.component';
import { Componente5Component } from './components5/componente5/componente5.component';
import { Componente6Component } from './components6/componente6/componente6.component';
import { Componente7Component } from './components7/componente7/componente7.component';
import { Componente7FilhoComponent } from './components7/componente7-filho/componente7-filho.component';
import { Componente8Component } from './components8/componente8/componente8.component';
import { Componente9Component } from './components9/componente9/componente9.component';
import { Componente10Component } from './components10/componente10/componente10.component';
import { Componente11Component } from './components11/componente11/componente11.component';
import { Componente12Component } from './components12/componente12/componente12.component';
import { Componente13Component } from './components13/componente13/componente13.component';
import { Componente14Component } from './components14/componente14/componente14.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    Componente6Component,
    Componente7Component,
    Componente7FilhoComponent,
    Componente8Component,
    Componente9Component,
    Componente10Component,
    Componente11Component,
    Componente12Component,
    Componente13Component,
    Componente14Component
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
