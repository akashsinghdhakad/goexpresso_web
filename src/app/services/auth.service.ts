import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ApiService } from './api.service';
import { OTPResponse } from '../interfaces/otp-response';
import { AuthResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private readonly authTokenKey = 'auth_token';

  constructor(private api: ApiService) { }

  private checkLoginStatus(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  sendOTP(input: { mobile: string; }): Observable<OTPResponse> {
    return this.api.post<OTPResponse>('send-otp', input).pipe(
      map((response) => {
        if (response.status) {
          return response;
        } else {
          throw new Error('OTP sending failed');
        }
      }),
      catchError((error) => {
        return of({
          status: false,
          message: 'Failed to send OTP',
        });
      })
    );
  }

  verifyOTP(input: { mobile: string | null; otp: string }): Observable<boolean> {
    return this.api.post<AuthResponse>('verify-otp', input).pipe(
      map((response) => {
        if (response.token) {
          localStorage.setItem(this.authTokenKey, response.token);
          this.loggedIn.next(true);
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        this.loggedIn.next(false);
        return [false];
      })
    );
  }

  // Logout method
  logout(): void {
    localStorage.removeItem(this.authTokenKey); // Remove token from storage
    this.loggedIn.next(false); // Update login status
  }

  // Check if user is logged in (Observable to listen to changes)
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // Get the token (if needed in other parts of the app)
  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
}
