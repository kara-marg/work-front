import {Component, inject, Inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/domain/auth.service";
import {HeaderService} from "../../services/domain/header.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    RouterLink,
    MatButton,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  text: string = "Kurama";
  headerService = inject(HeaderService);
  constructor(private authService: AuthService, private router: Router) {
  }
  onClick() {
    alert('');
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["/auth"])
  }
}
