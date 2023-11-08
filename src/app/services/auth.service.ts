import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  ngOnInit(): void {}
  // private apiUrl = environment.apiUrl;
  private apiUrl = 'http://localhost:3000/users';
  private isLoggedIn = false;
  public uName: any;
  public password: any;
  constructor(private router: Router, private http: HttpClient) {}

  // setToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('token');
  // }

  // isLoggedIn() {
  //   return this.getToken() !== null;
  //   return !!localStorage.getItem('token');
  // }
  checkLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  register(user: any) {
    return this.http.post(this.apiUrl, user);
  }
  // register(user: any): Observable<any> {
  //   return this.checkUserNameAvailability(user.userName).pipe(
  //     switchMap((isAvailable: boolean) => {
  //       if (!isAvailable) {
  //         // If the username is not available, return an error Observable
  //         return throwError('Username is already taken!');
  //       }

  //       // If the username is available, proceed with the registration
  //       return this.http.post(`${this.apiUrl}/users/register`, user);
  //     }),
  //     catchError((error) => {
  //       // Catch any error from the username availability check or the registration
  //       return throwError(error);
  //     })
  //   );
  // }

  // Method to check username availability
  checkUserNameAvailability(userName: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.apiUrl}/api/check-username/${userName}`
    );
  }

  login(credentials: any) {
    this.isLoggedIn = true;
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // login({ userName, password }: any): Observable<any> {
  //   this.uName = userName;
  //   if (this.uName === 'DeebanPari' && password === 'Deeban@123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'DeebanPari' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }
}
