import { Component, Host, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  num: number;

  constructor(@Host() public _app: AppComponent) {}

  ngOnInit(): void {}

  increment(): void {
    if (this.num == null) this.num = 0;
    this.num++;
  }

  random(): void {
    let max = 200;
    let min = 50;
    this.num = Math.round(Math.random() * (max + 1 - min) + min);
  }
}
