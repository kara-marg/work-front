import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {AuthService} from "./auth.service";
import {LocalStorageService} from "./local-storage.service";
import {JwtTokenService} from "./jwt-token.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService,

              private jwtService: JwtTokenService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log(this.jwtService.getUser())
    if (this.jwtService.getUser()) {

      if (this.jwtService.isTokenExpired()) {
        // Should Redirect Sig-In Page
        this.router.navigate(["/auth"]);
        return false
      } else {
        return true;
      }
    } else {
      this.router.navigate(["/auth"]);
      return false
    }
  }
}
