import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerolistComponent } from './components/herolist/herolist.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  /*{
  {
    path: 'heroes',
    component: HerolistComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
