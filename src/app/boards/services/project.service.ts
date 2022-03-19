import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ROOT_URL = 'http://localhost:8080/api/project';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  public getAllProjects() {
    return this.http.get(ROOT_URL, {
      ...httpOptions,
    });
  }
}
