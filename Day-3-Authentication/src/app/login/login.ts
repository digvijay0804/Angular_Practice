import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  login(): void {

    const success = this.authService.login(
      this.email,
      this.password
    );

    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }
}