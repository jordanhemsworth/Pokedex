import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {     //Returns Observable Hero for as  HTTPClient.get returns Oberservable
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
