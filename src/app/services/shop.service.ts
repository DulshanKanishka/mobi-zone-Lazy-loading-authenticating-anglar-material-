import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shops } from '../dto/shops';
// import { Shops } from '../dto/shops';

const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/shops';

@Injectable()
export class ShopService {
  constructor(private http: HttpClient) { }

  saveShops(shops: Shops): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, shops);
  }

  searchShops(id: String): Observable<Shops> {
    return this.http.get<Shops>(MAIN_URL + URL + '/' + id);
  }

  deleteShops(id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  }

  updateShops(shops: Shops): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, shops);
  }

  getAllShops(): Observable<Array<Shops>> {
    return this.http.get<Array<Shops>>(MAIN_URL + URL);
  }
}
