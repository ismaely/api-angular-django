import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-heroes-detalhe',
  templateUrl: './heroes-detalhe.component.html',
  styleUrls: ['./heroes-detalhe.component.css']
})
export class HeroesDetalheComponent implements OnInit {

  hero: any;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }


  goVoltar(): void {
    this.location.back();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);


  }

}
