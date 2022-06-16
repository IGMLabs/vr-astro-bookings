import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.interface';
import { Register } from './register.interface';
import { tap } from 'rxjs';
import { AuthResponse } from './auth-response.interface';


@Injectable({
  providedIn: 'root'
})

export class AuthAPI  {
  private url = environment.apiUrl;

  public accessToken ="";

  constructor(protected http: HttpClient) {}

  public register$(register: Register) {
    return this.http.post<Register>(this.url + 'register', register);
  }

  public login$(login: Login) {
    return this.http.post<AuthResponse>(this.url + 'login', login).pipe( tap(response => this.accessToken = response.accessToken )));
  }
}
