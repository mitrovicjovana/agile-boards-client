import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUp } from '../models/SignUp';
import { Login } from '../models/Login';
import { catchError, map, Observable, of } from 'rxjs';
import { ROOT_URL } from 'src/assets/constants';

const TOKEN = 'TOKEN';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(loginRequest: Login): Observable<boolean> {
    return this.http
      .post(`${ROOT_URL}/auth/login`, loginRequest, {
        ...httpOptions,
        observe: 'response',
        responseType: 'text',
      })
      .pipe(
        map(({ ok, body }) => {
          if (ok) {
            this.storeToken(body);
            return true;
          }
          throw new Error('Incorrect username or password');
        }),
        catchError(() => of(false))
      );
  }

  public signUp(signUpRequest: SignUp): Observable<boolean> {
    return this.http
      .post(`${ROOT_URL}/auth/signup`, signUpRequest, {
        ...httpOptions,
        observe: 'response',
        responseType: 'text',
      })
      .pipe(
        map(({ ok }) => {
          if (!ok) throw new Error('Unable to registers');
          return true;
        }),
        catchError(() => of(false))
      );
  }

  public logout() {
    this.http.post(`${ROOT_URL}/auth/logout`, {}).subscribe((_) => {
      localStorage.removeItem(TOKEN);
    });
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public storeToken(token: string | null) {
    if (token !== null) {
      localStorage.removeItem(TOKEN);
      localStorage.setItem(TOKEN, token);
    }
  }

  public checkExist(fieldName: string, fieldValue: string): Observable<string> {
    return this.http.get(
      `${ROOT_URL}'/user/exist/'${fieldName}/${fieldValue}`,
      {
        ...httpOptions,
        responseType: 'text',
      }
    );
  }
}
