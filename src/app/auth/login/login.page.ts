import { Component, OnInit } from '@angular/core';
import { AuthAPI } from '../api/auth.api';
import { tap } from 'rxjs';
import { Login } from '../api/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(private authApi: AuthAPI) {}


  ngOnInit(): void {
  }

  onLogin(login: Login) {
    this.authApi
      .login$(login)
      .pipe(tap((response) => console.warn(response)))
      .subscribe();
  }

}
