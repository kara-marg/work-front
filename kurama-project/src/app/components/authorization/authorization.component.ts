import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterLink} from "@angular/router";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../../services/domain/auth.service";
import {JwtTokenService} from "../../services/domain/jwt-token.service";


@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatButton,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})

export class AuthorizationComponent {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  authorizationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  hide = true;

  login(){
    if (this.authorizationForm.controls.username.value && this.authorizationForm.controls.password.value) {
      this.authService.auth({username: this.authorizationForm.controls.username.value, password: this.authorizationForm.controls.password.value})
        .subscribe(token => {
          let res = this.authService.resolveToken(token);

          if (res) {
            let returnUrl = this.route.snapshot.params['returnUrl'] || '';
            this.router.navigate([returnUrl]);
          }
        });
    }
  }
}
