import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly tokenKey = 'access_token';

  // 🔑 Tokenni olish
  getToken(p0: null): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // ✅ Token bor yoki yo'qligini tekshiruvchi method
  hasToken(): boolean {
    return !!this.getToken(null);
  }

  // 🔐 Tokenni saqlash
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // ❌ Tokenni o'chirish
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
