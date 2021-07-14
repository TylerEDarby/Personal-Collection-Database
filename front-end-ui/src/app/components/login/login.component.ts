import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login-request';
import { UserHelperService } from 'src/app/services/user-helper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private userHelper: UserHelperService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });

    this.loginError = '';
  }

  ngOnInit() {
    if (this.userHelper.getUserSession()) {
      this.router.navigate(['/home']);
    }
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (username && password) {
      const loginRequest = new LoginRequest(username, password);
      this.userService.login(loginRequest).subscribe(result => {
        this.userHelper.createUserSession(result);
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
        this.loginError = 'Invalid username and password combination.'
        // If you need to check for a specific error you can do:
        // if (error.status == 401) { // whatever code you want to do for status 401 }
        // and that wil check for errors with status code 401 (Unauthorized)
      })
    }
  }
}
