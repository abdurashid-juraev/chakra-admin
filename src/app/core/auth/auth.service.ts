import { inject, Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { delay, Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users = [{ name: 'Jhon Doe', email: 'demo@mail.com', password: '123456' }];

  private token = inject(TokenService);

  signUp(name: string, email: string, password: string): Observable<any> {
    const exists = this.users.find(user => user.email === email);

    if (exists) {
      return throwError(() => new Error('User exists..!'));
    }

    this.users.push({ name, email, password });
    return of({ message: 'User created!' }).pipe(delay(300));
  }

  signIn(email: string, password: string): Observable<any> {
    const user = this.users.find(user => user.email === email && user.password);

    if (!user) {
      return throwError(() => new Error('Invalid credentials!'));
    }
    const token = 'mock_token' + Date.now();
    this.token.setToken(token);
    return of({ token }).pipe(delay(300));
  }

  logout() {
    this.token.removeToken();
  }

  isLoggedIn() {
    return !!this.token.getToken(null);
  }
}
