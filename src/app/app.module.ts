import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroService } from './core/services/hero.service';
import { AuthService } from './core/services/auth.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { HerocardComponent } from './components/herocard/herocard.component';
import { GeneralErrorHandler } from './shared/GeneralErrorHandler';
import { HerolistComponent } from './components/herolist/herolist.component';
import { LoginComponent } from './components/login/login.component';
import { HerodetailComponent } from './components/herodetail/herodetail.component';
import { AuthGuard } from './core/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageboxComponent,
    HerocardComponent,
    HerolistComponent,
    LoginComponent,
    HerodetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HeroService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GeneralErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
