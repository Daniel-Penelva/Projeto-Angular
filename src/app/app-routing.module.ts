import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Componente13Component } from "./components13/componente13/componente13.component";
import { Componente8Component } from "./components8/componente8/componente8.component";

const routes: Routes = [
    {path: 'componente13', component: Componente13Component},

    //a rota desse componente vai ser daquela lista, ou seja, o componente 
    {path: 'lista', component: Componente8Component},
];

//Vamos exportar essas rotas
//vamos declarar que as rotas inicia pela raiz
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}
//Vamos exportar esse "AppRoutingModule" no arquivo "app.module.ts"
//Tambbém, vamos declarar no "imports []" no arquivo "app.module.ts"
//Por fim, precisamos alterar as rotas que serao feitas para os templates (html). 
//Vamos no arquivo "app.component.html" e vamos inserir as tags do "router-outlet"
// atraves do "router link" poderemos chamar as rotas.