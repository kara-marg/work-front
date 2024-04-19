import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserAuthDetails} from "../../entity/domain/userAuthDetails";
import {Token} from "../../entity/domain/token";
import {JwtTokenService} from "./jwt-token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private authed: boolean = false
  private token?: string;

  constructor(private http: HttpClient, private jwt: JwtTokenService) {
  }

  auth(userAuthDetails: UserAuthDetails) {
    let url = this.baseUrl + "/auth/sign-in"
    return this.http.post<Token>(url, userAuthDetails);
  }

  logout(){
    this.jwt.setToken(null)
  }

  resolveToken(token: Token) {
      if (token?.token) {
        this.jwt.setToken(token.token)
        return true;
      } else {
        return false;
      }
  }
}
