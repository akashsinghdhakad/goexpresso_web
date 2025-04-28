import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api'; // Set your base URL

  constructor(private http: HttpClient) { }

  private getHeaders(customHeaders?: any): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    if (customHeaders) {
      Object.keys(customHeaders).forEach(key => {
        headers = headers.set(key, customHeaders[key]);
      });
    }

    return headers;
  }

  get<T>(endpoint: string, params?: any, headers?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(headers),
      params: new HttpParams({ fromObject: params })
    });
  }

  post<T>(endpoint: string, data: any, headers?: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.getHeaders(headers)
    });
  }

  put<T>(endpoint: string, data: any, headers?: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.getHeaders(headers)
    });
  }

  delete<T>(endpoint: string, headers?: any): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(headers)
    });
  }
}
