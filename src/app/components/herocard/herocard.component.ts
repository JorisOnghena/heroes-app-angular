import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.model';

@Component({
  selector: 'hero-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css']
})
export class HerocardComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
