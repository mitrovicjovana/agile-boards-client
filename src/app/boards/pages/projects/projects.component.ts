import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectModalComponent } from '../../components/new-project-modal/new-project-modal.component';
import { NewProject } from '../../models/NewProject';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';

const _projects: Project[] = [
  {
    id: 'string',
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
    id: 'string',
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
    id: 'string',
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
    id: 'string',
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

  openTasksPage(project: Project) {
    console.log('open tasks page');
  }

  openNewProjectModal() {
    const dialogRef = this.dialog.open(NewProjectModalComponent, {
      data: this.newProject,
    });
    dialogRef.afterClosed().subscribe((result) => this.saveProject(result));
  }

  openEditProjectModal(project: Project) {}

  saveProject(project: NewProject) {
    this.projectService.saveProject(project).subscribe((response) => {
      console.log(response);
      this.projects.push(response);
      this.openedProject = this.projects[this.projects.length - 1];
    });
  }

  editProject(project: Project) {
    console.log('edit project');
  }

  deleteProject({ id }: Project) {
    this.projectService.deleteProject(id).subscribe((res) => {
      console.log(res);
      if (res) {
        this.projects = this.projects.filter(
          ({ id: _id }: Project) => _id != id
        );
        this.openedProject = undefined;
      }
    });
  }
}
