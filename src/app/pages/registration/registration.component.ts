import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm?: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  register(): void {
    this.registrationForm?.markAllAsTouched();

    if (this.registrationForm?.valid) {
      //login
      console.log('login from value', this.registrationForm?.value);
    }

    this.registrationForm = this.fb.group({
      username: '',
      password: '',
      remember: true,
    });
  }

  forgot(): void {
    console.log('Forgot your password');
  }

  buildForm(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
  }
}
