import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

 // LISTAR TODOS OS HERIOS
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('serviço dos herios ');
    return of(HEROES);
  }


// RETORNAR O HEROI SOLICITADO
  getHero(id: number ): Observable<Hero> {

  this.messageService.add(`hero serviço: hero id=${id}`);

  return of(HEROES.find(hero => hero.id === id));
  }

}
