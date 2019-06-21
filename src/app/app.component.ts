import { Component, OnInit } from '@angular/core';
import { HeroService } from './core/services/hero.service';
import { Hero } from './core/models/hero.model';
import { HeroType } from './core/models/herotypes.model';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'hero-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'heroes-app-angular';
  hs: HeroService;
  auth: AuthService;
  Heroes: Hero[] = [];
  HeroTypes: HeroType[] = [];

  constructor(heroService: HeroService, authService: AuthService) {
    this.hs = heroService;
    this.auth = authService;
  }

  refreshLists() {
    this.hs.getHeroes().subscribe(
      data => {
        console.log(data);
        console.log(data[0].name);
        this.Heroes = data;
      },
      err => console.log(err)
    );

    this.hs.getHeroTypes().subscribe(
      data => {
        console.log(data);
        console.log(data[0].name);
        this.HeroTypes = data;
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.refreshLists();
  }

  onClickMe() {
    this.refreshLists();
  }

  onClickLogin() {
    this.auth.login('test', 'testing').subscribe(data => {
      console.log(data);
      localStorage.setItem('id_token', data);
    });
  }
}
