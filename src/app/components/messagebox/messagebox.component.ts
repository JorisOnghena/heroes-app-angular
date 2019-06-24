import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {

  dismissible = false;
  message: string;
  title: string;
  severity: Severity;

  constructor() { }

  ngOnInit() {
  }

  setDismissible(dismiss: boolean) {
    this.dismissible = dismiss;
  }

  setDetails(title: string, message: string, severity: Severity) {
    this.title = title;
    this.message = message;
    this.severity = severity;
  }

}

export enum Severity {
  Danger = 'alert-danger',
  Success = 'alert-success',
  Info = 'alert-info',
  Warning = 'alert-warning',
}
