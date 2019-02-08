import { HomeList } from './../dto/homeList';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HomeList } from '../dto/homeList';
import { Injectable } from '@angular/core';
const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/homeList';


@Injectable()
export class HomeListService {
  constructor(private http: HttpClient) {
  }

  saveHomeList(homeList: HomeList): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, homeList);
  }

  searchHomeList(id: String): Observable<HomeList> {
    return this.http.get<HomeList>(MAIN_URL + URL + '/' + id);
  }

  deleteHomeList(id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  }

  updateHomeList(homeList: HomeList): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, homeList);
  }

  getAllHomeList(): Observable<Array<HomeList>> {
    return this.http.get<Array<HomeList>>(MAIN_URL + URL);
  }
}




