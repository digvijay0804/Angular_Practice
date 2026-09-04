import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface AuthPayload {
  fullName?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  isLoginMode = signal(true);
  successMessage = signal('');
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleMode() {
    this.isLoginMode.update(v => !v);
    const fullNameControl = this.authForm.get('fullName');
    if (!this.isLoginMode()) {
      fullNameControl?.setValidators([Validators.required, Validators.minLength(3)]);
    } else {
      fullNameControl?.clearValidators();
    }
    fullNameControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }
    const payload: AuthPayload = this.authForm.value;
    console.log(this.isLoginMode() ? 'Login data:' : 'Register data:', payload);

    this.successMessage.set(
      this.isLoginMode() ? 'Login successful! ✅' : 'Registration successful! ✅'
    );
    this.authForm.reset();

    setTimeout(() => this.successMessage.set(''), 3000);
  }
}