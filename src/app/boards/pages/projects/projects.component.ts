import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectModalComponent } from '../../components/new-project-modal/new-project-modal.component';
import { EditProjectModalComponent } from '../../components/edit-project-modal/edit-project-modal.component';
import { NewProject } from '../../models/NewProject';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';

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
    this.projectService.getAllProjects().subscribe((response) => {
      this.projects = response;
    });
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
