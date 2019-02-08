import { Buying } from './../dto/buying';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Buying } from '../dto/buying';
import { Observable } from 'rxjs';
const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/buying';

@Injectable()
export class BuyingService {
  constructor(private http: HttpClient) { }

  saveBuying(buying: Buying): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, buying);
  }

  searchBuying(id: String): Observable<Buying> {
    return this.http.get<Buying>(MAIN_URL + URL + '/' + id);
  }

  deleteBuying(id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  }

  updateBuying(buying: Buying): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, buying);
  }

  getAllBuying(): Observable<Array<Buying>> {
    return this.http.get<Array<Buying>>(MAIN_URL + URL);
  }
}
