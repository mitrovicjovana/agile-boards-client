import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewProject } from '../models/NewProject';
import { Observable, map, catchError, of } from 'rxjs';

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

  public deleteProject(id: string): Observable<boolean> {
    return this.http
      .delete(`${ROOT_URL}/${id}`, {
        observe: 'response',
      })
      .pipe(
        map(({ ok }) => {
          if (!ok) throw new Error('Unable to delete project');
          return true;
        }),
        catchError(() => of(false))
      );
  }

  public updateDescription(id: string, description: string) {
    return this.http.put(
      `${ROOT_URL}/description/${id}`,
      description,
      httpOptions
    );
  }

  public updateName(id: string, name: string) {
    return this.http.put(`${ROOT_URL}/name/${id}`, name, httpOptions);
  }

  public saveProject(project: NewProject) {
    return this.http.post(ROOT_URL, project, httpOptions);
  }
}
