import { Injectable } from '@angular/core';
import {jwtDecode, JwtPayload} from "jwt-decode";
import {LocalStorageService} from "./local-storage.service";
@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  decodedToken: { [key: string]: string } | null = null;

  constructor(private authStorageService: LocalStorageService) {
  }

  setToken(token: string | null) {
    if (token) {
      this.authStorageService.set("jwt-token", token)
    } else {
      this.authStorageService.remove("jwt-token")
      this.decodeToken();
    }
  }

  getToken(){
    return  this.authStorageService.get("jwt-token")
  }

  decodeToken() {
    const token = this.getToken()
    if (token) {
      this.decodedToken =  jwtDecode(token);
    } else {
      this.decodedToken = {};
    }
  }

  getDecodeToken() {
    this.decodeToken();
    return this.decodedToken;
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['sub'] : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ?  this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    this.getDecodeToken();
    const expiryTime = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * +expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return true;
    }
  }
}
