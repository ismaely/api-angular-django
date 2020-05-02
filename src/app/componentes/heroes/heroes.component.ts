import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Pessoa } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  pessoa: Pessoa[] = [];
  genero = [
    {nome: 'Masculino'},
    {nome: 'Femenino'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public listar_utente(){
    return this.pessoa;
  }

  public adiacionar_pessoa(dadosForm: NgForm): void {
  this.pessoa.push(dadosForm.value);
  dadosForm.reset();

  }

}
