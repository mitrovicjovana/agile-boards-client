import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectModalComponent } from '../../components/new-project-modal/new-project-modal.component';
import { EditProjectModalComponent } from '../../components/edit-project-modal/edit-project-modal.component';
import { NewProject } from '../../models/NewProject';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';

const _projects: Project[] = [
  {
    id: 'one',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'first project',
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
    id: 'two',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'second project',
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
    id: 'three',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'third project',
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
    id: 'four',
    createdAt: [2022, 2, 3, 21, 35, 2],
    description: 'string',
    name: 'fourth project',
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
  newProject: NewProject = { name: '', description: '' };

  constructor(
    private projectService: ProjectService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.projectService.getAllProjects().subscribe((response) => {
    //   this.projects = response;
    // });
    this.projects = _projects;
  }

  showProjectDetails(project: Project) {
    this.openedProject = project;
  }

  openNewProjectModal() {
    const dialogRef = this.dialog.open(NewProjectModalComponent, {
      data: this.newProject,
    });
    dialogRef.afterClosed().subscribe((result) => this.saveProject(result));
  }

  openEditProjectModal(project: Project) {
    const dialogRef = this.dialog.open(EditProjectModalComponent, {
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => this.editProject(result));
  }

  saveProject(project: NewProject) {
    this.projectService.saveProject(project).subscribe((response) => {
      this.projects.push(response);
      this.openedProject = this.projects[this.projects.length - 1];
    });
  }

  editProject(project: Project) {
    this.projectService.updateProject(project).subscribe();
  }

  deleteProject({ id }: Project) {
    this.projectService.deleteProject(id).subscribe((res) => {
      if (res) {
        this.projects = this.projects.filter(
          ({ id: _id }: Project) => _id != id
        );
        this.openedProject = undefined;
      }
    });
  }
}
