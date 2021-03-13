import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  rootURL = 'localhost:8080/NetworkMonitor/api';

  getAllHosts() {
    return this.http.get<any[]>(this.rootURL + '/getAllHosts');
  }
}
