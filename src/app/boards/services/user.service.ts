import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROOT_URL } from 'src/assets/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsername() {
    return this.http.get(`${ROOT_URL}/user/username`, { responseType: 'text' });
  }
}
