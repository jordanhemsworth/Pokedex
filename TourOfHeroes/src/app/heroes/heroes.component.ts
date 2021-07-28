import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  //heroes = HEROES;  //Set heroes as HEROES array
  heroes: Hero[] = [];

  selectedHero?: Hero;  //Set hero type.
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }


  hero: Hero = {    // hero property is Type Hero.
    id: 1,
    name: 'Windstorm'
  };  

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { 
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
