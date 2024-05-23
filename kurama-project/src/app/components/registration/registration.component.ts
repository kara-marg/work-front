import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {userInfo} from "node:os";
import {AuthService} from "../../services/domain/auth.service";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    MatButton,
    MatIcon,
    MatIconButton,
    MatSuffix,
    NgIf,
    MatError
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  registrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  hide = true;


  register() {
    const user: { [index: string]: any } = {}
    user["username"] = this.registrationForm.controls.username.value;
    user["email"] = this.registrationForm.controls.email.value;
    user["password"] = this.registrationForm.controls.password.value;
    this.authService.register(user) .subscribe(token => {
      let res = this.authService.resolveToken(token);

      if (res) {
        let returnUrl = this.route.snapshot.params['returnUrl'] || '';
        this.router.navigate([returnUrl]);
      }
    });
  }
}
