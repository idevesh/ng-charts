import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseURL = "https://raw.githubusercontent.com/gem-devesh/FakeRestAPI/main/db.json"
  private baseBarURL = "https://raw.githubusercontent.com/gem-devesh/FakeRestAPI/main/barDb.json"
  constructor(private http: HttpClient) { }

  getSalesData() {
    return this.http.get(this.baseURL)
  }

  getBarData() {
    return this.http.get(this.baseBarURL)
  }
}
