import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserAuthDetails} from "../entity/domain/userAuthDetails";
import {Token} from "../entity/domain/token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private authed: boolean = false;
  private token?: string;
  constructor(private http: HttpClient) {
  }

  auth(userAuthDetails: UserAuthDetails) {
    let url = this.baseUrl + "/auth/sign-in"
    console.log(url)


    return this.http.post<Token>(url, userAuthDetails);
  }

  resolveToken(token: Token): boolean {
    if (token.token){
      this.authed = true;
      this.token = token.token;
      return true;
    }
    return false;
  }



  isAuthed(): boolean {
    return  this.authed;
  }
}
