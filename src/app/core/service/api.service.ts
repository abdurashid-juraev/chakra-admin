// src/app/shared/service/api.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../utils/token';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = inject(Token.BASE_API);

  private http = inject(HttpClient);

  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`);
  }

  getById<T>(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  create<T>(endpoint: string, item: Omit<T, 'id'>): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, item);
  }

  update<T extends { id: number }>(endpoint: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}/${item.id}`, item);
  }

  delete(endpoint: string, id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${endpoint}/${id}`);
  }
}
