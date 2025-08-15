// src/app/shared/service/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl.replace(/\/$/, ''); // remove trailing slash
  private http = inject(HttpClient);

  private url(endpoint: string) {
    return `${this.baseUrl}/${endpoint.replace(/^\//, '')}`; // ensure single slash
  }

  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(this.url(endpoint)).pipe(
      catchError(err => {
        console.error('API getAll error', endpoint, err);
        return throwError(() => err);
      })
    );
  }

  getById<T>(endpoint: string, id: string | number): Observable<T> {
    return this.http.get<T>(`${this.url(endpoint)}/${id}`).pipe(
      catchError(err => {
        console.error('API getById error', endpoint, id, err);
        return throwError(() => err);
      })
    );
  }

  create<T>(endpoint: string, item: Omit<T, 'id'>): Observable<T> {
    return this.http.post<T>(this.url(endpoint), item).pipe(
      catchError(err => {
        console.error('API create error', endpoint, err);
        return throwError(() => err);
      })
    );
  }

  update<T extends { id: string | number }>(endpoint: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.url(endpoint)}/${item.id}`, item).pipe(
      catchError(err => {
        console.error('API update error', endpoint, item.id, err);
        return throwError(() => err);
      })
    );
  }

  delete(endpoint: string, id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.url(endpoint)}/${id}`).pipe(
      catchError(err => {
        console.error('API delete error', endpoint, id, err);
        return throwError(() => err);
      })
    );
  }
}
