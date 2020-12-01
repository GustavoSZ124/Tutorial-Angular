import { Component, Host, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    @Host() private _app: AppComponent,
    public _user: UserService,
    public _api: ApiService
  ) {}

  ngOnInit(): void {}

  login(): void {
    const user = (document.querySelector('#name') as HTMLInputElement).value;
    const pass = (document.querySelector('#pass') as HTMLInputElement).value;

    this._api.loginService(user, pass).subscribe((res) => {
      if (res.user.name == user && res.user.pass == pass) {
        this._user.user = res.user;
        this._app.state = true;
        this._app.titulo = res.user.name;
      } else {
        this._app.state = false;
        this._app.titulo = 'Tutorial-Angular';
      }
      /* if (res.success) {
        this._user.user = res.user;
        console.log(this._user.user);
      } */
    });
  }
}
