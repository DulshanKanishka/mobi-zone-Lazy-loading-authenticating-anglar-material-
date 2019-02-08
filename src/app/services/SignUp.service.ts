import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Signup } from '../dto/signUp';
import { Observable } from 'rxjs';
import { Signup } from '../dto/signUp';
const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/sign';


@Injectable()
export class SignupService {
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<Array<Signup>> {
    return this.http.get<Array<Signup>>(MAIN_URL + URL);
  }
  searchUser(id: String): Observable<Signup> {
    return this.http.get<Signup>(MAIN_URL + URL + '/' + id);
  }
  saveUser(user: Signup): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, user);
  }
}
