import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  heroes = HEROES;  //Set heroes as HEROES array

  selectedHero?: Hero;  //Set hero type.
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }


  hero: Hero = {    // hero property is Type Hero.
    id: 1,
    name: 'Windstorm'
  };  

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
