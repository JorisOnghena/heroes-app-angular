import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerolistComponent } from './components/herolist/herolist.component';
import { LoginComponent } from './components/login/login.component';
import { HerodetailComponent } from './components/herodetail/herodetail.component';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  {
    path: 'hero/:id',
    component: HerodetailComponent,
    data: { title: 'Hero detail' },
    canActivate: [AuthGuard]
  },
  {
    path: 'heroes',
    component: HerolistComponent,
    data: { title: 'Heroes List' },
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
 /* {
    path: '404',
    component: PageNotFoundComponent
  },*/
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
