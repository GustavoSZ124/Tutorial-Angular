import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public _user: UserService, public _api: ApiService) {}

  ngOnInit(): void {}

  login(): void {
    const user = (document.querySelector('#name') as HTMLInputElement).value;
    const pass = (document.querySelector('#pass') as HTMLInputElement).value;

    this._api.loginService(user, pass).subscribe((res) => {
      if (res.user.name == user && res.user.pass == pass) {
        this._user.user = res.user;
      }
      /* if (res.success) {
        this._user.user = res.user;
        console.log(this._user.user);
      } */
    });
  }
}
