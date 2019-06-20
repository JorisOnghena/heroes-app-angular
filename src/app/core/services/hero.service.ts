import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Hero } from '../models/hero.model';
import { HeroType } from '../models/herotypes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesBaseUrl = 'http://localhost:36071/api';

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Hero[]>(`${this.heroesBaseUrl}/heroes`);
    // .map((res: Response) => res.json().response);
  }

  getHeroTypes() {
    return this.http.get<HeroType[]>(`${this.heroesBaseUrl}/herotypes`);
    // .map((res: Response) => res.json().response);
  }

  createHero(hero: Hero) {
    return this.http.post<Hero>(`${this.heroesBaseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero) {
    return this.http.put<Hero>(`${this.heroesBaseUrl}/heroes`, hero);
  }

  deleteHero(hero: Hero) {
    return this.http.delete <Hero>(`${this.heroesBaseUrl}/heroes/${hero.id}`);
  }
}
