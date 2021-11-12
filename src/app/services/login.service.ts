import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'https://localhost:44307/api/Auth/login';
  email = 'onurgoz98@gmail.com';
  password = '123456';

  constructor(private httpClient: HttpClient) {}

  Login(userId?: string, password?: string): Observable<any> {
    console.log('çalış');
    return this.httpClient.post(this.apiUrl,{

    });
  }
}
