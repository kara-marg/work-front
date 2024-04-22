import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtTokenService} from "./jwt-token.service";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = 'http://localhost:8080';

  constructor(private jwtTokenService: JwtTokenService, private http: HttpClient) { }

  postRequest(path: String, requestData: Object): Observable<any> {
    return this.http.post<Object>(this.baseUrl + path, requestData ,
      { headers:  this.getHeaders() }
    );
  }

  getRequest(path: String): Observable<any> {
    this.getHeaders();
    return this.http.get<any>(this.baseUrl + path,
      {headers: this.getHeaders()}
    );
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.jwtTokenService.getToken()) {
      headers = headers.set("Authorization", "Bearer " + this.jwtTokenService.getToken());
    }
    headers.append("Authorization", "Bearer " + this.jwtTokenService.getToken());
    console.log(headers)
    return headers;
  }


}
