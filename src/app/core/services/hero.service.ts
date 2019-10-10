import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero.model';
import { HeroType } from '../models/herotypes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesBaseUrl = 'http://localhost:36071/api';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesBaseUrl}/heroes`);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesBaseUrl}/heroes/${id}`);
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
    return this.http.delete<Hero>(`${this.heroesBaseUrl}/heroes/${hero.id}`);
  }
}
