import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewProject } from '../models/NewProject';
import { Observable, map, catchError, of } from 'rxjs';
import { ROOT_URL } from 'src/assets/constants';
import { Project } from '../models/Project';

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
    return this.http.get(`${ROOT_URL}/project`, {
      ...httpOptions,
    });
  }

  public deleteProject(id: string): Observable<boolean> {
    return this.http
      .delete(`${ROOT_URL}/project/${id}`, {
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

  public updateProject(project: Project) {
    console.log('project to be updated: ');
    console.log(project);
    return this.http.put(`${ROOT_URL}/project`, project);
  }

  public saveProject(project: NewProject) {
    return this.http.post(`${ROOT_URL}/project`, project, httpOptions);
  }
}
