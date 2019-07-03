import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageboxComponent,
    HerocardComponent,
    HerolistComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroService,
    AuthService,
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
