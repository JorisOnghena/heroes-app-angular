import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/core/services/hero.service';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroType } from 'src/app/core/models/herotypes.model';
import { MessageboxComponent, Severity } from '../messagebox/messagebox.component';

@Component({
  selector: 'hero-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

  @ViewChild('messageDetail') alert: MessageboxComponent;
  model = new Hero();
  types: HeroType[];

  post: any; // A property for the return value of our form.

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    public router: Router) { }

  ngOnInit() {
    this.getTypes();
    this.getHero();
  }

  getTypes(): void {
    this.heroService.getHeroTypes()
      .subscribe(
        heroTypes => {
          this.types = heroTypes;
        },
        err => {
          console.log(err);
          this.alert.message = err;
          this.alert.title = 'Could not retrieve types !!!';
          this.alert.dismissible = false;
          this.alert.severity = Severity.Danger;
        });
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // "+this" returns a numeric representation of id.
    this.heroService.getHero(id)
      .subscribe(
        hero => {
          this.model = hero;
          console.log(this.model);
        },
        err => {
          console.log(err);
          this.alert.message = err;
          this.alert.title = `Could not retrieve hero with id: ${id} !!!`;
          this.alert.dismissible = false;
          this.alert.severity = Severity.Danger;
        });
  }

  newHero() {
    this.model = new Hero();
  }

  onSubmit() {
    console.log(this.model);
    this.heroService.updateHero(this.model).subscribe(
      allOk => {
        console.log(allOk);
        this.router.navigate(['heroes']);
      },
      err => {
        console.log(err);
        this.alert.message = err;
        this.alert.title = `Could not update hero with id: ${this.model.id} !!!`;
        this.alert.dismissible = false;
        this.alert.severity = Severity.Danger;
      });
  }
}
