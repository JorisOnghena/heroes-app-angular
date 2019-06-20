import { Component, OnInit } from '@angular/core';
import { HeroService } from './core/services/hero.service';
import { Hero } from './core/models/hero.model';
import { HeroType } from './core/models/herotypes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'heroes-app-angular';
  hs: HeroService;
  Heroes: Hero[] = [];
  HeroTypes: HeroType[] = [];

  constructor(heroService: HeroService) {
    this.hs = heroService;
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
}
