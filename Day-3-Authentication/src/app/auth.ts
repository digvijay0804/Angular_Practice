import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): boolean {

    if (email === 'admin@gmail.com' && password === '123456') {

      const token = 'dummy-jwt-token-12345';

      localStorage.setItem('token', token);

      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}