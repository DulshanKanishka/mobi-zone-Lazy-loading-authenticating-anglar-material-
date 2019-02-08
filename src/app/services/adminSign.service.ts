import { AdminSign } from './../dto/adminSign';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AdminSign } from '../dto/adminSign';

const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/adminsign';

@Injectable()
export class AdminSignService {
  constructor(private http: HttpClient) { }

  saveAdminSign(adminSign: AdminSign): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, adminSign);
  }

  searchAdminSign(id: String): Observable<AdminSign> {

    return this.http.get<AdminSign>(MAIN_URL + URL + '/' + id);
  }

  deleteAdminSign(id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  }

  updateAdminSign(adminSign: AdminSign): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, adminSign);
  }

  getAllAdminSign(): Observable<Array<AdminSign>> {
    return this.http.get<Array<AdminSign>>(MAIN_URL + URL);
  }

}
