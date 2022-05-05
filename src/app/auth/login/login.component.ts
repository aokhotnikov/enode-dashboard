import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message = '';
  authForm: FormGroup;
  wrongPassError = false;
  timer = (time: number = 0) => timer(time);

  constructor(public authService: AuthService, public router: Router, public fb: FormBuilder) {
    this.authForm = this.fb.group({
      password: ['', Validators.required],
    }, {
      updateOn: 'blur'
    });
  }

  ngOnInit(): void {
    console.log('LoginComponent Init');
  }

  get password(): AbstractControl | null {
    return this.authForm.get('password');
  }

  login(): void {

    if (this.authForm.invalid) {
      return;
    }

    this.message = 'Trying to log in ...';

    const pass = this.password?.value;
    this.authService.login(pass).subscribe(
      res => {
        // console.log(res);

        this.message = 'Logged in';
        this.authService.isLoggedIn = true;

        // Redirect the user
        this.router.navigate(['/']);

      },
        err => {
        console.log(err);
        this.message = err.message;
        if (err.status === 401) {
          this.wrongPassError = true;
          this.timer(2000).subscribe(() => this.wrongPassError = false );
        }
      }
    );
  }

}
