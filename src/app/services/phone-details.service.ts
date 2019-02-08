import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { PhoneDetails } from '../dto/phoneDetails';
import { Observable } from 'rxjs';
import { PhoneDetails } from '../dto/phoneDetails';

const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/phone';

@Injectable()
export class PhoneDetailsService {
  constructor(private http: HttpClient) { }

  savePhoneDetails(phoneDetails: PhoneDetails): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, phoneDetails);
  }

  searchPhoneDetails(id: String): Observable<PhoneDetails> {
    return this.http.get<PhoneDetails>(MAIN_URL + URL + '/' + id);
  }

  deletePhoneDetails(id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  }

  updatePhoneDetails(phoneDetails: PhoneDetails): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, phoneDetails);
  }

  getAllPhoneDetails(): Observable<Array<PhoneDetails>> {
    return this.http.get<Array<PhoneDetails>>(MAIN_URL + URL);
  }

}
