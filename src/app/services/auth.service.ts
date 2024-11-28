import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.isBrowser() && this.checkAuthentication();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('https://localhost:7017/api/Auth/login', { email, password }, { withCredentials: true })
      .pipe(
        tap(res => {
          console.log('Token received:', res.message); // Ajusta si el backend devuelve algo diferente
          localStorage.setItem('token', res.message);
          this.authStatusListener.next(true);
        }, err => console.error('Login failed:', err))
      );
  }
  
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  checkAuthentication(): void {
    if (this.isBrowser()) {
      const token = localStorage.getItem('token');
      this.authStatusListener.next(token ? this.validateToken(token) : false);
    }
  }
  
  private validateToken(token: string): boolean {
    try {
      const { exp } = JSON.parse(atob(token.split('.')[1]));
      const isExpired = exp * 1000 < Date.now();
      isExpired && localStorage.removeItem('token'); // Eliminar token expirado
      return !isExpired;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }

  getEmailFromToken(token: string): string | null {
    try {
      const decoded: any = jwtDecode(token);
      return decoded?.email || null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  

  logout(): void {
    localStorage.removeItem('token');
    this.authStatusListener.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticate(): boolean {
    this.checkAuthentication();
    return this.authStatusListener.getValue(); // Devuelve el valor actual del estado
  }
  
  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }
}
