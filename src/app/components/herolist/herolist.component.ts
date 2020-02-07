import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HeroService } from 'src/app/core/services/hero.service';
import { Hero } from 'src/app/core/models/hero.model';
import { MessageboxComponent, Severity } from '../messagebox/messagebox.component';

@Component({
  selector: 'hero-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit, AfterViewInit {

  @ViewChild('herolistMessage') alert: MessageboxComponent;
  hs: HeroService;
  Heroes: Hero[];

  constructor(heroService: HeroService) {
    this.hs = heroService;
  }

  ngAfterViewInit() {
    this.hs.getHeroes().subscribe(
      data => {
        console.log(data);
        console.log(data[0].name);
        this.Heroes = data;
      },
      err => {
        console.log(err);
        this.Heroes = [];
        this.alert.message = err;
        this.alert.severity = Severity.Danger;
        this.alert.dismissible = false;
        this.alert.title = "Could not load heroes !";
      }
    );
  }

  ngOnInit() {
  }

}
