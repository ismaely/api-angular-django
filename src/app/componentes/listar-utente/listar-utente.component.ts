import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../heroes/hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-listar-utente',
  templateUrl: './listar-utente.component.html',
  styleUrls: ['./listar-utente.component.css']
})
export class ListarUtenteComponent implements OnInit {


  lista: any[];
  
  constructor() { }

 
  ngOnInit(): void {
  
  }

  listaTodos(){

  }
}
