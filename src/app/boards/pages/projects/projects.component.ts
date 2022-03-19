import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';

const _projects: Project[] = [
  {
    id: 'string',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'string',
    user: {
      id: 'string',
      firstName: 'name',
      lastName: 'last',
      username: 'username',
      password: 'pasword',
      email: 'email@mail.com',
      isEnabled: true,
    },
  },
  {
    id: 'string',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'string',
    user: {
      id: 'string',
      firstName: 'name',
      lastName: 'last',
      username: 'username',
      password: 'pasword',
      email: 'email@mail.com',
      isEnabled: true,
    },
  },
  {
    id: 'string',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'string',
    user: {
      id: 'string',
      firstName: 'name',
      lastName: 'last',
      username: 'username',
      password: 'pasword',
      email: 'email@mail.com',
      isEnabled: true,
    },
  },
  {
    id: 'string',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'string',
    user: {
      id: 'string',
      firstName: 'name',
      lastName: 'last',
      username: 'username',
      password: 'pasword',
      email: 'email@mail.com',
      isEnabled: true,
    },
  },
  {
    id: 'string',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'string',
    user: {
      id: 'string',
      firstName: 'name',
      lastName: 'last',
      username: 'username',
      password: 'pasword',
      email: 'email@mail.com',
      isEnabled: true,
    },
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects?: Project[] | any = [];
  openedProject?: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // this.projectService.getAllProjects().subscribe((response) => {
    // this.projects = response;
    // });
    this.projects = _projects;
  }

  openNewProjectModal() {
    console.log('open modal: create new project');
  }

  showProjectDetails(project: Project) {
    this.openedProject = project;
  }
}
