import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationRequest } from 'src/app/models/registration-request';
import { UserHelperService } from 'src/app/services/user-helper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registrationError: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private userHelper: UserHelperService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    });

    this.registrationError = '';
  }

  ngOnInit() {
    if (this.userHelper.getUserSession()) {
      this.router.navigate(['/home']);
    }
  }

  register() {
    if (!this.registrationForm.valid) {
      return;
    }
    const username = this.registrationForm.get('username')?.value;
    const password = this.registrationForm.get('password')?.value;
    const confirmPassword = this.registrationForm.get('confirmPassword')?.value;

    if (password && confirmPassword) {
      const registrationRequest = new RegistrationRequest(username, password, confirmPassword);
      this.userService.registration(registrationRequest).subscribe(result => {
        this.userHelper.createUserSession(result);
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
        this.registrationError = 'Passwords do not match.'
        // If you need to check for a specific error you can do:
        // if (error.status == 401) { // whatever code you want to do for status 401 }
        // and that wil check for errors with status code 401 (Unauthorized)
      })
    }
  }
}
