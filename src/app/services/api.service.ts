import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //url para la peticion al backend
  apiurl: string = 'http://localhost:4000/';
  response: LoginResponse;

  constructor(private httpClient: HttpClient) {}

  loginService(user: string, pass: string): Observable<LoginResponse> {
    const query = this.apiurl + 'peticion';
    //retorna la respuesta del backend (generalmente en formato json)
    console.log(`url: ${query}`);

    return this.httpClient.post<LoginResponse>(query, {
      user: user,
      pass: pass,
    });
  }
}
