import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ access: string, refresh: string }> {
    return this.http.post<{ access: string, refresh: string }>('http://127.0.0.1:8000/api/token/', { username, password }).pipe(
      tap((response) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
      })
    );
  }
}
