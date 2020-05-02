import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesDetalheComponent } from './componentes/heroes-detalhe/heroes-detalhe.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarUtenteComponent } from './componentes/listar-utente/listar-utente.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'adicionar-herois', component: HeroesComponent },
  { path: 'lista-todo-heroi', component: DashboardComponent},
  { path: 'detalhe-heroi/:id', component: HeroesDetalheComponent},
  { path: 'listar-utente', component: ListarUtenteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
