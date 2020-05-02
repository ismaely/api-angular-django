import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesDetalheComponent } from './componentes/heroes-detalhe/heroes-detalhe.component';
import { ListarUtenteComponent } from './componentes/listar-utente/listar-utente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    DashboardComponent,
    HeroesDetalheComponent,
    ListarUtenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
