import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero;  //Set hero type.

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService:MessageService) { 
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
      this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }


  hero: Hero = {    // hero property is Type Hero.
    id: 1,
    name: 'Windstorm'
  };  

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

 



}
