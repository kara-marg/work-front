import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ProjectService} from "./services/project.service";
import {AuthService} from "./services/domain/auth.service";
import {JwtTokenService} from "./services/domain/jwt-token.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AuthorizationComponent, RegistrationComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kurama-project';
  tokenService

  constructor(tokenService: JwtTokenService) {
    this.tokenService = tokenService;
  }

  isAuthed(): boolean {
    console.log(!this.tokenService.isTokenExpired())
    return !this.tokenService.isTokenExpired();
  }
}
