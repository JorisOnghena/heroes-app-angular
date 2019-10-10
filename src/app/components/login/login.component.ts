import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageboxComponent, Severity } from '../messagebox/messagebox.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('messageLogin', { static: false }) alert: MessageboxComponent;
  showLoading = false;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  onClickLogin() {
    this.showLoading = true;
    this.alert.message = '';
    this.alert.title = '';

    this.authService.login('test', 'testing').subscribe(data => {
      console.log(data);
      localStorage.setItem('id_token', data.JWtToken);
      this.alert.title = 'Success !!!';
      this.alert.message = 'Welcome';
      this.alert.dismissible = false;
      this.alert.severity = Severity.Success;
      this.router.navigate(['heroes']);
    },
    err => {
      console.log(err);
      this.alert.message = err;
      this.alert.title = 'Could not log you in !!!';
      this.alert.dismissible = false;
      this.alert.severity = Severity.Danger;
      this.showLoading = false;
    });
  }
}
