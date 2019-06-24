import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from './core/services/hero.service';
import { Hero } from './core/models/hero.model';
import { HeroType } from './core/models/herotypes.model';
import { AuthService } from './core/services/auth.service';
import { MessageboxComponent, Severity } from './components/messagebox/messagebox.component';

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

  @ViewChild(MessageboxComponent, { static: false }) alert: MessageboxComponent;

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
    this.alert.title = 'Success !!!';
    this.alert.message = 'Testing 1..2...3';
    this.alert.dismissible = false;
    this.alert.severity = Severity.Success;
  }

  onClickLogin() {
    this.auth.login('test', 'testing').subscribe(data => {
      console.log(data);
      localStorage.setItem('id_token', data);
    });
  }
}
